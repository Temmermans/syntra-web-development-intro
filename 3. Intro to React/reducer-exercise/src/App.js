import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, total: state.total + action.value };
    case "multiply":
      return { ...state, total: state.total * action.value };
    case "substract":
      return { ...state, total: state.total - action.value };
    case "divide":
      return { ...state, total: state.total / action.value };
    case "power":
      return { ...state, total: state.total ** action.value };

    case "updateInput":
      return { ...state, input: action.value };

    default:
      return state;
  }
};

const initialState = {
  total: 0,
  input: 0,
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <input
        type="number"
        onChange={(e) =>
          dispatch({ type: "updateInput", value: parseInt(e.target.value) })
        }
        value={state.input}
      />
      <button onClick={() => dispatch({ type: "add", value: state.input })}>
        Add
      </button>
      <button
        onClick={() => dispatch({ type: "substract", value: state.input })}
      >
        Substract
      </button>
      <button
        onClick={() => dispatch({ type: "multiply", value: state.input })}
      >
        Multiply
      </button>
      <button onClick={() => dispatch({ type: "divide", value: state.input })}>
        Divide
      </button>
      <button onClick={() => dispatch({ type: "power", value: state.input })}>
        Power
      </button>
      <div>
        Total: <b>{state.total}</b>
      </div>
    </div>
  );
}
