import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundc.css'
const NotFound = () => {
    return (
        <div className='notfound'>
            <img src={'https://i.ibb.co/fFvHVQL/404-1-1920x.webp'} alt="" />
            <h2>Page Not Found</h2>
            <h4>We’re sorry — something has gone wrong on our end.</h4>
            <p>If difficulties persist, please contact the System Administrator of this site and report the error below.</p>
            <p className='mt-5 notfuoundBiT'><Link to="/"><span className='notBtn'>Home</span></Link></p>
        </div>
    );
};

export default NotFound;