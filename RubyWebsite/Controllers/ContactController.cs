using System.Text.Json;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using RubyWebsite.DTOs;

namespace RubyWebsite.Controllers;

public class ContactController
{
  public static void AddEndpoints(WebApplication app)
  {
    app.MapPost("/contact", ContactRequest)
      .WithName("SendMail")
      .WithSummary("Send an email to contact@rubinschwein47.com")
      .Produces(200, typeof(bool), "application/json")
      .ProducesProblem(400, "text/plain")
      .ProducesProblem(404, "text/plain")
      .WithOpenApi(x =>
      {
        var exampleObject = new ContactDto(
          "John",
          "Doe",
          "test@gmail.com", 
          "some very long \n multiline message");
        var exampleString = JsonConvert.SerializeObject(exampleObject, Formatting.Indented);
        x.RequestBody = new OpenApiRequestBody
        {
          Content =
          {
            ["application/json"] = new OpenApiMediaType
            {
              Example = new OpenApiString(exampleString),
            }
          }
        };
        return x;
      });
  }

  private static bool ContactRequest(ContactDto contact)
  {
    Console.WriteLine($"Contact: {contact.FirstName} {contact.LastName}");
    return true;
  }
}