import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";


export default function App(){
return(
    <Router>

<div>
    <div><Link to="/">home page</Link></div>
    <div><Link to="/users">users page</Link></div>
    <div><Link to="/posts">posts page</Link></div>
    <div><Link to="/comments">comments page</Link></div>
<Switch>
    <Route path={'/'} exact render={() => {return <div>home</div>;}}/>
    <Route path={'/users'} component={Users}/>
    <Route path={'/posts'} component={Posts}/>
    <Route path={'/comments'} component={Comments}/>
</Switch>

</div>
    </Router>
);
}
