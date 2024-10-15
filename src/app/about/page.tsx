import "../globals.css"
import "./about.css"

import InnerBanner from '../../components/InnerBanner/InnerBanner'
import Testimonials from '../../components/Testimonials/Testimonials'
import { Helmet } from "react-helmet-async"
import WorkProcessMobile from "../../components/WorkProcess/WorkProcessMobile"
import Test from "../../components/WorkProcess/Test"
import { useFetchMetaTags } from "../../Hooks/useFetchMetaTags"
import PeopleCarousel from "../../components/People/PeopleCarousel"
import SectionTitle from "../../components/SectionTitle"

const About = () => {
    const { metaTags } = useFetchMetaTags("About");

    return (
        <div className='about-section page-transition' >
            {/* //// header meta tag */}
            <Helmet>
                <title>{metaTags?.title}</title>
                <meta name="description" content={metaTags?.description} />
                <link rel="canonical" href="https://www.wisbato.com/about" />
                <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
            </Helmet>
            {/* //// header meta tag */}

            <InnerBanner nextSection={'.about-cards-section'} text={"About <br> <span>wisbato</span>"} icons={["aboutIcon", "aboutIcon", "aboutIcon"]} />

            <div className="about-cards-section">
                <ul id="about-cards">
                    <li className="about-card" id="about-card1">
                        <div className="about-card-body">
                            <div className="about-content-div">
                                <p>our story</p>
                                <p>Being one of the leading names in the industry, we at Wisbato believe in offering the best web solutions to our esteemed clients. The methodology that we take is accountable and is proven. We have established a stellar track record for providing exceptional results across all digital platforms such as social media or paid search campaigns. We recognise that the implementation of an effective online marketing strategy involves teamwork a team of individuals with the right skills, passion and expertise. So, when you work with us, you are getting to collaborate with a team of individuals who are just as dedicated and elated about growing your business as you are!</p>
                            </div>
                            <div className="about-content-cards-count">
                                {/* <p>01/03</p> */}
                            </div>
                        </div>
                    </li>
                    <li className="about-card" id="about-card2">
                        <div className="about-card-body">
                            <div className="about-content-div">
                                <p>our mission</p>
                                <p>Our mission is to provide the best results to our clients and assure their success as we aim to establish a varied client base of businesses and individuals operating in a multitude of sectors and economies. While we collaborate with our clients, we will be the finest as we strive to deliver, successful, innovative, creative web solutions that address particular objectives and requirements.</p>
                            </div>
                            <div className="about-content-cards-count">
                                {/* <p>02/03</p> */}
                            </div>
                        </div>
                    </li>
                    <li className="about-card" id="about-card3">
                        <div className="about-card-body">
                            <div className="about-content-div">
                                <p>our vision</p>
                                <p>Our vision is to be the trusted partner of our esteemed clientele. We plan to accomplish the same by providing the best web solutions in the most transparent, ROI-focused and honest approach. We aspire to operate all over the globe and leverage the benefits of IT to enhance the overall standard of the products and services of our clients.</p>
                            </div>
                            <div className="about-content-cards-count">
                                {/* <p>03/03</p> */}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            {/* <div>
                <picture data-test-id="sanity-image" className="flex w-full bg-puma-black-800 pointer-events-none absolute inset-0 h-full" style={{}}>
                    <source srcSet="https://cdn.sanity.io/images/qa41whrn/prod/d8099ecfcdca8a9c794286a5d301f1f45d208040-12000x4333.jpg?w=2160&amp;q=80&amp;auto=format" media="(min-width: 1024px)" />
                    <source srcSet="https://cdn.sanity.io/images/qa41whrn/prod/d8099ecfcdca8a9c794286a5d301f1f45d208040-12000x4333.jpg?w=1440&amp;q=80&amp;auto=format" media="(min-width: 540px) and (max-width: 1023px)" />
                    <source srcSet="https://cdn.sanity.io/images/qa41whrn/prod/63d6774a89b7a1c1949a924a7752ed6655369b93-1536x1536.jpg?w=720&amp;q=80&amp;auto=format" media="(max-width: 539px)" />
                    <img srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="object-cover w-full h-full" alt="" loading="eager" decoding="auto" />
                </picture>
            </div> */}

            <div className="work-process-section-x">
                {/* <WorkProcessDesktop /> */}
                <Test />
            </div>
            <div className="work-process-section-y">
                <WorkProcessMobile />
            </div>
            <div className='people-listing' >
                <div style={{ margin: "60px 24px" }} >
                    <SectionTitle title='People' />
                </div>
                <PeopleCarousel />
            </div>
            <Testimonials />
        </div>
    )
}

export default About