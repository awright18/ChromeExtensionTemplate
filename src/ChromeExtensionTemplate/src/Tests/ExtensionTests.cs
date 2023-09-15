namespace Tests;

using Microsoft.Playwright;
using NUnit.Framework;
using System.Threading.Tasks;

[Parallelizable(ParallelScope.Self)]
[TestFixture]
public class ExtensionTests : ChromeExtensionTestServerPageTest
{
    public ExtensionTests()
    {
        PathToExtension = Path.GetFullPath(@"./ChromeExtension");
    }
    
    [Test]
    public async Task Extension_is_loaded()
    {
        Page.Console += (console, msg) => Console.WriteLine(msg.Text);
        
        Page.PageError += (sender, error) => Console.WriteLine(error);

        var indexUrl = new Uri(new Uri(ServerAddress), "index.html").ToString();
        
        await Page.GotoAsync(indexUrl);
        
        var h1 = await Page.QuerySelectorAsync("h1");

        var h1Text = await h1.InnerTextAsync();
        
        Assert.AreEqual(h1Text,"Hello from you new Chrome extension!");
    }
}