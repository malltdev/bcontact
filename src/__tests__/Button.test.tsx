import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Button from "../components/Button";

test("should return a button", async () => {
  render(<Button />);
  const buttonElement = screen.getByTestId("button-bcontact");
  expect(buttonElement).toBeInTheDocument();
});
