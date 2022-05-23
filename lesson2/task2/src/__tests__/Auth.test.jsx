import React from "react";
import { shallow } from "enzyme";
import Auth from "../Auth";

describe("Auth", () => {
  test("should display Login button if user legged out", () => {
    const wrappedComponent = shallow(<Auth />);

    expect(wrappedComponent.find("Login").exists()).toBeTruthy();
  });

  test("should display Logout button if user legged out", () => {
    const wrappedComponent = shallow(<Auth />);
    wrappedComponent.find("Login").prop("onLogin")();

    expect(wrappedComponent.find("Logout").exists()).toBeTruthy();
  });
});
