export default function Simpson({item:{name, surname, age, photo, info}}) {
    // let {item} = props;
    // let {name, surname, age, photo, info} = item;
    // let {item:{name, surname, age, photo, info}} = props;
    return(
        <div>
            <h2>{name} {surname}, age - {age}</h2>
            <img src={photo}
                 alt=""/>
            <div>{info}</div>
        </div>
    );
}