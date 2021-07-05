import{
    useParams
} from 'react-router-dom';
import {useEffect, useState} from "react";
import {getComment} from "../../services/APIcomment";

export default function CommentDetails(props) {

    let [comment, setComment] = useState({});
    let {id} = useParams();
    useEffect(() => {
        getComment(id).then(value => setComment({...value.data}));
    }, [id]);
    return (
        <div>
            {comment.id} - {comment.email}
        </div>
    );
}