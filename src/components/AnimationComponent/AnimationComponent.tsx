import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/Lottie/buttonLoading.json';

const AnimationComponent: React.FC = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return <div style={{ height: "50px", width: "50px" }} ><Lottie options={defaultOptions} /></div>;
};

export default AnimationComponent;