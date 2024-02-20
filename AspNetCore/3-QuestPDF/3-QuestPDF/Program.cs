using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;

QuestPDF.Settings.License = LicenseType.Community;



var lineItems=new List<Product>()
{
    new Product{Index=1,Name="Samsung",Price=100},
    new Product{Index=2,Name="Apple",Price=200},    
    new Product{Index=3,Name="Realme",Price=300},
    new Product{Index=4,Name="Sony",Price=400},

};


QuestPDF.Fluent.Document.Create(container =>
{
    container.Page(page =>
    {
        page.Margin(50);
        page.Size(PageSizes.A4);
        page.PageColor(Colors.White);
        page.DefaultTextStyle(style => style.FontSize(12));

        page.Header()
            .AlignCenter()
            .Text("Header Text")
            .SemiBold()
            .FontColor(Colors.Grey.Darken4);

        page.Content()
            .Table(table =>
            {
                table.ColumnsDefinition(columns =>
                {
                    columns.ConstantColumn(20);
                    columns.RelativeColumn();
                    columns.RelativeColumn();
                });

                table.Header(header =>
                {
                    header.Cell().Border(0).Text("ID");
                    header.Cell().Border(0).Text("Name");
                    header.Cell().Border(0).AlignRight().Text("Price");
                });

                foreach (var lineItem in lineItems)
                {
                    table.Cell().Text(lineItem.Index.ToString());
                    table.Cell().Text(lineItem.Name);
                    table.Cell().Text($"${lineItem.Price}");
                }

            });
        page.Footer()
        .AlignCenter()
        .Text(x =>
        {
            x.Span("Page Footer");
            x.CurrentPageNumber();
        });
    });
})
    //.GeneratePdfAndShow();
//.ShowInPreviewer();
.GeneratePdf("test.pdf");



public class Product
{
    public int Index { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
}
