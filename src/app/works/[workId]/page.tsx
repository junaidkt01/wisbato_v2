import "../works.css"
import '../../../components/Home/Home.css';
import WorksCard from "../../../components/Home/WorksCard"
import CaseStudies from "../_components/CaseStudies";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useScrollAnimation from "../../../Hooks/useScrollAnimation";
import { Helmet } from "react-helmet-async";
import { Work, useFetchWorks } from "../../../Hooks/useFetchData";

import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const WorkDetailed = () => {
    const animateRef: any = useScrollAnimation();
    const { title } = useParams<{ title: string }>();
    const worksIdValue = title ? title : "Default value";
    const [workCaseStudy, setWorkCaseStudy] = useState<Work | undefined>();
    const { works, isLoading } = useFetchWorks();

    useEffect(() => {
        if (!isLoading) {
            const data = works.find((item) => item.slug === worksIdValue);
            setWorkCaseStudy(data);
        }
    }, [title, isLoading, works]);

    return (
        <div className="work-detailed-section page-transition" >
            {/* //// header meta tag */}
            <Helmet>
                <title>{workCaseStudy?.metaTitle}</title>
                <meta name="description" content={workCaseStudy?.metaDescription} />
                <link rel="canonical" href={`https://www.wisbato.com/works/${workCaseStudy?.slug}`} />
            </Helmet>
            {/* //// header meta tag */}

            {isLoading ? <div className="work-banner-section" >
                <div className="industry-section">
                    <p className="industry-title" ><Skeleton width={140} /></p>
                    <p className="industry" ><Skeleton width={200} /></p>
                </div>
                <div className="img-banner">
                    <p className="company-name" ><Skeleton width={200} height={40} /></p>
                    <Skeleton height={300} />
                </div>
            </div> :
                <div className="work-banner-section" style={{ backgroundColor: workCaseStudy?.themes }} >
                    <div className="industry-section">
                        <p className="industry-title" >industry</p>
                        <p className="industry" >{workCaseStudy?.industry}</p>
                    </div>
                    <div className="img-banner">
                        <p className="company-name" >{workCaseStudy?.companyName}</p>
                        <img src={workCaseStudy?.bannerImage} alt="..." />
                    </div>
                </div>}

            {isLoading ? <div className="work-description-section visible-sectio" ref={animateRef}>
                <Skeleton count={2} height={50} />
                <div className="work-description">
                    <div className="service-provided">
                        <h1><Skeleton width={200} /></h1>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }} >
                            {
                                workCaseStudy?.servicesProvides.map((item) => <li key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }} >

                                    <Skeleton width={30} height={30} circle />
                                    <Skeleton width={200} />
                                </li>)
                            }
                        </ul>
                    </div>
                    <div className="work-description-paragraphs">
                        <p><Skeleton count={5} /></p>
                    </div>
                </div>
                <Skeleton height={300} />

            </div> :
                <div className="work-description-section visible-sectio" ref={animateRef}>
                    <p className="work-description-title" >{workCaseStudy?.work_title}</p>
                    <div className="work-description">
                        <div className="service-provided">
                            <h1>service provided</h1>
                            <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }} >
                                {
                                    workCaseStudy?.servicesProvides.map((item) => <li key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }} >
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.05078 14.1009L11.1581 17.2083C11.2674 17.3188 11.3976 17.4066 11.5412 17.4666C11.6846 17.5266 11.8386 17.5575 11.9941 17.5575C12.1496 17.5575 12.3036 17.5266 12.4471 17.4666C12.5906 17.4066 12.7208 17.3188 12.8302 17.2083L19.0921 10.9462" stroke="#0DA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M14.0013 25.0833C20.1225 25.0833 25.0846 20.1211 25.0846 14C25.0846 7.87881 20.1225 2.91663 14.0013 2.91663C7.88015 2.91663 2.91797 7.87881 2.91797 14C2.91797 20.1211 7.88015 25.0833 14.0013 25.0833Z" stroke="#0DA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        {item}
                                    </li>)
                                }
                            </ul>
                        </div>
                        <div className="work-description-paragraphs">
                            <p>&#160;&#160;&#160;&#160;&#160; {workCaseStudy?.workDescription}</p>
                        </div>
                    </div>
                    <img src={workCaseStudy?.workDescriptionImage} alt="" />
                </div>}

            {isLoading ? <div className="case-studies-sections">
                {
                    Array.from({ length: 2 }).map((_, i) => <div key={i} className="case-studies-section">
                        <div className="case-studies-section-desc">
                            <Skeleton width={200} />
                            <h1><Skeleton /></h1>
                            <div className="work-description-paragraphs">
                                <Skeleton count={5} />
                            </div>
                        </div>
                        <Skeleton height={300} />
                    </div>)
                }
            </div> :
                <div className="case-studies-sections">
                    {
                        workCaseStudy?.caseStudies.map((item) => <CaseStudies item={item} />)
                    }
                </div>}

            <div className="works-portfolio">
                <div className="all-portfolio-title-section">
                    <p className='portfolio-container-title' >more works</p>
                </div>

                {isLoading ? <div className="works-card-list">
                    {Array.from({ length: 2 }).map((_, i) =>
                        <div className="works-card" key={i}>
                            <div className='works-card-img'>
                                <Skeleton height={300} />
                            </div>
                            <div className='works-title' >
                                <h1><Skeleton width={200} /></h1>
                            </div>
                        </div>
                    )}
                </div> :
                    <div className="works-card-list">
                        {works.filter?.((item: any) => item.slug !== worksIdValue).slice(0, 2).map((item: any, i: number) =>
                            <WorksCard key={i} data={item} />
                        )}
                    </div>
                }
            </div>
        </div>
    )
}

export default WorkDetailed
