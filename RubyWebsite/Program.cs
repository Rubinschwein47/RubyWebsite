using RubyWebsite.Controllers;
using RubyWebsite.DataObjects;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var isDev = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Development";
Console.WriteLine("Starting RubyWebsite...");
Console.WriteLine("Environment is " + (isDev ? "Development" : "Production"));

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "_myAllowSpecificOrigins",
        policy =>
        {
            if (!isDev) return;
            Console.WriteLine("Allowing external CORS");
            policy.WithOrigins("*");
            policy.AllowAnyHeader();
            policy.AllowAnyMethod();
        });
});
builder.Services.AddControllers(); 
var app = builder.Build();

if (isDev)
{
    Console.WriteLine("Loaded .env file");
    DotNetEnv.Env.Load();
}

app.UseCors("_myAllowSpecificOrigins");
// Configure the HTTP request pipeline.
if (isDev)
{
    Console.WriteLine("Added OpenApi");
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    Console.WriteLine("Setting up to serve frontend");
    app.UseStaticFiles();
    app.MapControllers();
}

app.UseHttpsRedirection();

Console.WriteLine("Setting up Endpoints...");
LanguageController.AddEndpoints(app);
var smtp = builder.Configuration.GetSection("Smtp").Get<SmtpSettings>();
ContactController.AddEndpoints(app, smtp);
Console.WriteLine("Endpoints have been set up successfully");

if (!isDev)
{
    Console.WriteLine("map rest to index html");
    app.MapFallbackToFile("index.html");
}
app.Run();
Console.WriteLine("App is now running");