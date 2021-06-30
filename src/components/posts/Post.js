import Posts from "./Posts";

export default function Post(props){
let {item, selectPost}=props;
    return(
<div>
    {item.id} - {item.title}
    -
    <button onClick={ () => {
        selectPost(item.id);
        }}>click me</button>

</div>
);
}