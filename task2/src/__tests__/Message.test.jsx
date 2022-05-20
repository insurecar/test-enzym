import React from "react";
import { shallow } from "enzyme";
import Message from "../Message";

describe("Message", () => {
  it("equal to our text", () => {
    const wrappedComponent = shallow(<Message text={"1"} />);

    expect(wrappedComponent.find(".message").text()).toEqual("1");
  });

  it("equal to our text", () => {
    const wrappedComponent = shallow(<Message />);

    expect(wrappedComponent.exists()).toEqual(true);
  });
});
