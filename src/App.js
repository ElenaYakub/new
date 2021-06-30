import UserDetails from "./components/user-details/UserDetails";
import {getUser, getUsers} from "./servises/API";
import {useEffect, useState} from "react";
import Users from "./components/users/Users";


export default function App() {

   let[users, setUsers] = useState([]);

   let [userDetails, setUserDetails] = useState(null);

   useEffect( () => {
       getUsers().then(response => {
           setUsers(response.data);

       });

   }, []);

   function selectUser(id) {
       console.log(id);
       getUser(id).then(({data}) => {
           console.log(data);

       });
   }

    return (
        <div>
            <Users items={users} selectUser={selectUser}/>
<hr/>

            {
                userDetails && <UserDetails item={userDetails}/>
            }


        </div>
    );
}
