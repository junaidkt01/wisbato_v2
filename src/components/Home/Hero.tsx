import './Home.css';
import ScrollButton from '../ScrollButton';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const video = document.createElement('video');
        video.src = '/videos/videoHero.mp4';
        video.autoplay = true;
        video.loop = true;
        video.muted = true;

        video.addEventListener('loadeddata', () => {
            setVideoLoaded(true);
        });

        // document.body.appendChild(video);

        return () => {
            video.removeEventListener('loadeddata', () => {
                setVideoLoaded(true);
            });
            // document.body.removeChild(video);
        };
    }, []);

    return (
        <div className='hero-section'>
            <div className='hero-image-container'>
                {!videoLoaded && <img className="heroImg" src="/images/loadingimg.jpg" alt="Video Thumbnail" />}

                {/* {videoLoaded && <video autoPlay loop muted className="heroVideo">
                    <source src="/videos/videoHero.mp4" type="video/mp4" />
                </video>} */}

                {videoLoaded && <video autoPlay loop muted className="heroVideo">
                    <source src="/videos/videoHero1.webm" type="video/webm" />
                </video>}

                <div className="hero-text-div">
                    <div className='hero-text'>
                        <p>WE ARE</p>
                        <p>CREATING</p>

                        <div className='text-wrapper'>
                            <p style={{ '--i': 0 } as React.CSSProperties} data-text="Development">Development</p>
                            <p style={{ '--i': 1 } as React.CSSProperties} data-text="Innovation">Innovation</p>
                            <p style={{ '--i': 2 } as React.CSSProperties} data-text="Efficiency">Efficiency</p>
                        </div>
                    </div>
                    <div className='scroll-arrow-home' >
                        <ScrollButton nextSection='.work-section' color={"#fff"} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
