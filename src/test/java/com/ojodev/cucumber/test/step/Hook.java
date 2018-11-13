package com.ojodev.cucumber.test.step;

import com.ojodev.cucumber.test.base.BaseUtil;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.io.File;

public class Hook extends BaseUtil {

    private BaseUtil base;

    public Hook(BaseUtil base) {
        this.base = base;
    }


    @Before
    public void initializeTests() {
        System.out.println("HOOK: Opening the browser: Firefox");
        if (new File( BaseUtil.PATH_GECKODRIVER).exists()) {
            System.setProperty("webdriver.gecko.driver", BaseUtil.PATH_GECKODRIVER);
            System.out.println("Find valid geckodriver");
            base.driver = new FirefoxDriver();
            System.out.println("Finish open FirefoxDriver");
        } else {
            System.out.println("Don't exist valid path to geckodriver.exe");
        }

    }

    @After
    public void finisTests(Scenario scenario) {
        if (scenario.isFailed()) {
            System.out.println("FAIL!!!");
        }
        System.out.println("HOOK: Finish Test");
    }
}
