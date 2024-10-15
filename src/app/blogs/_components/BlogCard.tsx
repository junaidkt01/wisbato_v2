import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { BlogData } from '../../../Hooks/useFetchData';

import ReadFullBtn from './ReadFullBtn'
import 'react-lazy-load-image-component/src/effects/blur.css';

const BlogCard = ({ data }: { data: BlogData }) => {
    const navigate = useNavigate()

    const handleNavigation = (title: string) => {
        const data = title.replace(/[^\w]+/gi, "-").toLowerCase();

        navigate(`/blogs/${data}`)
        window.scrollTo(0, 0)
    };

    const title = data.title.slice(0, 35)
    const description = data.description.slice(0, 100)
    return (
        <div className="blog-card" style={{ borderBottom: `10px solid ${data.border_color}` }} >
            <LazyLoadImage
                src={data.image}
                alt="Your image alt text"
                className='blog-card-img'
            />
            <div className="blog-card-content-div">
                <p className='recent-blog-container-title' style={{ fontSize: "14px", marginBottom: "4px" }} >{data.category}</p>
                <p className='blog-card-title' >{title}...</p>
                <p className='blog-card-description' >{description}...</p>
                <ReadFullBtn title='read full' onClick={() => handleNavigation(data?.slug)} />
            </div>
        </div>
    )
}

export default BlogCard
