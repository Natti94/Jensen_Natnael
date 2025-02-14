//importerar första hook(en) från react coreBibla
import {useRef} from "react";
import './Event.css';

const Event = () => 
{
// pekare för textBox
//react använder ref p.g.a virtuella DOM(en)
const textRef = useRef();
const handleClick = () => {const text = textRef.current.value; alert("text")}
const handleMouseOver = () => { alert("mus dragen över div")}
}

return (
<>
<div className="square" onMouseOver={handleMouseOver}></div>
<input type="text" ref={textRef} />
<button onClick={handleClick}>Klicka här!</button>
</>)

export default Event;