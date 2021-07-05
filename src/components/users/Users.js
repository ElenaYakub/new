
import {useEffect, useState} from "react";
import {getUsers} from "../../services/API";
import User from "../user/User";
import {Route} from "react-router-dom";
import UserDetails from "../user-detail/UserDetails";


export default function Users(){

    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]));
    }, []);

    return (
        <div>
            {users.map(value => <User key={value.id} item={value}/>)}

            <Route path={'/users/:id'} component={UserDetails}/>

        </div>
    );
}