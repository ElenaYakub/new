import {useEffect, useState} from 'react';
import {getUsers} from "./servises/API";
import Users from "./components/users/Users";


export default function App() {

   let[users, setUsers] = useState([]);

   useEffect( () => {
       getUsers().then(response => {
           setUsers(response.data);

       });

   }, []);

   function selectUser() {
       console.log('i am fn from app js');

   }

    return (
        <div>
            <Users items={users} selectUser={selectUser}/>

        </div>
    );
}
