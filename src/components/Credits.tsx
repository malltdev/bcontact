import styled from "styled-components";

const Container = styled.div`
  p {
    font-family: "Roboto", sans-serif;
    font-size: 9px;
    padding-top: 5px;
  }
  strong {
    font-weight: bold;
  }
`;

function Credits() {
  return (
    <Container>
      <p>
        Powered by <strong>B.Contact</strong>
      </p>
    </Container>
  );
}

export default Credits;
