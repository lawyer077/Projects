import React from 'react';
import s from './ProFile.module.css';
import MyPosts from "./MyPosts/MyPots";
const ProFile = () => {
    return <div className={s.content}>
        <div className={`${s.content} ${s.active}`}>
            <img src="https://bipbap.ru/wp-content/uploads/2017/05/1259_more1.jpg" alt=""/>
        </div>
        <div>
            Ava dis
        </div>
        <MyPosts />
    </div>
}

export default ProFile;

