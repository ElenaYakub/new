export default function User(props){
    let {item} = props;
return(
<div>
    {item.id} - {item.name}
    {/*-*/}
    {/*<button onClick={() => {*/}
    {/*selectUser(item.id);*/}
    {/*}}>click me</button>*/}

</div>
);
}