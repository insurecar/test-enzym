import React from "react";
import { shallow } from "enzyme";
import Dialog from "../Dialog";
import "jsdom-global/register";

const mockFunction = jest.fn();

describe("Dialog", () => {
  test("should not be show <Dialog />", () => {
    const wrappedComponent = shallow(
      <Dialog onClose={mockFunction} isOpen={false} />
    );
    expect(wrappedComponent.find(".dialog").exists()).toBeFalsy();
  });

  test("should be show <Dialog />", () => {
    const wrappedComponent = shallow(<Dialog onClose={mockFunction} isOpen />);
    expect(wrappedComponent.find(".dialog").exists()).toBeTruthy();
  });

  test("should be closed <Dialog />", () => {
    const wrappedComponent = shallow(<Dialog onClose={mockFunction} isOpen />);
    wrappedComponent.find(".dialog__close-btn").simulate("click");
    expect(wrappedComponent.find(".dialog").exists()).toBeTruthy();
  });

  test("should be show h1", () => {
    const wrappedComponent = shallow(
      <Dialog onClose={mockFunction} isOpen title="Ivan" />
    );
    expect(wrappedComponent.find(".dialog__title").text()).toEqual("Ivan");
  });

  it("should be show children elements", () => {
    const wrappedComponent = shallow(
      <Dialog onClose={mockFunction} isOpen children="Grid Dynamics" />
    );
    expect(wrappedComponent.find(".dialog__content")).toMatchSnapshot();
  });
});
