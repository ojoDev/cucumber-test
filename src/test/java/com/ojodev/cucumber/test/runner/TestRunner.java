package com.ojodev.cucumber.test.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;

//@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/java/com/ojodev/cucumber/test/feature"}, format = {"json:target/cucumber/cucumber.json", "html:target/cucumber/site/cucumber-results"},glue="com.ojodev.cucumber.test.step")
public class TestRunner extends AbstractTestNGCucumberTests {
}
