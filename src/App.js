import { render } from "react-dom";
import Heading from "./Heading";

const App = () => {
  return (
    <div>
      <Heading title="hello world" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
