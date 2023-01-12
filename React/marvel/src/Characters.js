import React from "react";

function Characters({ characters }) {
  return (
    <div>
      {<h3>Characters</h3>}
      <ul>
        {characters.map((char) => {
          return <li key={char.id}>{char.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Characters;
