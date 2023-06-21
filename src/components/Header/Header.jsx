import React from 'react';
import './Header.css'
import pic from '../images/avater.jpg';

const Header = () => {
    return (
        <div className='main-container'  >

            <div className='left-container'>
            <h1 className='Logo'>BlOGGER'S CAFE</h1>
            </div>
          
            <div className='right-container'>
            <img className='avater' src={pic} alt='' />
            </div>
            </div>

          
        
    );
};

export default Header;