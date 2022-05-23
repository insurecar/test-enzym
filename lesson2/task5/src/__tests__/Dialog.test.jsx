import React from "react";
import { shallow } from "enzyme";
import Dialog from "../Dialog";
import "jsdom-global/register";

describe("Dialog", () => {
  test("should not be show <Dialog />", () => {
    const wrappedComponent = shallow(<Dialog isOpen={false} />);
    expect(wrappedComponent.find(".dialog").exists()).toBeFalsy();
  });

  test("should be show <Dialog />", () => {
    const wrappedComponent = shallow(<Dialog isOpen />);
    expect(wrappedComponent.find(".dialog").exists()).toBeTruthy();
  });

  test("should be closed <Dialog />", () => {
    const wrappedComponent = shallow(<Dialog />);
    wrappedComponent.find(".dialog__close-btn").simulate("click");
    expext(wrappedComponent.find("Dialog").exists()).toBeFalsy();
  });
});
