using System.Net;
using System.Net.Mail;
using System.Runtime.InteropServices.JavaScript;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using RubyWebsite.DataObjects;
using RubyWebsite.DTOs;

namespace RubyWebsite.Controllers;

public static class ContactController
{
  private static SmtpSettings _smtpSettings;

  public static void AddEndpoints(WebApplication app, SmtpSettings smtpSettings)
  {
    _smtpSettings = smtpSettings;
    app.MapPost("/contact", ContactRequest)
      .WithName("SendMail")
      .WithSummary("Send an email to contact@rubinschwein47.com")
      .Produces(200, typeof(bool), "application/json")
      .ProducesProblem(400, "application/problem+json")
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

  private static async Task<bool> ContactRequest(ContactDto contact)
  {
    Console.WriteLine($"Contact: {contact.FirstName} {contact.LastName}");
    var password = Environment.GetEnvironmentVariable("EMAIL_PASSWORD");
    if (string.IsNullOrEmpty(password))
    {
      return false;
    }

    var mailMessage = new MailMessage(_smtpSettings.Username, "contact@rubinschwein47.com");
    mailMessage.Subject = $"Website Message From: {contact.FirstName} {contact.LastName}, mail: {contact.Email}";
    mailMessage.Body = contact.Message;
    try
    {
      using var smtp = new SmtpClient();
      smtp.Host = _smtpSettings.Server;
      smtp.EnableSsl = true;
      var smtpCredentials = new NetworkCredential(_smtpSettings.Username, password);
      smtp.Credentials = smtpCredentials;
      smtp.Port = _smtpSettings.Port;
      smtp.Send(mailMessage);
    }
    catch (System.Net.Mail.SmtpException ex)
    {
      Console.WriteLine(ex);
      throw;
    }
    catch (Exception e)
    {
      Console.WriteLine(e);
      throw;
    }


    return true;
  }
}