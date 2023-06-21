import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {

    const {time} = props
    const {mark} = props
   

    let total = 0;
    for(const details of time){
       total = total + details.Time;
    }


    let totalMark = []
    for(const details of mark){
       totalMark = totalMark + details.title;
    }





    return (
        <div className=''>
            <div className='spent-time'>
                <h4 className='spent-text'>Spend time on reading : {total} </h4>
                </div>
                <div className='bookmark'>
                <h2>Bookmark Your Blogs {}</h2>
                <h2 className='bookmark-text'> {totalMark} </h2>
                </div>
        </div>
    );
};

export default Bookmark;