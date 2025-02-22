import {useRef, useStrate} from 'react'
import nameList from '../Names/Nameslist';

const Names = () => {

    const [nameList, setName] = useState([]);

    const nameText = useRef();

    const addNameToList = () => {

    }
    return (
<>
<input type='text' ref={nameText} />
<button onClick={addNameToList}>lägg till namn</button>
<Namelist nameList = {nameList} />
</>

    )
  }

export default Names;