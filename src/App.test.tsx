import { render, screen } from "@testing-library/react";
import ButtonBContact from "./App";

test("renders learn react link", () => {
  render(<ButtonBContact />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
