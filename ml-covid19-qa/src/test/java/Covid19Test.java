import org.junit.Before;
import org.junit.Test;
import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selectors.byXpath;
import static com.codeborne.selenide.Selenide.*;


public class Covid19Test {
    @Before
    public void openSite(){
        open("http://localhost:3000");
    }

    @Test
    public void testMenuData(){
        element(byXpath("//button[1]")).click();
        element(byXpath("//div[@id='root']")).shouldHave(text("Оперативные данные"));
    }

    @Test
    public void testMenuCovid(){
        element(byXpath("//button[2]")).click();
        element(byXpath("//div[@id='root']")).shouldHave(text("Ситуация с covid-19"));
    }

    @Test
    public void testMenuInfo(){
        element(byXpath("//button[3]")).click();
        element(byXpath("//div[@id='root']")).shouldHave(text("Информация"));
    }

    @Test
    public void testMenuHome(){
        element(byXpath("//img[@alt='logo']")).click();
        element(byXpath("//div[@id='root']")).shouldHave(text("Home"));
    }

    @Test
    public void testZoom(){
        zoom(5.0);
        element(byXpath("//img[@alt='logo']")).shouldBe(visible);
    }

}
