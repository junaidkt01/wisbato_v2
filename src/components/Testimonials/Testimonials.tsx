import { useState } from 'react'
import DefaultButton from '../DefaultButton';
import TestimonialsCard from './TestimonialsCard';
import "./Testimonials.css"
import { testimonialQuots } from '../../utils/TestimonialQuotes';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Testimonials = () => {

    const navigate = useNavigate();

    const handleNavigation = (page: string) => {
        navigate(`/${page}`);
        scrollTo(0, 0)
    };

    const [activeIndex, setActiveIndex] = useState(0);


    const updateIndex = (newIndex: any) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= testimonialQuots.length) {
            newIndex = testimonialQuots.length - 1;
        }

        setActiveIndex(newIndex);
    };

    return (
        <div className="testimonial-section">
            <div className="testimonials-div">
                <div className="testimonials">
                    <h1>words from our clients</h1>
                    <h1>words from our clients</h1>
                    <h1>words from our clients</h1>
                </div>
            </div>

            <div className='testimonials-qoutes-div'>
                <div className='testimonials-carousel' >
                    <div className="testimonials-carousel-inner" style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                        {testimonialQuots.map((item) => <TestimonialsCard key={item?.id} item={item} width="100%" />)}
                    </div>
                </div>
                <div className="testimonials-qoutes-btns">
                    <button onClick={() => updateIndex(activeIndex - 1)} >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                            <path d="M11.0325 4.33939L4.45961 10.9122C4.31606 11.0546 4.20206 11.224 4.12432 11.4108C4.04646 11.5975 4.00641 11.7977 4.00641 12C4.00641 12.2023 4.04646 12.4025 4.12432 12.5892C4.20206 12.776 4.31606 12.9454 4.45961 13.0877L11.0325 19.6606" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <p>0{activeIndex + 1}/0{testimonialQuots.length}</p>
                    <button onClick={() => updateIndex(activeIndex + 1)} ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M12.9676 19.6606L19.5404 13.0878C19.684 12.9454 19.798 12.776 19.8757 12.5892C19.9536 12.4025 19.9936 12.2023 19.9936 12C19.9936 11.7977 19.9536 11.5975 19.8757 11.4108C19.798 11.224 19.684 11.0546 19.5404 10.9123L12.9676 4.33942" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button>
                </div>
            </div>

            <div className="testimonials-img-div">
                <div>
                    <LazyLoadImage
                        effect={'blur'}
                        width={"100%"}
                        height={"auto"}
                        className='testimonials-text-img'
                        src="/images/team.webp"
                        alt="Join our team"
                    />
                    {/* <img className='testimonials-text-img' src="/images/team.png" alt="Join our team" width={874} height={415} /> */}
                </div>
                <div className="testimonials-explore-div">
                    <h1>join our team</h1>
                    <p>Discover Opportunities at Wisbato. Be part of our innovative journey</p>
                    <DefaultButton onClick={() => handleNavigation("careers")} theme='light-bg-btn' text="explore opportunities" />
                </div>
            </div>
        </div >
    )
}

export default Testimonials
