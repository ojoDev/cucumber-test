$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "This feature deals with the login functionality of the app",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2781748233,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the username as \"admin\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 588854853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 25
    },
    {
      "val": "admin",
      "offset": 49
    }
  ],
  "location": "LoginStep.iEnterTheUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "duration": 2375967,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 63563036,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserformPage()"
});
formatter.result({
  "duration": 21590,
  "status": "passed"
});
formatter.after({
  "duration": 74539,
  "status": "passed"
});
formatter.uri("LoginWithDataTable.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "This feature deals with the login functionality of the app",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2227157275,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the following for login",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 7
    },
    {
      "cells": [
        "admin",
        "adminpassword"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 556030829,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iEnterTheFollowingForLogin(DataTable)"
});
formatter.result({
  "duration": 66864305,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 26873310,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserformPage()"
});
formatter.result({
  "duration": 35984,
  "status": "passed"
});
formatter.after({
  "duration": 51919,
  "status": "passed"
});
formatter.uri("LoginWithDataTransformation.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "This feature deals with the login functionality of the app",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2243666187,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the user email address as Email:admin",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter the username as \"admin\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 704711787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 40
    }
  ],
  "location": "LoginStep.iEnterTheUserEmailAddressAsEmailAdmin(String)"
});
formatter.result({
  "duration": 88932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 25
    },
    {
      "val": "admin",
      "offset": 49
    }
  ],
  "location": "LoginStep.iEnterTheUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "duration": 68370,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 51020581,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserformPage()"
});
formatter.result({
  "duration": 30329,
  "status": "passed"
});
formatter.after({
  "duration": 50377,
  "status": "passed"
});
formatter.uri("LoginWithExamples.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "This feature deals with the login functionality of the app",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter \u003cusername\u003e and \u003cpassword\u003e for login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "loginfeature;login-with-correct-username-and-password;;1"
    },
    {
      "cells": [
        "admin",
        "adminpassword"
      ],
      "line": 12,
      "id": "loginfeature;login-with-correct-username-and-password;;2"
    },
    {
      "cells": [
        "user",
        "pass123"
      ],
      "line": 13,
      "id": "loginfeature;login-with-correct-username-and-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2220808168,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter admin and adminpassword for login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 560239921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 8
    },
    {
      "val": "adminpassword",
      "offset": 18
    }
  ],
  "location": "LoginStep.iEnterUsernameAndPasswordForLogin(String,String)"
});
formatter.result({
  "duration": 112579,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 53907006,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserformPage()"
});
formatter.result({
  "duration": 33413,
  "status": "passed"
});
formatter.after({
  "duration": 34955,
  "status": "passed"
});
formatter.before({
  "duration": 2246156274,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter user and pass123 for login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 549934638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 8
    },
    {
      "val": "pass123",
      "offset": 17
    }
  ],
  "location": "LoginStep.iEnterUsernameAndPasswordForLogin(String,String)"
});
formatter.result({
  "duration": 111036,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 47080855,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserformPage()"
});
formatter.result({
  "duration": 44209,
  "status": "passed"
});
formatter.after({
  "duration": 42666,
  "status": "passed"
});
formatter.uri("LoginWithLambdas.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "This feature deals with the login functionality of the app",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2711435641,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I just need test lambdas in java 8",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 406747398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 33
    }
  ],
  "location": "StepWithJava8.java:8"
});
formatter.result({
  "duration": 226185,
  "status": "passed"
});
formatter.after({
  "duration": 33414,
  "status": "passed"
});
});