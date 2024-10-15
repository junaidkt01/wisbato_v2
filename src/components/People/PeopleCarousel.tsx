import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import People from "./People"
import { people } from "../../utils/people";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1080 },
        items: 5,
        slidesToSlide: 3,
    },
    tablet: {
        breakpoint: { max: 1080, min: 464 },
        items: 3,
        slidesToSlide: 3,
    },
    custom: {
        breakpoint: { max: 768, min: 464 },
        items: 2,
        slidesToSlide: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};


const PeopleCarousel = () => {
    return (
        <Carousel
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            customRightArrow={<CustomRightArrow onClick={() => { }} />} customLeftArrow={<CustomLeftArrow onClick={() => { }} />} className="cards-carousel" draggable responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile", "custom"]}>
            {
                people.map((person, index) => <People data={person} key={index} />)
            }
        </Carousel>
    )
}

export default PeopleCarousel


const CustomLeftArrow = ({ onClick }: { onClick: any }) => {
    return (
        <div className="custom-left-arrow" onClick={onClick}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5831 4L8.9964 10.5866C8.62508 10.9633 8.41693 11.471 8.41693 12C8.41693 12.529 8.62508 13.0367 8.9964 13.4134L15.5831 20" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};

const CustomRightArrow = ({ onClick }: { onClick: any }) => {
    return (
        <div className="custom-right-arrow" onClick={onClick}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.41692 20L15.0036 13.4134C15.3749 13.0367 15.5831 12.529 15.5831 12C15.5831 11.471 15.3749 10.9633 15.0036 10.5866L8.41692 4" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};