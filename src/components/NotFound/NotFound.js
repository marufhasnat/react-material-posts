import React from 'react';
import notFoundImage from '../../images/404.png';

const NotFound = () => {
    const notFoundStyle = {
        background: `url(${notFoundImage}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh'
    }
    return (
        <div style={notFoundStyle}>
            
        </div>
    );
};

export default NotFound;