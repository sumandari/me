import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import icon from "../icon.png";

export default function Header() {
  return (
    // <Navbar bg="light" sticky="top" className="Header">
    //   <Container>
    //     <Navbar.Brand>Sumandari</Navbar.Brand>
    //   </Container>
    //   </Navbar>

    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={icon}
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Sumandari
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
