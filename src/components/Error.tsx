import styled from "styled-components";

const Container = styled.div`
  p {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: red;
  }
`;

interface PropsError {
  message: string;
}
function Error({ message }: PropsError) {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
}

export default Error;
