namespace RubyWebsite.DTOs;

public class ArticleDto
{
    public string? Handle { get; set; }
    public string Title { get; set; }
    public string[] Tags { get; set; }
    public DateTime Date { get; set; }
    public string Description { get; set; }
}

public class FullArticleDto(ArticleDto article,string text)
{
    public ArticleDto? MetaData { get;  }= article;
    public string Text { get; } = text;
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