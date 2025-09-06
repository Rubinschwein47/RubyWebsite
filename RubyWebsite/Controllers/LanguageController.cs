namespace RubyWebsite.Controllers;

public static class LanguageController
{
    static char sep = Path.DirectorySeparatorChar;
    static string basePath = Directory.GetCurrentDirectory() + $"{sep}Resources{sep}Languages{sep}lang_";

    private static Dictionary<string, string?> languages = new()
    {
        {"en", null},
        {"de", null},
    };

    public static void AddEndpoints(WebApplication app)
    {
        app.MapGet("/api/locales/{language}", GetLanguage)
            .WithName("Translation")
            .WithSummary("returns a yaml document containing all translations for the frontend.")
            .Produces<string>(200, "text/yml")
            .ProducesProblem(400, "text/plain")
            .ProducesProblem(404, "text/plain")
            .WithOpenApi();

        LoadAllLanguages();
    }

    private static void LoadAllLanguages()
    {
        foreach (var language in languages.Keys)
        {
            var filePath = basePath + language + ".yml";
            if (!File.Exists(filePath))
            {
                throw new FileNotFoundException($"No Translation found for language {language}");
            }

            languages[language] = File.ReadAllText(filePath);
        }
    }

    private static IResult GetLanguage(string language)
    {
        if (language.Length != 2)
        {
            return Results.BadRequest($"Expected 2 character country code like 'en', not {language}");
        }

        if (!languages.ContainsKey(language))
        {
            return Results.NotFound($"No Translation found for language {language}");
        }
        
        return Results.Ok(languages[language]);
    }
}