import styled from "styled-components";
import { useEffect, useState } from "react";
import { AppProvider } from "./context/AppProvider";
import Button from "./components/Button";
import ContactList from "./components/ContactList";
import GlobalStyles from "./utils/GlobalStyles";

export interface PropsContainer {
  align: boolean;
}

const Container = styled.div<PropsContainer>`
  position: fixed;
  bottom: 20px;
  ${(props) =>
    props.align
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
  const [align, setAlign] = useState(false);

  useEffect(() => {
    const rootElement = document.getElementById("BContact");
    const dataAlign = rootElement?.getAttribute("data-align") || "";
    const dataAlignLeft = dataAlign === "left";
    if (dataAlignLeft) {
      setAlign(true);
    }
  }, []);

  return (
    <AppProvider>
      <GlobalStyles />
      <Container align={align}>
        <ContactList />
        <Button />
      </Container>
    </AppProvider>
  );
}

export default App;
