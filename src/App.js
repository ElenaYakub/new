import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

import {useEffect, useState} from 'react';
import {getUsers} from "./servises/API";
import Users from "./components/users/Users";

import {useEffect, useState} from "react";
import {getPost, getPosts} from "./servises/API";
import Posts from "./components/posts/Posts";
import PostDetails from "./components/post-details/PostDetails";

export default function App(){
return(
    <Router>

<div>
    <div><Link to="/">home page</Link></div>
    <div><Link to="/users">users page</Link></div>
    <div><Link to="/posts">posts page</Link></div>
    <div><Link to="/comments">comments page</Link></div>

    <Route path={'/'} exact render={() => {return <div>home</div>;}}/>
    <Route path={'/users'}>
        <Users/>
    </Route>
    <Route path={'/posts'}>
        <Posts/>
    </Route>
    <Route path={'/comments'}>
        <Comments/>
    </Route>

</div>
    </Router>
);
}

export default function App() {

    let[users, setUsers] = useState([]);

    useEffect( () => {
        getUsers().then(response => {
            setUsers(response.data);

        });

    }, []);

    function selectUser(id) {
        console.log('i am fn from app js and you choose user with id', id);

    }

    return (
        <div>
            <Users items={users} selectUser={selectUser}/>

        </div>
    );
}
export default function App() {

    let[posts, setPosts] = useState([]);

    let [postDetails, setPostDetails] = useState(null);

    useEffect( () => {
        getPosts().then(response => {
            setPosts(response.data);

        });

    }, []);

    function selectPost(id) {
        console.log(id);
        getPost(id).then(({data}) => {
            setPostDetails(data);
        });
    }

    return (
        <div>
            <Posts items={posts} selectPost={selectPost}/>
            <hr/>

            {
                postDetails && <PostDetails item={postDetails}/>
            }


        </div>
    );
}