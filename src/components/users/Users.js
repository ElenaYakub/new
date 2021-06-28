import {useEffect} from "react";

export default function Users() {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                console.log(value);
            });
    }, []);


return(
<div>
    {/*usersList.map(value => <div>user</div>)*/}
</div>

);
}