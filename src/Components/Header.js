
//Header component of the SpotaRoom App
import React from 'react';
import '../Styles/Header.css';

const Header = (props) =>(
        <div className='fullLine'>
            <span id='Header_id' className='title'>{props.title}</span>
            <span 
                className='dimensionalOptions'
            >
                <a className='option' href='https://www.spotahome.com/'>The Company</a> - 
                <a className='option' href='https://www.spotahome.com/how-it-works'> How we Work</a> - 
                <a className='option' href='https://www.spotahome.com/contact-us'> Contact Us</a>
            </span>
        </div>
)

export default Header;