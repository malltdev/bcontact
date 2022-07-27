import styled from "styled-components";
import { AppProvider } from "./context/AppProvider";
import Button from "./components/Button";
import ContactList from "./components/ContactList";
import GlobalStyles from "./utils/GlobalStyles";

const rootElement = document.getElementById("BContact");
const dataAlign = rootElement?.getAttribute("data-align") || "";
const dataAlignLeft = dataAlign === "left";

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  ${dataAlignLeft
    ? `left: 20px;
    & > div {
      justify-content: flex-start;
    }`
    : `right: 20px;
      & > div {
        justify-content: flex-end;
      }`}
`;

function App() {
  return (
    <AppProvider>
      <Container>
        <GlobalStyles />
        <ContactList />
        <Button />
      </Container>
    </AppProvider>
  );
}

export default App;
