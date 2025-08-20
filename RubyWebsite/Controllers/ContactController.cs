using MailKit;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using MimeKit;
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
            .Produces<bool>(200, "application/json")
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
            Console.WriteLine("Password is missing");
            return false;
        }

        var mailMessage = new MimeMessage();
        mailMessage.Body = new TextPart("plain") { Text = contact.Message };
        mailMessage.From.Add(new MailboxAddress(_smtpSettings.SenderName, _smtpSettings.Username));
        mailMessage.To.Add(new MailboxAddress("Felix Conrad", "contact@rubinschwein47.com"));
        mailMessage.Subject = $"Website Message From: {contact.FirstName} {contact.LastName}, mail: {contact.Email}";
        try
        {
            using var smtp = new SmtpClient(new ProtocolLogger(Console.OpenStandardOutput()));
            await smtp.ConnectAsync(_smtpSettings.Server, _smtpSettings.Port, SecureSocketOptions.SslOnConnect);
            await smtp.AuthenticateAsync(_smtpSettings.Username, password);
            await smtp.SendAsync(mailMessage); // This uses MimeKit.MimeMessage
            await smtp.DisconnectAsync(true);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }


        return true;
    }
}