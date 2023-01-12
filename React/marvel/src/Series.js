import React, { useEffect, useState } from "react";
import { marvelApiConfig } from "./App";
import Card from "react-bootstrap/Card";

function Series({ setCharacters }) {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    fetch(
      `https://gateway.marvel.com/v1/public/series?ts=${marvelApiConfig.ts}&apikey=${marvelApiConfig.publicKey}&hash=${marvelApiConfig.hash}`
    )
      .then((res) => res.json())
      .then((res) => setSeries(res.data.results));
  }, []);
  return series.map((serie) => (
    <Card
      key={serie.id}
      style={{
        width: "18rem",
        marginTop: "25px",
        border: "1px solid black",
        marginLeft: "30px",
      }}
      onClick={() => {
        fetch(
          `${serie.characters.collectionURI}?ts=${marvelApiConfig.ts}&apikey=${marvelApiConfig.publicKey}&hash=${marvelApiConfig.hash}`
        )
          .then((res) => res.json())
          .then((res) => {
            setCharacters(res.data.results);
          });
      }}
    >
      <Card.Img
        variant="top"
        src={`${serie.thumbnail.path}/landscape_xlarge.${serie.thumbnail.extension}`}
      />
      <Card.Body>
        <Card.Title>{serie.title}</Card.Title>
        <Card.Text>{serie.description}</Card.Text>
      </Card.Body>
    </Card>
  ));
}

export default Series;
