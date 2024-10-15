import { useNavigate } from "react-router-dom";
import DefaultButton from "../../components/DefaultButton";
import InnerBanner from "../../components/InnerBanner/InnerBanner";
import Testimonials from "../../components/Testimonials/Testimonials";
import { services } from "../../utils/servicesData";
import { Helmet } from "react-helmet-async";
import { useFetchMetaTags } from "../../Hooks/useFetchMetaTags";
import "./services.css"

const Services = () => {
    const navigate = useNavigate();

    const handleNavigation = (title: string) => {
        const data = title.replace(/[^\w]+/gi, "-").toLowerCase();
        navigate(`/services/${data}`);
        window.scrollTo(0, 0);
    };

    const { metaTags } = useFetchMetaTags("service");

    const isLoading = !services;

    return (
        <div className='services-section page-transition'>
            {/* //// header meta tag */}
            <Helmet>
                <title>{metaTags?.title}</title>
                <meta name="description" content={metaTags?.description} />
                <link rel="canonical" href="https://www.wisbato.com/services" />
            </Helmet>
            {/* //// header meta tag */}

            <InnerBanner nextSection={'.services-page-cards'} text={"our <br> <span>services</span>"} icons={["servicesIcon1", "servicesIcon2", "servicesIcon3"]} />

            {isLoading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="services-page-cards" >
                    {
                        services?.map((item: any) => (
                            <div key={item?.id} className={`services-page-card custom-width-${item?.width}`} style={{ backgroundColor: item?.style?.backgroundColor, position: "relative" }}>
                                <p>{item?.title}</p>
                                <p>{item?.description}</p>
                                <DefaultButton onClick={() => handleNavigation(item?.slug)} theme='light-bg-btn' text='explore' />
                            </div>
                        ))
                    }
                </div>
            )}

            <Testimonials />
        </div>
    )
}

export default Services;


// import { useNavigate } from "react-router-dom";
// import DefaultButton from "../../components/DefaultButton";
// import InnerBanner from "../../components/InnerBanner/InnerBanner";
// import Testimonials from "../../components/Testimonials/Testimonials";
// import { services } from "../../utils/servicesData";
// import { Helmet } from "react-helmet-async";
// import { useFetchMetaTags } from "../../Hooks/useFetchMetaTags";
// import "./services.css"

// const Services = () => {
//     const navigate = useNavigate();

//     const handleNavigation = (title: string) => {
//         const data = title.replace(/[^\w]+/gi, "-").toLowerCase();
//         navigate(`/services/${data}`);
//         window.scrollTo(0, 0);
//     };

//     const { metaTags } = useFetchMetaTags("service");
//     console.log("services: ", metaTags)

//     return (
//         <div className='services-section page-transition'>

//             {/* //// header meta tag */}
//             <Helmet>
//                 <title>{metaTags?.title}</title>
//                 <meta name="description" content={metaTags?.description} />
//                 <link rel="canonical" href="https://www.wisbato.com/services" />
//             </Helmet>
//             {/* //// header meta tag */}

//             <InnerBanner nextSection={'.services-page-cards'} text={"our <br> <span>services</span>"} icons={["servicesIcon1", "servicesIcon2", "servicesIcon3"]} />

//             <div className="services-page-cards">
//                 {
//                     services?.map((item: any) => <div key={item?.id} className={`services-page-card custom-width-${item?.width}`} style={{ backgroundColor: item?.style?.backgroundColor, position: "relative" }}>
//                         <p>{item?.title}</p>
//                         <p>{item?.description}</p>
//                         <DefaultButton onClick={() => handleNavigation(item?.slug)} theme='light-bg-btn' text='explore' />
//                     </div>
//                     )}
//             </div>
//             <Testimonials />
//         </div>
//     )
// }

// export default Services


// User-Agent: *
// Disallow: 


// User-Agent: *
// Disallow: /https://backend.wisbato.com/login


// Sitemap: https://www.wisbato.com/sitemap.xml
///////////////////////////////
// User-Agent: *
// Disallow: /https://backend.wisbato.com/login
// Disallow: /https://backend.wisbato.com

// Sitemap: https://www.wisbato.com/sitemap.xml