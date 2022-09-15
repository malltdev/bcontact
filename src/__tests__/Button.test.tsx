import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

test("should return a button", async () => {
  render(<Button />);
  const buttonElement = screen.getByTestId("button-bcontact");
  expect(buttonElement).toBeInTheDocument();
});
