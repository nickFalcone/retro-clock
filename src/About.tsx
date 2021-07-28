import { FunctionComponent } from "react";

const About: FunctionComponent = () => {
  return (
    <footer>
      Based on the{" "}
      <a
        className="footer-link"
        href="https://www.casio.com/products/watches/classic/f91w-1"
      >
        CASIO F91W-1
      </a>
      .{" "}
      <a href="https://github.com/nickFalcone/retro-clock#readme">
        Project repository
      </a>
    </footer>
  );
};

export default About;
