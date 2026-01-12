interface Props {
  onExtraAction?: () => void;
}

function LightButton({ onExtraAction }: Props) {
  const addLight = () => {
    const lcdFace = document.getElementById("lcdFace");
    if (lcdFace) {
      lcdFace.classList.add("light");
    }
  };

  const removeLight = () => {
    const lcdFace = document.getElementById("lcdFace");
    if (lcdFace) {
      lcdFace.classList.remove("light");
    }
  };

  const handleClick = () => {
    if (onExtraAction) {
      onExtraAction();
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseDown={addLight}
      onTouchStart={addLight}
      onMouseUp={removeLight}
      onMouseLeave={removeLight}
      onTouchEnd={removeLight}
    >
      Light
    </button>
  );
}

export default LightButton;
