namespace Tests;

public class ChromeExtensionTestServerPageTest : ChromeExtensionPageTest
{
    private readonly TestFactory _testFactory;

    protected ChromeExtensionTestServerPageTest()
    {
        _testFactory = new TestFactory();
    }

    protected string ServerAddress => _testFactory.ServerAddress;
}