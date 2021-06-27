export default function Simpson(props) {
    let {item} = props;
    let {name, surname, age, photo, info} = item;
    return(
        <div>
            <h2>{name} {surname}, age - {age}</h2>
            <img src={photo}
                 alt=""/>
            <div>{info}</div>
        </div>
    );
}