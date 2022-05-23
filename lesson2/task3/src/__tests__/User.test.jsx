import React from "react";
import { shallow } from "enzyme";
import User from "../User";
import { getUserData, userGateway } from "../usersGateway";
import "jsdom-global/register";

jest.mock("../usersGateway", () => {
  return {
    getUserData: jest.fn(() => Promise.resolve()),
  };
});

describe("User", () => {
  it("should not display", () => {
    const wrappedComponent = shallow(<User />);

    expect(wrappedComponent.find(".user").exists()).toEqual(false);
  });

  it("should  display", () => {
    const wrappedComponent = shallow(<User />);

    wrappedComponent.setState({
      userData: {
        avatar_url: "ndjfbg",
        name: "Ivan",
        location: "Lviv",
      },
    });

    expect(wrappedComponent.find(".user").exists()).toBeTruthy();
    expect(wrappedComponent.find(".user")).toMatchSnapshot();
  });

  // it("should  snapshot", () => {
  //   const wrappedComponent = shallow(<User />);

  //   wrappedComponent.setState({
  //     userData: {
  //       avatar_url: "ndjfbg",
  //       name: "Ivan",
  //       location: "Lviv",
  //     },
  //   });

  //   expect(wrappedComponent.find(".user")).toMatchSnapshot();
  // });

  it("should  get function", () => {
    // shallow(<User />);

    expect(getUserData).toBeCalled();
  });
});
