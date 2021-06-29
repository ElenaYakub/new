import User from "./user";


export default function Users(props){
    let {items} = props;
    console.log(items);

return(
<div>
    {
        items.map(u => <User item ={u}/>)
            // <User key={u.id} item={u} selectUser={selectUser}/>)
    }
</div>
);
}