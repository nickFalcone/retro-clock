import { render } from "react-dom";
import Clock from "./Clock";
import About from "./About";

const App = () => {
  return (
    <div>
      <Clock brand="CASIO" model="F-91W" />
      <About />
    </div>
  );
};

render(<App />, document.getElementById("root"));
