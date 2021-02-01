import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders MainPage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filter robots correctly when array is empty", () => {
  expect(wrapper.instance().filteredRobots()).toEqual([]);
});

it("filter robots correctly with search term a", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 1,
        name: "Vision",
        email: "vision@gmail.com",
      },
    ],
    searchField: "a",
    isPending: false,
  };

  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filteredRobots()).toEqual([]);
});

it("filter robots correctly with search term v", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 1,
        name: "Vision",
        email: "vision@gmail.com",
      },
    ],
    searchField: "v",
    isPending: false,
  };

  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filteredRobots()).toEqual([
    {
      id: 1,
      name: "Vision",
      email: "vision@gmail.com",
    },
  ]);
});
