import React, { useState } from "react";
import Series from "./Series";
import Characters from "./Characters";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// marvel config
export const marvelApiConfig = {
  publicKey: "fc8a583c663a38d67fb5bcef4a50674a",
  hash: "35915bac577ae9c71f2ea0631f1d50de",
  ts: 1,
};

function App() {
  const [characters, setCharacters] = useState([]);
  return (
    <Container>
      <Row>
        <Col sm={8} lg="auto">
          <Series setCharacters={setCharacters} />
        </Col>
        <Col sm={4} lg="auto">
          {characters.length > 0 ? (
            <Characters characters={characters} />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
