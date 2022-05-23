import React from "react";
import { shallow } from "enzyme";
import User from "../User";

describe("Message", () => {
  it("equal name", () => {
    const wrappedComponent = shallow(<User name="Ivan" />);

    expect(wrappedComponent.find(".user__name").text()).toEqual("Ivan");
  });

  it("equal age", () => {
    const wrappedComponent = shallow(<User age={35} />);

    expect(wrappedComponent.find(".user__age").text()).toEqual("35");
  });
});
