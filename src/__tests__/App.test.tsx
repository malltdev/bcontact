import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

// deve retornar um botão
test("should return a button", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("button-bcontact");
  expect(buttonElement).toBeInTheDocument();
});

// deve retornar ao clicar no botão um container com a lista de contatos
test("should return when clicking on the button a container with the list of contacts", async () => {
  const BContact = document.createElement("div");
  BContact.setAttribute("id", "BContact");
  BContact.setAttribute("data-color", "#2ea6d9");
  BContact.setAttribute("data-align", "left");
  BContact.setAttribute("data-whatsapp", "21989710023");
  BContact.setAttribute("data-telegram", "marcuslorenlopes");
  BContact.setAttribute("data-callto", "21989710023");
  BContact.setAttribute("data-email", "marcusltorres@gmail.com");

  render(<App />, {
    container: document.body.appendChild(BContact),
  });

  const buttonElement = screen.getByTestId("button-bcontact");
  userEvent.click(buttonElement);
  const containerContact = await screen.findByTestId("container-contacts");

  expect(containerContact).toBeInTheDocument();
  expect(await screen.findByText("Whatsapp")).toBeInTheDocument();
  expect(await screen.findByText("Telegram")).toBeInTheDocument();
  expect(await screen.findByText("Email")).toBeInTheDocument();
  expect(await screen.findByText("Ligar")).toBeInTheDocument();

  expect(containerContact).toMatchSnapshot();
});

// deve retornar 1 elemento ao adicionar apenas um atributo na tag html
test("should return an element when adding only one attribute in html tag", async () => {
  const BContact = document.createElement("div");
  BContact.setAttribute("id", "BContact");
  BContact.setAttribute("data-whatsapp", "21989710023");

  render(<App />, {
    container: document.body.appendChild(BContact),
  });

  const buttonElement = screen.getByTestId("button-bcontact");
  userEvent.click(buttonElement);

  expect(screen.queryByText("Whatsapp")).toBeInTheDocument();
  expect(screen.queryByText("Telegram")).not.toBeInTheDocument();
  expect(screen.queryByText("Email")).not.toBeInTheDocument();
  expect(screen.queryByText("Ligar")).not.toBeInTheDocument();
});

// deve retornar uma mensagem de erro caso nenhum atributo seja adicionado
test("should return an error message if no attributes are added", async () => {
  const BContact = document.createElement("div");
  BContact.setAttribute("id", "BContact");

  render(<App />, {
    container: document.body.appendChild(BContact),
  });

  const buttonElement = screen.getByTestId("button-bcontact");
  userEvent.click(buttonElement);

  expect(
    screen.queryByText("ERRO! parâmetro(s) inválido(s)")
  ).toBeInTheDocument();
});

// deve retornar uma mensagem de erro caso o atributo whatsapp não seja um número
test("should return an error message if the whatsapp attribute is not a number", async () => {
  const BContact = document.createElement("div");
  BContact.setAttribute("id", "BContact");
  BContact.setAttribute("data-whatsapp", "número");

  render(<App />, {
    container: document.body.appendChild(BContact),
  });

  const buttonElement = screen.getByTestId("button-bcontact");
  userEvent.click(buttonElement);

  expect(
    screen.queryByText("ERRO! parâmetro(s) inválido(s)")
  ).toBeInTheDocument();
});

// deve retornar uma mensagem de erro caso o atributo telegram não seja um username válido
test("should return an error message if the telegram attribute is not a valid username", async () => {
  const BContact = document.createElement("div");
  BContact.setAttribute("id", "BContact");
  BContact.setAttribute("data-telegram", "2nick");

  render(<App />, {
    container: document.body.appendChild(BContact),
  });

  const buttonElement = screen.getByTestId("button-bcontact");
  userEvent.click(buttonElement);

  expect(
    screen.queryByText("ERRO! parâmetro(s) inválido(s)")
  ).toBeInTheDocument();
});

// deve retornar uma mensagem de erro caso o atributo email não seja um email válido
test("should return an error message if the email attribute is not a valid email", async () => {
  const BContact = document.createElement("div");
  BContact.setAttribute("id", "BContact");
  BContact.setAttribute("data-email", "marcuslorenlopes@gmailcom");

  render(<App />, {
    container: document.body.appendChild(BContact),
  });

  const buttonElement = screen.getByTestId("button-bcontact");
  userEvent.click(buttonElement);

  expect(
    screen.queryByText("ERRO! parâmetro(s) inválido(s)")
  ).toBeInTheDocument();

  // expect(BContact).toMatchSnapshot();
});

// deve retornar uma mensagem de erro caso o atributo ligar não seja um número
test("should return an error message if the call attribute is not a number", async () => {
  const BContact = document.createElement("div");
  BContact.setAttribute("id", "BContact");
  BContact.setAttribute("data-callto", "número");

  render(<App />, {
    container: document.body.appendChild(BContact),
  });

  const buttonElement = screen.getByTestId("button-bcontact");
  userEvent.click(buttonElement);

  expect(
    screen.queryByText("ERRO! parâmetro(s) inválido(s)")
  ).toBeInTheDocument();
});
