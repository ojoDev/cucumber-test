package com.ojodev.cucumber.test.step;

import cucumber.api.PendingException;
import cucumber.api.java8.En;

public class StepWithJava8 implements En {
    public StepWithJava8() {
        And("^I just need test lambdas in java (\\d+)$", (Integer arg0) -> {
            System.out.println("Java Version:"+arg0);
        });
    }
}
