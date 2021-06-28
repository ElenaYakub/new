import {useEffect, useState} from "react";

export default function Users() {

    let state = useState([]);
    let usersList = state[0];
    let setUsersList = state[1];

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(response => {
                console.log(response);
                serUsersList(response);
            });
    }, []);


return(
<div>
    {
usersList
    .map(value => <div>lkjhgf</div>)
    }
</div>

);
}