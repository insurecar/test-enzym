import React from "react";
import { shallow } from "enzyme";
import Login from "../Login";

describe("Auth", () => {
  test("should display Login button if user legged out", () => {
    const wrappedComponent = shallow(<Login />);
    wrappedComponent.find("Login").prop("onLogin");

    expect(wrappedComponent.find("Logn").exists()).toBeTruthy();
  });
});
