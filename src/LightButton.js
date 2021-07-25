const LightButton = () => {
  return (
    <button
      onMouseDown={() => {
        document.getElementById("lcdFace").classList.add("light");
      }}
      onTouchStart={() => {
        document.getElementById("lcdFace").classList.add("light");
      }}
      onMouseUp={() => {
        document.getElementById("lcdFace").classList.remove("light");
      }}
      onTouchEnd={() => {
        document.getElementById("lcdFace").classList.remove("light");
      }}
    >
      Light
    </button>
  );
};

export default LightButton;
