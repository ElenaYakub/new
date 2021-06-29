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

   // function selectUser(id) {
   //     console.log('i am fn from app js and you choose user with id', id);
   //
   // }

    return (
        <div>
            <Users items={users}/>
            {/*<Users items={users} selectUser={selectUser}/>*/}

        </div>
    );
}
