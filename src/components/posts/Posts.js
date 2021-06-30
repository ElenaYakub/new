import Post from "./Post";


export default function Posts(props){
    let {items,selectPost} = props;


return(
<div>
    {
        items.map(u => <Post key={u.id} item={u} selectPost={selectPost}/>)
    }
</div>
);
}