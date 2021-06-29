import {useEffect, useState} from 'react';
import {getUsers} from "./servises/API";
import Users from "./components/users/Users";


export default function App() {

   let[users, setUsers] = useState([]);
   useEffect(() => {
       getUsers().then(response => {
           setUsers(response.data);

       });

   }, []);

    return (
        <div>
            <Users items={users}/>

        </div>
    );
}
