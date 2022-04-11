import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
    return (
        <div className={s.item}>
        <img src="https://i.pinimg.com/736x/de/a0/f3/dea0f3b7f480b1151c08db4a402a43b9.jpg" alt=""/>
        {props.message}
            <div>
                <span>Like</span> {props.like}
            </div>
        </div>
    )
}

export default Post;

