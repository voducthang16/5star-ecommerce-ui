import React from 'react';
import images from '~/assets/images';
const Loading = () => {
    return (
        <div className="loading">
            <img src={images.LoadingGif} alt="" />
        </div>
    );
};

export default Loading;
