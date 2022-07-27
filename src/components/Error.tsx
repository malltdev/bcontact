import styled from "styled-components";

const Container = styled.div`
  p {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: red;
  }
`;

function Error() {
  return (
    <Container>
      <p>ERRO! parâmetro(s) inválido(s) </p>
    </Container>
  );
}

export default Error;
