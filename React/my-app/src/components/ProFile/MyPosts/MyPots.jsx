import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
const MyPosts = () => {
    return <div className={s.MyPosts}>
            <div className="s.newPost">
                My Post
                <textarea>

                </textarea>
                <button>Add Post</button>
            </div>
            <div className="s.posts">
                <Post message='Hi, how are you' like='0'/>
                <Post message='My first post' like='23'/>
            </div>
    </div>
}

export default MyPosts;

