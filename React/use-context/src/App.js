import { ThemeProvider } from "./state/ThemeContext";
import About from "./components/About";
function App() {
  return (
    <ThemeProvider>
      {/* <Home /> */}
      <About />
    </ThemeProvider>
  );
}

export default App;
