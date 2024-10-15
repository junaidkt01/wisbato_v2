import './Home.css';
import useScrollAnimation from '../../Hooks/useScrollAnimation';
import { useNavigate } from 'react-router-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
import { WorkData } from '../../Hooks/useFetchData';

// type WorksCardProps = { key: number; data: { id: number; text: string; src?: string; slug: string } };

const WorksCard = ({ data, key }: { data: WorkData; key: number }) => {
    const navigate = useNavigate()

    const animateRef = useScrollAnimation();

    const handleNavigation = (title: string) => {
        const data = title.replace(/[^\w]+/gi, "-").toLowerCase();

        navigate(`/works/${data}`)
        window.scrollTo(0, 0)
    };

    return (
        <div className="works-card visible-section" key={key} ref={animateRef} onClick={() => handleNavigation(data.slug)}>
            <div className='works-card-img'>
                {/* <LazyLoadImage
                    src={data?.image} className='work-img' alt="wisbato works card"
                    style={{ borderRadius: "4px", transition: "transform 0.3s ease" }}
                    effect={'blur'}
                    width={"100%"}
                    height={"auto"}
                /> */}
                <img
                    src={data?.image} className='work-img' alt="wisbato works card"
                    style={{ borderRadius: "4px", transition: "transform 0.3s ease" }}
                    width={"100%"}
                    height={"auto"}
                />
            </div>
            <div className='works-title' >
                <h1>{data.name} <span> - {data.title}</span> </h1>
            </div>
        </div>
    );
};

export default WorksCard;