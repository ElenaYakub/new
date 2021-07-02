import User from "./user";

export default function Users(){
    console.log();
return(
<div>Users page
</div>
);
}


export default function Users(props){
    let {items,selectUser} = props;


    return(
        <div>
            {
                items.map(u => <User key={u.id} item={u} selectUser={selectUser}/>)
            }
        </div>
    );
}