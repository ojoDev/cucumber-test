package com.ojodev.cucumber.test.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    @FindBy(how= How.NAME, using = "UserName")
    private WebElement txtUsernName;

    @FindBy(how= How.NAME, using = "Password")
    private WebElement txtPassword;

    @FindBy(how= How.NAME, using = "Login")
    private WebElement btnLogin;

    /**
     * Constructor de la página de login
     * @param driver driver asociado al motor que arranca la página de login
     */
    public  LoginPage(WebDriver driver) {
        //Inicializa la página y la asocia a un Driver
        PageFactory.initElements(driver, this );
    }

    /**
     * Login action
     *
     * @param userName username fiel
     * @param password password field
     */
    public void login(String userName, String password) {
        txtUsernName.sendKeys(userName);
        txtPassword.sendKeys(password);
    }

    /**
     * Click login action
     */
    public void clickLogin() {
        btnLogin.submit();
    }

    public WebElement getTxtUsernName() {
        return txtUsernName;
    }

    public void setTxtUsernName(WebElement txtUsernName) {
        this.txtUsernName = txtUsernName;
    }

    public WebElement getTxtPassword() {
        return txtPassword;
    }

    public void setTxtPassword(WebElement txtPassword) {
        this.txtPassword = txtPassword;
    }

    public WebElement getBtnLogin() {
        return btnLogin;
    }

    public void setBtnLogin(WebElement btnLogin) {
        this.btnLogin = btnLogin;
    }

}
