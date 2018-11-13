package com.ojodev.cucumber.test.step;

import com.ojodev.cucumber.test.base.BaseUtil;
import com.ojodev.cucumber.test.bean.User;
import com.ojodev.cucumber.test.page.LoginPage;
import com.ojodev.cucumber.test.transformation.EmailTransform;
import cucumber.api.DataTable;
import cucumber.api.Transform;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import java.util.List;

public class LoginStep extends BaseUtil{

    private String user;
    private String password;

    private BaseUtil base;

    public LoginStep(BaseUtil base) {
        this.base = base;
    }


    @Given("^I navigate to the login page$")
    public void iNavigateToTheLoginPage() throws Throwable {
        base.driver.navigate().to("http://www.executeautomation.com/demosite/Login.html");
    }


    @And("^I click login button$")
    public void iClickLoginButton() throws Throwable {
        LoginPage page = new LoginPage(base.driver);
        page.clickLogin();
    }

    @Then("^I should see the userform page$")
    public void iShouldSeeTheUserformPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
       // throw new PendingException();
    }


    @And("^I enter the username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
    public void iEnterTheUsernameAsAndPasswordAs(String user, String password) throws Throwable {
        System.out.println("User: "+user+" - Password: "+password);
       // throw new PendingException();
    }

    @And("^I enter the following for login$")
    public void iEnterTheFollowingForLogin(DataTable table) throws Throwable {

        // Primera forma de extraer atributos (listas)
//        List<List<String>> params = table.raw();
//        System.out.println(params.get(0).get(0)+": "+params.get(1).get(0));
//        System.out.println(params.get(0).get(1)+": "+params.get(1).get(1));

        // Segunda forma de extraer atributos (clase)
        List<User> users = table.asList(User.class);
        LoginPage page = new LoginPage(base.driver);
        users.stream().forEach(u -> page.login(u.getUserName(),u.getPassword()));


    }

    @And("^I enter ([^\"]*) and ([^\"]*) for login$")
    public void iEnterUsernameAndPasswordForLogin(String username, String password) throws Throwable {
        System.out.println("User: "+username+" - Password: "+password+ "\b");

    }

    @And("^I enter the user email address as Email:([^\"]*)$")
    public void iEnterTheUserEmailAddressAsEmailAdmin(@Transform(EmailTransform.class) String email) throws Throwable {
        System.out.println("Email transformed:" +email);
    }

}
