import styled from "styled-components";
import { AppProvider } from "./context/AppProvider";
import Button from "./components/Button";
import ContactList from "./components/ContactList";
import GlobalStyles from "./utils/GlobalStyles";

interface PropsContainer {
  isAlign?: string;
}

const Container = styled.div<PropsContainer>`
  position: fixed;
  bottom: 20px;
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
