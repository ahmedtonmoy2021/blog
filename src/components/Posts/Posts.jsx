import React from 'react';
import { useState, useEffect } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {

    const[posts,setPosts]=useState([])

    const[time,setTime] = useState([])

    const[mark,setMark] = useState([])

    const bookMark = (details) => {
        const newMark = [...mark, details];
        setMark(newMark)
    }
   
    const markAsRead = (details) => {
        const newTime = [...time, details];
        setTime(newTime)
    }





    useEffect(() => {
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setPosts(data))
    },[])


    return (
        <div className='container'>

            <div className='first-container'>
            {   
                
                posts.map(details => <Post
                key = {details.id}
                details={details}
                time = {time}
                mark = {mark}
               
                markAsRead = {markAsRead}
                bookMark = {bookMark}

                ></Post> )
            }
            </div>
            
            <div className='second-container'>
                <Bookmark time= {time} mark = {mark} ></Bookmark>
            </div>
        </div>
    );
};

export default Posts;