using Newtonsoft.Json;

namespace RubyWebsite.DTOs;

[method: JsonConstructor]
public class ContactDto(string firstName, string lastName, string email, string message)
{
  public string FirstName { get;} = firstName;
  public string LastName { get;} = lastName;
  public string Email { get;} = email;
  public string Message { get;} = message;
}