package com.ojodev.cucumber.test.transformation;

import cucumber.api.Transformer;

public class EmailTransform extends Transformer<String> {

    @Override
    public String transform(String username) {
        return username.concat("@test.com");
    }
}
