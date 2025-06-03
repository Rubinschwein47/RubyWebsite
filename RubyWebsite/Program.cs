using System.Diagnostics;
using RubyWebsite.Controllers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
  options.AddPolicy(name: "_myAllowSpecificOrigins",
    policy  =>
    {
      policy.WithOrigins("*");
    });
});

var app = builder.Build();



app.UseCors("_myAllowSpecificOrigins");
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

var summaries = new[]
{
  "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
  {
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
          DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
          Random.Shared.Next(-20, 55),
          summaries[Random.Shared.Next(summaries.Length)]
        ))
      .ToArray();
    return forecast;
  })
  .WithName("GetWeatherForecast")
  .WithOpenApi();

app.MapGet("/randomValues/{amount:int}", (int amount) =>
{
  var random = new Random();
  var values = new int[amount];
  for (int i = 0; i < values.Length; i++)
  {
    values[i] = random.Next(-100,101);
  }
  return values;
}).WithName("RandomValues").WithOpenApi();

LanguageController.AddEndpoints(app);

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
  public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}