import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Users from "./components/users/Users";



export default function App(){
return(
    <Router>

<div>
    <div><Link to="/">home page</Link></div>
    <div><Link to="/users">users page</Link></div>

<Switch>
    <Route path={'/'} exact render={() => {return <div>home</div>;}}/>
    <Route path={'/users'} component={Users}/>

</Switch>

</div>
    </Router>
);
}
