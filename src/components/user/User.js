import {getUserPosts} from '../../services/API';
import {useState} from 'react';
export default function User({item}){

    let[posts, setPosts] = useState([]);
    return(
        <div>
            {item.name} - <Link to={'/users/' + item.id}>details</Link>

        </div>
    );
}