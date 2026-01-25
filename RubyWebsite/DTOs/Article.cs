namespace RubyWebsite.DTOs;

public class ArticleDto
{
    string Title { get; set; }
    string[] Tags { get; set; }
    DateTime Date { get; set; }
    string Description { get; set; }
}
//
// public abstract class ArticlePart
// {
//     ArticlePartType Type { get; set; }
// }
//
// public class ArticleTextPart: ArticlePart
// {
//     TextType TextType { get; set; }
//     string Text { get; set; }
// }
//
// public enum ArticlePartType
// {
//     Text,
//     Image,
//     ImageArray
// }
// public enum TextType
// {
//     Paragraph,
//     Title,
// }