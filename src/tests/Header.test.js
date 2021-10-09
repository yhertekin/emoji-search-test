import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

describe("Header Component Tests", () => {
	test("Header rendered correctly", () => {
		render(<Header />);
		const headerText = "Emoji Search";
		const header = screen.getByText(headerText);
		expect(header).toHaveClass("component-header");
	});
});
