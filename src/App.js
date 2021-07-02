import {useReducer} from "react";

function reducer(state, action) {
    console.log('reducer works' , action)

    return state;
}

export default function App(){
    let [state, dispatch] = useReducer(reducer, {a:0, b: 0});
console.log(state);

return(
<div>
    <button onClick={() => dispatch({type:'INC_A', playload:1})}> click me A</button>
    <button onClick={() => dispatch({type:'B', playload:2})}> click me B</button>
    </div>


);
}