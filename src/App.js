import { render } from "react-dom";
import Clock from "./Clock";

const App = () => {
  return (
    <div>
      <Clock brand="CASIO" model="F-91W" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
