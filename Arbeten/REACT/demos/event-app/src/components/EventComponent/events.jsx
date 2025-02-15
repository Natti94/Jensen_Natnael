import { useRef } from "react";


const EventComponent = () => {
  // Pekare för textBox
  // React använder ref p.g.a. den virtuella DOM:en
  const textRef = useRef();

  const handleClick = () => {
    const text = textRef.current.value;
    alert(text); // Använd variabeln text istället för strängen "text"
  };

  const handleMouseOver = () => {
    alert("Musen drogs över div");
  };

  return (
    <>
      <div className="square" onMouseOver={handleMouseOver}></div>
      <input type="text" ref={textRef} />
      <button onClick={handleClick}>Klicka här!</button>
    </>
  );
};

export default EventComponent;
