import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants.js";

import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initialSearchState = {
    searchField: "",
  };

  it("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });

  it("should handle CHANGE_SEARCH_FIELD", () => {
    expect(
      reducers.searchRobots(initialSearchState, {
        type: CHANGE_SEARCH_FIELD,
        payload: "adc",
      })
    ).toEqual({ searchField: "adc" });
  });
});

describe("requesRobots", () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: "",
  };

  it("should return the initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("should handle REQUEST_ROBOTS_PENDING", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({ isPending: true, robots: [], error: "" });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 123,
            name: "Vision",
            email: "vision@gmail.com",
          },
        ],
      })
    ).toEqual({
      isPending: false,
      robots: [
        {
          id: 123,
          name: "Vision",
          email: "vision@gmail.com",
        },
      ],
      error: "",
    });
  });

  it("should handle REQUEST_ROBOTS_FAILED", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "error occured",
      })
    ).toEqual({
      isPending: false,
      robots: [],
      error: "error occured",
    });
  });
});
