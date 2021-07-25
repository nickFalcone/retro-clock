const LightButton = () => {
  return (
    <button
      onMouseDown={() => {
        document.getElementById("lcdFace").classList.add("light");
      }}
      onMouseUp={() => {
        document.getElementById("lcdFace").classList.remove("light");
      }}
    >
      Light
    </button>
  );
};

export default LightButton;
