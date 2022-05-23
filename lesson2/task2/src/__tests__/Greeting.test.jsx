import React from "react";
import { shallow } from "enzyme";
import Greeting from "../Greeting";

describe("Greeting", () => {
  it("should display user greeting if user is logged in", () => {
    const wrappedComponent = shallow(<Greeting isLoggedIn />);

    expect(wrappedComponent.find("UserGreeting").exists()).toBeTruthy();
  });

  it("should display guest greeting if user is logged in", () => {
    const wrappedComponent = shallow(<Greeting isLoggedIn={false} />);

    expect(wrappedComponent.find("GuestGreeting").exists()).toBeTruthy();
  });
});
