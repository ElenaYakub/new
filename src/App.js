

export default function App(){
return(
    <Router>

<div>
    <div><a href="/users">users page</a></div>
    <div><a href="/posts">posts page</a></div>

    <Route path={'/users'} render={() => {
        return <div>this is users page</div>;
    }}/>

    <Route path={'/posts'} render={() => {
        return <div>this is users page</div>;
    }}/>

</div>
    </Router>
);
}