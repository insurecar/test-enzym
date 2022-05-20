import React from "react";
import { shallow } from "enzyme";
import Mailbox from "../Mailbox";

describe("Mailbox", () => {
  test ("should not render count if no unread messages", () => {
    const wrappedComponent = shallow(<Mailbox unreadMessages={[]} />);
    expect(wrappedComponent.find(".mailbox__count").exists()).toEqual(false);
  });

  it("should  render count of unread messages", () => {
    const wrappedComponent = shallow(
      <Mailbox unreadMessages={[1, 2, 3, 4, 5]} />
    );
    expect(wrappedComponent.find(".mailbox__count").text()).toEqual("5");
  });
});
