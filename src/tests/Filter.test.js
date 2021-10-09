import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";

describe("Filter Tests", () => {
	test("Test if EmojiResult rendered correctly when filtered", () => {
		render(<App />);
		const input = screen.getByRole("textbox");
		userEvent.type(input, "100");
		const emojis = screen.getAllByText("Click to copy emoji");
		expect(emojis.length).toEqual(1);
	});
});
