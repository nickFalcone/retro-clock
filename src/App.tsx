import { render } from "react-dom";
import { FunctionComponent } from "react";
import Clock from "./Clock";
import About from "./About";

const App: FunctionComponent = () => {
  return (
    <div>
      <Clock brand="CASIO" model="F-91W" />
      <About />
    </div>
  );
};

render(<App />, document.getElementById("root"));
