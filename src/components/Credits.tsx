import styled from "styled-components";

const Container = styled.div`
  width: 174px;
  text-align: center;
  p {
    font-family: "Roboto", sans-serif;
    font-size: 9px;
    padding-top: 5px;
  }
  strong {
    font-weight: bold;
    a {
      color: #000 !important;
      display: inline-block;
    }
  }
`;

function Credits() {
  return (
    <Container>
      <p>
        Powered by{" "}
        <strong>
          <a href="https://bcontact.com.br">B.Contact</a>
        </strong>
      </p>
    </Container>
  );
}

export default Credits;
