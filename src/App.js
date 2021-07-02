import {useState} from "react";

export default function App(){
    let [a, setA] = useState(0);
    let [b, setB] = useState(0);

return(
<div>
    <div>
        <h2>A - {a}</h2>
    <button onClick={()=>{
        setA(++a);
    }}>inc A - {a}
    </button>
    </div>

    <div>
        <h2>B - {b}</h2>
    <button onClick={()=>{
        setB(++b);
    }}>inc B - {b}
    </button>
    </div>
</div>
);
}