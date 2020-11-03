import React from "react";

import { render } from "@testing-library/react";

import App from "./App";
import { useSelector } from "react-redux";
import { useDispatch } from "../__mocks__/react-redux";
import tasks from "../fixtures/tasks";

jest.mock("react-redux");

describe("App", () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation(selector =>
    selector({
      tasks
    })
  );
  it("renders tasks", () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent("아무 일도 하기 싫다");
  });
});
