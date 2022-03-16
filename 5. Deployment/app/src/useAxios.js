import { useEffect, useReducer } from "react";

const initialState = {
  data: "",
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "updateResponse":
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
}

export const useImage = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const set = (value) => {
    dispatch({
      type: "updateResponse",
      payload: value,
    });
  };

  useEffect(() => {
    if (!url) return;
    set({ loading: true });
    fetch(url)
      .then((data) => {
        set({ data: data.url, error: null });
      })
      .catch((err) => {
        set({ data: "", error: err });
      })
      .finally(() => {
        set({ loading: false });
      });
  }, [url]);

  return state;
};
