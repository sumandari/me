import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

export default function Body({ children }) {
  return (
    <Container>
      <Stack direction="horizontal" className="Body">
        <Container>
          <p>container 1</p>
        </Container>
        <Container>
          <p>container 2</p>
          <div>{children}</div>
        </Container>
      </Stack>
    </Container>
  );
}
