import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("BContact") as HTMLElement
);

const Container = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
`;
root.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
);
