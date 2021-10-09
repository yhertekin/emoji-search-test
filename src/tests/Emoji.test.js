import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";

describe("Emoji Tests", () => {
	test("Emojis rendered correctly", () => {
		render(<App />);
		const emojis = screen.getAllByText("Click to copy emoji");
		expect(emojis.length).toEqual(20);
	});

	test("Emoji coppied", () => {
		render(<App />);
		const emojis = screen.getAllByText("Click to copy emoji");
		userEvent.click(emojis[0].parentElement);
	});
});
