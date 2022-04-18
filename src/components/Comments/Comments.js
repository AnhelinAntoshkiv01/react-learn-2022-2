import {useEffect, useState} from "react";

import { commentService } from '../../services';
import { Comment } from '../Comment/Comment';

export const Comments = () => {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        commentService.getAllComments().then(value => setComments(value));
    },[]);

    return(
        <div>
            {
                comments && comments.map((comment) => <Comment key = {comment.name} comment={comment}/>)
            }
        </div>
    )
}