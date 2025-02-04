import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import NavBar from "./nav-bar";

test("NavBar component", () => {
	// ARRANGE
	render(<NavBar />);
	expect(screen.getByRole("button", { name: "About Product" })).toBeDefined();
	expect(screen.getByRole("button", { name: "About" })).toBeDefined();
	expect(screen.getByRole("button", { name: "Contact" })).toBeDefined();
});
