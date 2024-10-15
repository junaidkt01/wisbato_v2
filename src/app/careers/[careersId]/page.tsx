import { Opening, useFetchCareers } from '../../../Hooks/useFetchData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ResumeUpload from '../_components/ResumeUpload';
import RoutesMap from '../../../components/RoutesMap/BreadCrumb';
import "../careers.css";
import Skeleton from 'react-loading-skeleton';

const CareersRequirement = () => {
    const { careers, isLoading, error } = useFetchCareers();
    const { title } = useParams<{ title: string }>();
    const careersIdValue = title || "";

    const [showPopup, setShowPopup] = useState(false);
    const [data, setData] = useState<Opening | null>(null);

    useEffect(() => {
        if (careers && careers.length > 0) {
            const opening = careers.find((item) => item.slug === careersIdValue);

            if (opening) {
                setData(opening);
            } else {
                setData(null);
            }
        }
    }, [careers, careersIdValue]);

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }

    // if (!data) {
    //     return <div>No career opening found</div>;
    // }

    const opening = data;

    const togglePopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: opening?.name,
                    text: opening?.name,
                    url: window.location.href
                });
                console.log('Successfully shared');
            } catch (error: any) {
                console.error('Error sharing:', error.message);
            }
        } else {
            console.log('Web Share API not supported');
        }
    };

    return (
        <div className='career-requirements-section'>
            <Helmet>
                <title>{opening?.name}</title>
                <meta name="description" content="wisbato meta description careers page" />
                <link rel="canonical" href={`https://www.wisbato.com/careers/${opening?.slug}`} />
            </Helmet>

            <div className="careers-detailed-text-div page-transition">
                <RoutesMap title={opening?.name} />
            </div>
            <div className="careers-job-requirements page-transition">
                {isLoading || error || !data ?
                    <div className="requirements-top-section">
                        <div className="title-left">
                            <p className="title"><Skeleton width={200} /></p>
                            <p className="sub-text">
                                <span><Skeleton width={200} /></span>
                                <span><Skeleton width={200} /></span>
                            </p>
                        </div>
                        <div className="title-right">
                            <Skeleton width={200} height={30} />
                            <Skeleton width={200} height={30} />
                            <div className='requirements-mail'>
                                <Skeleton width={200} />
                            </div>
                        </div>
                    </div> : <div className="requirements-top-section">
                        <div className="title-left">
                            <p className="title">{opening?.name}</p>
                            <p className="sub-text">
                                <span>Experience: {opening?.experience}</span>
                                <span>Location: {opening?.location}</span>
                            </p>
                        </div>
                        <div className="title-right">
                            <button onClick={togglePopup} className='apply-btn'>
                                <p>apply</p>
                            </button>
                            <button onClick={handleShare} className='share-btn'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.01472 15.8088C7.81776 15.8088 9.27942 14.3472 9.27942 12.5441C9.27942 10.7411 7.81776 9.27942 6.01472 9.27942C4.21167 9.27942 2.75001 10.7411 2.75001 12.5441C2.75001 14.3472 4.21167 15.8088 6.01472 15.8088Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17.9853 9.27941C19.7883 9.27941 21.25 7.81775 21.25 6.01471C21.25 4.21166 19.7883 2.75 17.9853 2.75C16.1822 2.75 14.7206 4.21166 14.7206 6.01471C14.7206 7.81775 16.1822 9.27941 17.9853 9.27941Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17.9853 21.25C19.7883 21.25 21.25 19.7883 21.25 17.9853C21.25 16.1822 19.7883 14.7206 17.9853 14.7206C16.1822 14.7206 14.7206 16.1822 14.7206 17.9853C14.7206 19.7883 16.1822 21.25 17.9853 21.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.0144 16.6359L8.9856 13.8935" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.1124 7.58176L8.88765 10.9771" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p>share</p>
                            </button>
                            <div className='requirements-mail'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.68159" y="3.5" width="18.5" height="17" rx="4" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M2.72875 7.58978L9.93399 11.7198C10.5383 12.0709 11.2238 12.2557 11.9216 12.2557C12.6195 12.2557 13.305 12.0709 13.9093 11.7198L21.1344 7.58978" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <a href='mailto:careers@wisbato.com'>careers@wisbato.com</a>
                            </div>
                        </div>
                    </div>}

                {isLoading || error || !data ?
                    <div className="requirements-content-section">
                        {Array.from({ length: 2 }).map((_) => (
                            <div className="requirements-content-card">
                                <p><Skeleton width={200} /></p>
                                {
                                    Array.from({ length: 4 }).map((_) => (
                                        <div className='requirements-content-card' ><Skeleton width={300} /></div>
                                    ))
                                }
                            </div>
                        ))}
                    </div>
                    : <div className="requirements-content-section">
                        {opening?.description && opening.description.map((item) => (
                            <div key={item.title} className="requirements-content-card">
                                <p>{item.title}</p>
                                <div className='requirements-content-card' dangerouslySetInnerHTML={{ __html: item.points }} />
                            </div>
                        ))}
                    </div>}

                {isLoading || error || !data ? <div className="job-apply-btn">
                    <Skeleton width={200} height={30} />
                    <Skeleton width={200} height={30} />
                </div> : <div className="job-apply-btn">
                    <button onClick={handleShare} className='share-btn'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.01472 15.8088C7.81776 15.8088 9.27942 14.3472 9.27942 12.5441C9.27942 10.7411 7.81776 9.27942 6.01472 9.27942C4.21167 9.27942 2.75001 10.7411 2.75001 12.5441C2.75001 14.3472 4.21167 15.8088 6.01472 15.8088Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.9853 9.27941C19.7883 9.27941 21.25 7.81775 21.25 6.01471C21.25 4.21166 19.7883 2.75 17.9853 2.75C16.1822 2.75 14.7206 4.21166 14.7206 6.01471C14.7206 7.81775 16.1822 9.27941 17.9853 9.27941Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.9853 21.25C19.7883 21.25 21.25 19.7883 21.25 17.9853C21.25 16.1822 19.7883 14.7206 17.9853 14.7206C16.1822 14.7206 14.7206 16.1822 14.7206 17.9853C14.7206 19.7883 16.1822 21.25 17.9853 21.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.0144 16.6359L8.9856 13.8935" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.1124 7.58176L8.88765 10.9771" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p>share</p>
                    </button>
                    <button className='apply-btn' onClick={togglePopup}>
                        <p>apply</p>
                    </button>
                </div>}
            </div>

            {showPopup && <ResumeUpload onClose={closePopup} />}
        </div>
    );
};

export default CareersRequirement;