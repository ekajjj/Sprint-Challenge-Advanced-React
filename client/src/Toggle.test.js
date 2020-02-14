import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Toggle from "./hooks/Toggle";

afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(<Toggle text="false" />); 
    expect(asFragment()).toMatchSnapshot();
});

it("tests", () => {
    const { getByTestId, getByText } = render(<Toggle />);

    expect(getByTestId("divvy")).toHaveClass("toggle");
    fireEvent.click(getByText("Toggle"))

});