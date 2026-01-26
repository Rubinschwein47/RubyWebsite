using System.Text.Json;
using Microsoft.OpenApi.Models;
using RubyWebsite.DTOs;

namespace RubyWebsite.Controllers;

public class ArticleController
{
    static char sep = Path.DirectorySeparatorChar;
    private static string basePath = Directory.GetCurrentDirectory() + $"{sep}Resources{sep}Articles{sep}";
    private static string[] allowedFileExtensions = [".png", ".jpg", ".jpeg", ".webp", ".gif"];
    private static Dictionary<string, ArticleDto> articles;

    public static void AddEndpoints(WebApplication app)
    {
        app.MapGet("/api/articles/{article}/{fileName}", GetArticleResource)
            .WithName("ArticleResource")
            .WithSummary("get a file specific to an article")
            .Produces(StatusCodes.Status200OK)
            .Produces(StatusCodes.Status404NotFound)
            .Produces(StatusCodes.Status400BadRequest)
            .WithOpenApi(op =>
            {
                op.Responses["200"].Content["image/*"] =
                    new OpenApiMediaType();
                return op;
            });
        app.MapGet("/api/articles", GetOverview)
            .WithName("AllArticles")
            .WithSummary("Get all articles metadata")
            .Produces<ArticleDto[]>(StatusCodes.Status200OK, "application/json")
            .WithOpenApi();
        app.MapGet("/api/articles/{article}", GetFullArticle)
            .WithName("FullArticle")
            .WithSummary("Gets the Articles text content and metadata but not media")
            .Produces<FullArticleDto>(StatusCodes.Status200OK, "text/json")
            .ProducesProblem(StatusCodes.Status404NotFound, "text/plain");
        
        CollectArticles();
    }

    private static IResult GetFullArticle(string article)
    {
        articles.TryGetValue(article, out var articleDto);
        if (articleDto == null)
        {
            return Results.NotFound();
        }

        var TextPath = Path.Combine(basePath, articleDto.Handle, "main.md");
        if (!File.Exists(TextPath))
        {
            return Results.NotFound("text File wasn't found even though it should be there, some gross mishap happened (although Server is likely fine :))");
        }
        return Results.Ok(new FullArticleDto(articleDto,File.ReadAllText(TextPath)));
    }

    private static IResult GetArticleResource(string article, string fileName)
    {
        if (!allowedFileExtensions.Contains(Path.GetExtension(fileName)))
        {
            return Results.BadRequest(
                $"Invalid file extension, only {string.Join(", ", allowedFileExtensions)} as allowed.");
        }

        var path = Path.Combine(basePath, article, fileName);

        if (!File.Exists(path))
            return Results.NotFound();

        var stream = File.OpenRead(path);
        return Results.File(stream, "application/octet-stream", fileName);
    }

    private static IResult GetOverview()
    {
        return Results.Ok(articles.Values.ToArray());
    }

    private static void CollectArticles()
    {
        var directories = Directory.GetDirectories(basePath);
        articles = new Dictionary<string, ArticleDto>();
        foreach (var directory in directories)
        {
            if (File.Exists(Path.Combine(directory, "metadata.json")))
            {
                var articleHandle = directory.Split(sep).Last();
                var article = JsonSerializer.Deserialize<ArticleDto>(
                    File.ReadAllText(Path.Combine(directory, "metadata.json")));
                if (article == null)
                    throw new Exception(
                        $"Article metadata file \"{File.Exists(Path.Combine(directory, "metadata.json"))} could not be deserialized.");
                article.Handle = articleHandle;
                articles.Add(articleHandle, article);
            }
            else
            {
                throw new Exception($"Article Folder \"{directory}\" doesnt Contain metadata.json");
            }
        }
    }
}