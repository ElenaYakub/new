import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export default function App(){
return(
    <Router>

<div>
    <div><Link to="/users">users page</Link></div>
    <div><Link to="/posts">posts page</Link></div>

    <Route path={'/users'} render={() => {
        return <div>this is users page</div>;
    }}/>

    <Route path={'/posts'} render={() => {
        return <div>this is posts page</div>;
    }}/>

</div>
    </Router>
);
}