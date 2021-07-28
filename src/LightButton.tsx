import { FunctionComponent } from "react";

const LightButton: FunctionComponent = () => {
  const lcdFace = document.getElementById("lcdFace");

  const addLight = () => {
    if (lcdFace) {
      lcdFace.classList.add("light");
    }
  };

  const removeLight = () => {
    if (lcdFace) {
      lcdFace.classList.remove("light");
    }
  };

  return (
    <button
      onMouseDown={() => {
        addLight();
      }}
      onTouchStart={() => {
        addLight();
      }}
      onMouseUp={() => {
        removeLight();
      }}
      onTouchEnd={() => {
        removeLight();
      }}
    >
      Light
    </button>
  );
};

export default LightButton;
