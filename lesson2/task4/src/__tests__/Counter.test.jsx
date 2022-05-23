import React from "react";
import { shallow } from "enzyme";
import Counter from "../Counter";
import "jsdom-global/register";

describe("User", () => {
  test("check in start value of state", () => {
    const wrappedComponent = shallow(<Counter />);
    expect(wrappedComponent.state().counter).toEqual(0);
  });

  test("check function increment", () => {
    const wrappedComponent = shallow(<Counter />);
    wrappedComponent.find(".counter__button:last-child()").simulate("click");
    expect(wrappedComponent.state().counter).toEqual(1);
  });

  test("check function decrement", () => {
    const wrappedComponent = shallow(<Counter />);
    wrappedComponent.find(".counter__button:first-child()").simulate("click");
    expect(wrappedComponent.state().counter).toEqual(-1);
  });

  test("check function reset", () => {
    const wrapperComponent = shallow(<Counter />);
    wrapperComponent.find(".counter__value").simulate("click");
    expect(wrapperComponent.state().counter).toEqual(0);
  });
});
