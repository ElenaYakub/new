import{
    useParams
} from 'react-router-dom';
import {useEffect, useState} from "react";
import {getUser} from "../../services/API";

export default function UserDetails(props) {

    let [user, setUser] = useState({});
    let {id} = useParams();
    useEffect(() => {
        getUser(id).then(value => setUser({...value.data}));
    }, [id]);
    return (
        <div>
            {user.id} - {user.username}
        </div>
    );
}