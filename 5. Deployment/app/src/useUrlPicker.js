import { useState } from "react";

export const useUrlPicker = () => {
  const [url, setUrl] = useState("");

  return {
    selectedUrl: url,
    picker: (
      <>
        <button onClick={() => setUrl("https://picsum.photos/id/397/200/300")}>Click me 👍</button>
        <button onClick={() => setUrl("https://picsum.photos/id/398/200/300")}>No click me 😩</button>
        <button onClick={() => setUrl("https://picsum.photos/id/399/200/300")}>I ies die best 🔥</button>
      </>
    ),
  };
};
