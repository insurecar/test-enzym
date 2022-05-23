import React from "react";
import { shallow } from "enzyme";
import UserGreeting from "../UserGreeting";
import "jsdom-global/register";

describe("UserGreeting", () => {
  it("should display UserGreeting", () => {
    const wrappedComponent = shallow(<UserGreeting />);

    expect(wrappedComponent).toMatchSnapshot();
  });
});
