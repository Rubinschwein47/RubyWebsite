using RubyWebsite.Controllers;
using RubyWebsite.DataObjects;

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
      policy.AllowAnyHeader();
      policy.AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
  DotNetEnv.Env.Load();

app.UseCors("_myAllowSpecificOrigins");
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

LanguageController.AddEndpoints(app);
var smtp = builder.Configuration.GetSection("Smtp").Get<SmtpSettings>();
ContactController.AddEndpoints(app, smtp);
app.Run();
