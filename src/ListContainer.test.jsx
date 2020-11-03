import React from "react";

import { fireEvent, render } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";

import ListContainer from "./ListContainer";
import tasks from "../fixtures/tasks";

jest.mock("react-redux");

describe("ListContainer", () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation(selector =>
    selector({
      tasks
    })
  );

  it("renders tasks", () => {
    const { container, getAllByText } = render(<ListContainer />);

    expect(container).toHaveTextContent("아무 일도 하기 싫다");

    const buttons = getAllByText("완료");

    fireEvent.click(buttons[0]);

    expect(dispatch).toBeCalledWith({
      type: "deleteTask",
      payload: { id: 1 }
    });
  });
});
