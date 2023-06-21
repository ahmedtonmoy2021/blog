import React from "react";
import "./Post.css";
import { FaBookmark } from "react-icons/fa";

const Post = (props) => {
  const { picture, name, title, avater, Tag, Time } = props.details;

  const markAsRead = props.markAsRead
  const bookMark = props.bookMark


  return (
    <div className="post-container">
      <img className="pic" src={picture} alt="" />

      <div className="post-container2">

        <div className="add2">

          <div className="avater">
            <img className="avater-user" src={avater} alt="" />
            <h3 className="avater-name"> {name} </h3>
          </div>

          <div className="bookmark2">
            <p style={{ color: "rgba(17, 17, 17, 0.6)" }} 

            >{Time} min read</p>


            <button onClick={() => bookMark(props.details)} className="button">
            <FaBookmark/>
            </button>
          </div>
        </div>
      </div>
      <h5 className='headline1'>{title}</h5>

          <h5 className='tag'
          style={{color: 'rgba(17, 17, 17, 0.6)', 
          'marginTop': '5px' ,'marginBottom':'5px' }}>
          {Tag}</h5>
        <button style={{'marginBottom':'5px', 'border': '.5px solid silver', 'borderRadius':'5px','padding':'5px'
        ,'width':'100px' , 'cursor':'pointer','fontfamily':'Exo 2','fontSize':'15px','backgroundColor':'white'
      
      }} onClick={() => markAsRead(props.details)} >Mark as read</button>
        <span className="divider"></span>
    </div>
  );
};

export default Post;
