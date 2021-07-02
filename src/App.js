import {useReducer} from "react";

function reducer(state, action) {
    return state;
}

export default function App(){
    let [state, dispatch] = useReducer(reducer, {a:0, b: 0});
console.log(state);

return(
<div>
    <button onClick={() => dispatch(100)}> click me A</button>
    <button onClick={() => dispatch(100)}> click me B</button>
    </div>


);
}