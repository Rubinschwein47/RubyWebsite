using System.Net;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Models;
using BadHttpRequestException = Microsoft.AspNetCore.Http.BadHttpRequestException;

namespace RubyWebsite.Controllers;

public static class LanguageController
{
  static char sep = Path.DirectorySeparatorChar; 
  static string basePath = Directory.GetCurrentDirectory() + $"{sep}Resources{sep}Languages{sep}lang_";
  public static void AddEndpoints(WebApplication app)
  {
    app.MapGet("/locales/{language}", GetLanguage)
      .WithName("Translation")
      .WithSummary("returns a yaml document containing all translations for the frontend.")
      .Produces(200,typeof(string),"text/yml")
      .ProducesProblem(400,"text/plain")
      .ProducesProblem(404,"text/plain")
      .WithOpenApi();
  }
  private static IResult GetLanguage(string language)
  {
    if (language.Length != 2)
    {
      return Results.BadRequest($"Expected 2 character country code like 'en', not {language}");
    }
    string filePath = basePath + language + ".yml";
    if (!File.Exists(filePath))
    {
      return Results.NotFound($"No Translation found for language {language}");
    }
    return Results.Ok(File.ReadAllText(filePath));
  }
}