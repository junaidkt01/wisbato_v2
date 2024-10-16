import "../../../app/globals.css"
import "../services.css"
import DefaultPhoneInput from '../../../components/InputFields/DefaultPhoneInput';
import ScrollButton from '../../../components/ScrollButton';
import DefaultTextArea from '../../../components/InputFields/DefaultTextArea';
import SectionTitle from '../../../components/SectionTitle';
import DefaultInput from '../../../components/InputFields/DefaultInput';
import EyeExpand from '../../../components/EyeExpand/EyeExpand';
import RoutesMap from '../../../components/RoutesMap/BreadCrumb';
import { useContext, useEffect, useState } from 'react'
import { Service, services } from '../../../utils/servicesData';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

import { StatusContext } from "../../../Hooks/StatusContext";
import { useFormState } from "../../../Hooks/useFormState";
import ServicesDropDown from "../../../components/InputFields/ServicesDropDown";
import AnimationComponent from "../../../components/AnimationComponent/AnimationComponent";
import { useFetchTeam, useFetchWorks } from "../../../Hooks/useFetchData";
import WorksCard from "../../../components/Home/WorksCard";
// import PeopleCarousel from "../../../components/People/PeopleCarousel";
import OutComes from "../_components/OutComes";
import TeamCateCard from "../../team/_components/TeamCateCard";


const ServiceDetailed = () => {
    const [expandedId, setExpandedId] = useState<null | number>(null);

    const toggleExpand = (id: number) => {
        if (expandedId === id) {
            setExpandedId(null);
        } else {
            setExpandedId(id);
        }
    };

    const [activeIndex, setActiveIndex] = useState(0);


    const { title } = useParams<{ title: string }>();
    const careersIdValue = title ? title : "Default value";

    const [data, setData] = useState<Service | undefined>(undefined);

    function transformSlug(slug: string) {
        if (!slug) return '';

        return slug
            .split('-')
            .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
            .toUpperCase();
    }
    useEffect(() => {
        const service = services.find((item: any) => item?.slug === careersIdValue);

        if (service) {
            setData(service as any); //
        } else {
            setData(undefined);
        }
    }, []);

    const { statusMessage, handleServiceSelection, firstName, setFirstName, lastName, setLastName, email, setEmail, phone, setPhone, message, setMessage, handleSubmit, loading } = useFormState();

    const { setNotify } = useContext(StatusContext);

    useEffect(() => {
        if (statusMessage.message) {
            setNotify(statusMessage);
        } else if (statusMessage.message === '') {
            setTimeout(() => {
                setNotify(statusMessage);
            }, 3000);
        }
    }, [statusMessage]);

    const { works, isLoading } = useFetchWorks();

    const { team, isLoading: teamLoading, error } = useFetchTeam()
    console.log(team)
    if (teamLoading || error) {
        return <h1>loading</h1>;
    }
    return (
        <>
            {/* {!isLoadingData && data ? */}
            {data ?
                <>
                    <div className='services-detailed-section page-transition' >
                        {/* //// header meta tag */}
                        <Helmet>
                            <title>{data.metaTitle}</title>
                            <meta name="description" content={data.metaDescription} />
                            <link rel="canonical" href={`https://www.wisbato.com/services/${data.slug}`} />
                        </Helmet>
                        {/* //// header meta tag */}

                        <div className="services-detailed-banner">
                            <div className="services-detailed-text-div">
                                <RoutesMap title={title} />
                                <p className='services-detailed-text' dangerouslySetInnerHTML={{ __html: data?.context?.mainTitle }}></p>
                            </div>

                            <div style={{ marginTop: "50px" }}>
                                <ScrollButton hide={true} color='#000' nextSection='.services-detailed-content-div' />
                            </div>
                        </div>

                        <div className='work-section' >
                            {isLoading ? <div className="works-card-list">
                                {Array.from({ length: 2 }).map((_, i) =>
                                    <div className="works-card" key={i}>
                                        <div className='works-card-img'>
                                            <Skeleton height={300} />
                                        </div>
                                        <div className='works-title' >
                                            <h2><Skeleton width={200} /></h2>
                                        </div>
                                    </div>
                                )}
                            </div> :
                                <>
                                    {
                                        works.filter(work =>
                                            work.servicesProvides.some(service => service.toUpperCase().includes(transformSlug(data.title)))
                                        )
                                            .slice(0, 1)
                                            .map((_, i) => (
                                                <SectionTitle key={i} title='works' />
                                            ))
                                    }
                                    <div className="works-card-list">
                                        {
                                            works.filter(work =>
                                                work.servicesProvides.some(service => service.toUpperCase().includes(transformSlug(data.title)))
                                            )
                                                .slice(0, 4)
                                                .map((work, index) => (
                                                    <WorksCard key={index} data={work} />
                                                ))
                                        }
                                    </div>
                                </>
                            }
                        </div>
                        <div className="services-detailed-content-div">
                            <div className="services-detailed-content-texts">
                                <p>{data.context.subTitle}</p>
                                <p dangerouslySetInnerHTML={{ __html: data.context.content }} />
                            </div>
                            <svg width="286" height="285" viewBox="0 0 286 285" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5">
                                    <path d="M112.213 113.32H112.006L111.973 113.353C108.104 113.244 104.982 110.055 104.982 106.16C104.982 95.4011 109.589 85.0627 117.641 77.8544L117.642 77.8537C125.657 70.6469 136.488 67.1999 147.285 68.3956L147.285 68.3956C164.758 70.3293 178.825 84.3958 180.758 101.869C182.2 114.883 177.031 127.54 166.904 135.733C156.277 144.307 150.189 157.061 150.189 170.749C150.189 174.713 146.957 177.944 142.994 177.944C139.03 177.944 135.798 174.713 135.798 170.749C135.798 152.695 143.818 135.845 157.843 124.504L157.843 124.504C164.139 119.409 167.378 111.547 166.469 103.433C165.267 92.5841 156.534 83.8867 145.721 82.6851C138.92 81.9213 132.329 83.9955 127.269 88.5459C122.284 93.022 119.408 99.4269 119.408 106.125C119.408 110.088 116.176 113.32 112.213 113.32Z" stroke="white" />
                                    <path d="M139.787 188.884H146.271C150.087 188.884 153.181 191.978 153.181 195.794V202.278C153.181 206.094 150.087 209.188 146.271 209.188H139.787C135.971 209.188 132.877 206.094 132.877 202.278V195.794C132.877 191.978 135.971 188.884 139.787 188.884Z" stroke="white" />
                                    <path d="M1.05517 144.92L1.06509 145.409C2.59161 220.777 62.7649 281.838 138.097 284.429L138.102 284.429C139.692 284.5 141.319 284.5 142.924 284.5C165.148 284.5 187.158 279.281 206.895 269.307C206.895 269.306 206.896 269.306 206.896 269.306L207.121 269.752C209.971 268.292 213.285 267.971 216.42 268.826L1.05517 144.92ZM1.05517 144.92H1.02048C0.372212 106.051 15.1313 69.5368 42.6005 42.0675C70.185 14.483 106.961 -0.284396 145.942 0.532137L145.942 0.532144C221.31 2.05866 282.37 62.2674 284.926 137.599L285.426 137.582L284.926 137.599C285.743 161.455 280.524 185.24 269.84 206.397C268.323 209.357 267.953 212.798 268.841 216.052C268.841 216.053 268.841 216.053 268.841 216.054L279.457 255.667C279.457 255.667 279.457 255.667 279.457 255.667C281.227 262.299 279.389 269.169 274.527 274.03C269.666 278.891 262.797 280.73 256.165 278.959C256.164 278.959 256.164 278.959 256.164 278.959L216.551 268.344C216.551 268.344 216.55 268.343 216.55 268.343L1.05517 144.92ZM145.668 14.9224H145.678C212.278 16.2817 268.282 71.4992 270.536 138.064C271.251 159.487 266.566 180.874 256.98 199.867L256.98 199.867C253.866 206.026 253.165 213.06 254.951 219.748L265.566 259.359L145.668 14.9224ZM145.668 14.9224H145.662H145.657H145.652H145.647H145.641H145.636H145.631H145.626H145.621H145.615H145.61H145.605H145.6H145.594H145.589H145.584H145.579H145.574H145.568H145.563H145.558H145.553H145.548H145.542H145.537H145.532H145.527H145.521H145.516H145.511H145.506H145.501H145.495H145.49H145.485H145.48H145.474H145.469H145.464H145.459H145.454H145.448H145.443H145.438H145.433H145.427H145.422H145.417H145.412H145.407H145.401H145.396H145.391H145.386H145.381H145.375H145.37H145.365H145.36H145.354H145.349H145.344H145.339H145.334H145.328H145.323H145.318H145.313H145.307H145.302H145.297H145.292H145.287H145.281H145.276H145.271H145.266H145.26H145.255H145.25H145.245H145.24H145.234H145.229H145.224H145.219H145.214H145.208H145.203H145.198H145.193H145.187H145.182H145.177H145.172H145.167H145.161H145.156H145.151H145.146H145.14H145.135H145.13H145.125H145.12H145.114H145.109H145.104H145.099H145.093H145.088H145.083H145.078H145.073H145.067H145.062H145.057H145.052H145.047H145.041H145.036H145.031H145.026H145.02H145.015H145.01H145.005H145H144.994H144.989H144.984H144.979H144.973H144.968H144.963H144.958H144.953H144.947H144.942H144.937H144.932H144.926H144.921H144.916H144.911H144.906H144.9H144.895H144.89H144.885H144.88H144.874H144.869H144.864H144.859H144.853H144.848H144.843H144.838H144.833H144.827H144.822H144.817H144.812H144.806H144.801H144.796H144.791H144.786H144.78H144.775H144.77H144.765H144.76H144.754H144.749H144.744H144.739H144.733H144.728H144.723H144.718H144.713H144.707H144.702H144.697H144.692H144.686H144.681H144.676H144.671H144.666H144.66H144.655H144.65H144.645H144.639H144.634H144.629H144.624H144.619H144.613H144.608H144.603H144.598H144.593H144.587H144.582H144.577H144.572H144.566H144.561H144.556H144.551H144.546H144.54H144.535H144.53H144.525H144.519H144.514H144.509H144.504H144.499H144.493H144.488H144.483H144.478H144.472H144.467H144.462H144.457H144.452H144.446H144.441H144.436H144.431H144.426H144.42H144.415H144.41H144.405H144.399H144.394H144.389H144.384H144.379H144.373H144.368H144.363H144.358H144.352H144.347H144.342H144.337H144.332H144.326H144.321H144.316H144.311H144.305H144.3H144.295H144.29H144.285H144.279H144.274H144.269H144.264H144.259H144.253H144.248H144.243H144.238H144.232H144.227H144.222H144.217H144.212H144.206H144.201H144.196H144.191H144.185H144.18H144.175H144.17H144.165H144.159H144.154H144.149H144.144H144.138H144.133H144.128H144.123H144.118H144.112H144.107H144.102H144.097H144.092H144.086H144.081H144.076H144.071H144.065H144.06H144.055H144.05H144.045H144.039H144.034H144.029H144.024H144.018H144.013H144.008H144.003H143.998H143.992H143.987H143.982H143.977H143.971H143.966H143.961H143.956H143.951H143.945H143.94H143.935H143.93H143.925H143.919H143.914H143.909H143.904H143.898H143.893H143.888H143.883H143.878H143.872H143.867H143.862H143.857H143.851H143.846H143.841H143.836H143.831H143.825H143.82H143.815H143.81H143.805H143.799H143.794H143.789H143.784H143.778H143.773H143.768H143.763H143.758H143.752H143.747H143.742H143.737H143.731H143.726H143.721H143.716H143.711H143.705H143.7H143.695H143.69H143.684H143.679H143.674H143.669H143.664H143.658H143.653H143.648H143.643H143.638H143.632H143.627H143.622H143.617H143.611H143.606H143.601H143.596H143.591H143.585H143.58H143.575H143.57H143.564H143.559H143.554H143.549H143.544H143.538H143.533H143.528H143.523H143.517H143.512H143.507H143.502H143.497H143.496V14.8868M145.668 14.9224L143.496 14.8868M143.496 14.8868H142.996H143.496ZM264.369 263.836C264.916 263.288 266.206 261.686 265.567 259.363L259.896 265.034C262.219 265.673 263.821 264.383 264.369 263.836ZM220.281 254.418L259.892 265.033L138.614 269.503L138.596 270.003C138.596 270.003 138.597 270.003 138.597 270.003C159.914 270.754 181.372 266.033 200.399 256.447C206.561 253.367 213.595 252.633 220.281 254.418Z" stroke="white" />
                                    <path d="M31.3454 142.944C23.3448 114.578 36.6581 80.7953 61.9688 65.6629C48.3625 90.6137 38.4798 115.43 31.3454 142.944Z" stroke="white" />
                                </g>
                            </svg>
                        </div>

                        <div className="service-working-process-section">
                            <SectionTitle title='working process' />

                            <div className='testimonials-qoutes-di'>
                                <div className='testimonials-carouse' style={{ position: "relative" }} >
                                    <div className="testimonials-carousel-inne" style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                                        {data.workingProcess.map((item, i) => {
                                            return (
                                                <div className="working-process-card" key={i}>
                                                    <div className='working-process-titles' style={{ display: "flex", width: "100%", justifyContent: "space-between" }} >
                                                        <p className='working-process-title' >{item.title}</p>
                                                        <p className='working-process-count' >0{i + 1}/0{data.workingProcess.length}</p>
                                                    </div>
                                                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }} >
                                                        <div className="card-bottom-div">
                                                            <div className='card-sub-data-list'>
                                                                {
                                                                    item.list.map((itm) => {
                                                                        return <EyeExpand key={itm?.id} data={itm} isOpen={expandedId} toggleExpand={toggleExpand} />
                                                                    })
                                                                }
                                                            </div>
                                                            <img
                                                                // style={{ width: "100%", height: "312px", flex: "1" }}
                                                                src={item.image}
                                                                alt={item.alt}
                                                                className='testimonials-text-img'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="scroll-btns">
                                        {Array.from({ length: data.workingProcess.length }).map((_, i) => (
                                            <div onClick={() => setActiveIndex(i)} key={i} style={{ width: activeIndex === i ? "100px" : "10px", borderRadius: activeIndex === i ? "4px" : "10px" }} className="scroll-btn"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="outcomes-section" >
                            <OutComes outComes={data?.outcomes} />
                        </div>

                        {/* <div className='people-listing' >
                            <div style={{ margin: "60px 24px" }} >
                                <SectionTitle title={data.peopleTitle} />
                            </div>
                            <PeopleCarousel />
                        </div> */}

                        {/* <TeamCateCard service={data.title} /> */}
                        <TeamCateCard service={data.title} />

                        <div className="services-faq-section">
                            <SectionTitle title='faq' />
                            {
                                data.FAQData.map((item) => {
                                    return <EyeExpand key={item?.id} data={item} isOpen={expandedId} toggleExpand={toggleExpand} />
                                })
                            }
                        </div>

                        <div className="service-contact-section">
                            <SectionTitle title='get in touch' />
                            <div className="contact-form-section">
                                <p>Let&apos;s Boost Your Digital Presence!</p>

                                <div className="contact-form-div">
                                    <svg className='contact-form-icon' width="291" height="300" viewBox="0 0 291 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M222.374 267.909C228.825 266.131 234.888 263.442 240.435 260.011C246.291 256.416 251.598 251.952 256.277 246.668C257.299 245.535 258.51 244.032 259.714 242.421C260.213 241.754 260.701 241.09 261.187 240.413C263.098 237.737 264.833 235.019 265.669 233.304C266.146 232.375 267.061 230.561 267.679 229.258C268.648 227.338 269.629 224.8 270.517 222.001C272.391 216.409 273.564 210.541 273.949 204.521C274.236 200.076 274.053 195.568 273.449 191.073C272.366 182.726 269.776 174.532 265.776 167.044C265.038 165.652 264.257 164.291 263.433 162.962C261.38 159.71 260.591 158.58 257.391 154.635C255.822 152.699 251.887 148.629 250.772 147.845C250.428 147.604 249.733 147.012 249.256 146.492C248.357 145.562 246.027 143.832 243.4 142.069C241.301 140.624 239.061 139.204 237.456 138.313L234.103 136.399L233.775 136.456C227.197 133.355 220.803 131.452 213.495 130.398C206.482 129.376 201.264 129.43 192.035 130.583C187.463 131.164 182.701 131.621 181.516 131.61C181.42 131.615 181.334 131.606 181.238 131.61L178.707 131.425C175.23 131.223 169.395 130.165 166.951 129.311C166.644 129.208 166.234 129.074 165.799 128.933C165.12 128.713 164.375 128.457 163.775 128.272C162.444 127.768 161.139 127.211 159.859 126.589C158.377 125.846 156.775 124.966 155.236 124.04C149.915 120.742 145.134 116.385 141 111.034C138.357 107.583 137.223 106.899 135.079 107.274L135.067 107.276C132.923 107.65 132.09 108.689 130.771 112.82C128.695 119.255 125.67 124.963 121.784 129.88C120.648 131.262 119.429 132.646 118.296 133.834C117.303 134.852 116.264 135.819 115.182 136.744C114.68 137.121 114.066 137.615 113.502 138.051C113.141 138.332 112.814 138.606 112.546 138.798C110.537 140.429 105.405 143.402 102.202 144.77L99.8832 145.802C99.7936 145.842 99.7136 145.868 99.6219 145.896C98.5104 146.308 93.8635 147.493 89.3774 148.494C80.306 150.549 75.3756 152.255 69.1241 155.592C62.6037 159.049 57.2351 163.017 52.0966 168.164L51.7685 168.221L49.2626 171.158C48.0433 172.542 46.4285 174.635 44.9427 176.706C43.0673 179.243 41.4492 181.663 40.9323 182.852C40.6576 183.491 40.2062 184.295 39.9644 184.639C39.181 185.754 36.8585 190.916 36.0377 193.269C34.3636 198.065 34.0043 199.396 33.1747 203.151C32.8501 204.681 32.5669 206.24 32.3442 207.8C31.1183 216.2 31.4561 224.775 33.2678 233.007C34.2209 237.429 35.578 241.744 37.3538 245.829C39.7567 251.362 42.8605 256.483 46.506 261.111C48.2918 263.456 50.0734 265.499 51.6355 266.978C52.6562 267.983 54.1336 269.391 54.8979 270.103C56.2652 271.434 58.8166 273.391 61.5238 275.273C62.1982 275.747 62.8823 276.207 63.5781 276.665C65.2683 277.771 66.905 278.777 68.2501 279.496C74.4438 282.882 80.9487 285.284 87.6767 286.681C94.0602 288.042 100.687 288.515 107.359 288.002C107.561 287.979 107.904 287.943 108.363 287.875C111.896 287.5 138.374 282.998 164.947 278.346C191.512 273.72 217.926 268.988 221.377 268.144C221.841 268.039 222.179 267.968 222.374 267.909ZM105.418 274.323C103.289 274.441 101.177 274.447 99.1075 274.35C93.0288 273.974 86.6137 272.571 80.8767 270.348C76.9515 268.752 73.1848 266.681 69.6141 264.14C60.269 257.573 53.6103 249.173 49.35 238.603C48.4022 236.148 47.6179 233.593 46.9971 230.936C46.0597 226.536 45.3419 221.179 45.3657 217.927C45.4039 213.235 46.1215 208.147 47.3533 203.308C47.5206 202.675 47.6995 202.04 47.8998 201.389C48.9821 197.699 50.3886 194.205 52.1096 190.922C53.9457 187.607 57.2029 182.957 59.6136 180.097C60.8757 178.682 62.2204 177.324 63.638 176.038C68.0819 172.099 73.8857 168.272 78.9976 166.015C82.2835 164.572 84.3072 163.784 93.2713 162.014L141.024 153.568L143.087 153.208L145.161 152.846L192.962 144.608C201.996 143.236 204.167 143.292 207.747 143.536C213.308 143.918 220.079 145.561 225.594 147.762C227.364 148.491 229.089 149.313 230.756 150.217C233.993 152.091 238.622 155.364 241.484 157.859C244.216 160.364 246.723 163.174 248.992 166.28C249.389 166.826 249.784 167.361 250.156 167.9C252.965 172.022 255.354 176.579 256.978 180.969C258.1 184.009 259.242 189.303 259.851 193.761C260.168 196.471 260.296 199.141 260.236 201.772C259.809 213.16 256.393 223.332 249.824 232.665C247.325 236.265 244.483 239.49 241.331 242.322C236.696 246.343 231.139 249.849 225.545 252.251C223.619 253.046 221.641 253.753 219.599 254.363C219.255 254.472 218.324 254.67 216.901 254.955C200.646 258.192 123.98 271.577 108.152 273.942C106.697 274.184 105.764 274.299 105.418 274.323ZM182.169 203.122C180.182 191.745 187.803 180.899 199.181 178.913C210.57 176.924 221.404 184.548 223.39 195.925C225.376 207.303 217.767 218.146 206.378 220.134C195 222.121 184.157 214.511 182.169 203.122ZM82.0091 220.609C80.0227 209.232 87.6439 198.386 99.0214 196.4C110.399 194.414 121.244 202.035 123.231 213.412C125.217 224.79 117.596 235.635 106.218 237.621C94.8292 239.61 83.9976 231.998 82.0091 220.609Z" stroke="#878787" stroke-width="0.75" stroke-miterlimit="10" />
                                        <path d="M50.1585 112.537C50.2644 111.552 50.3702 110.568 50.474 109.572C52.0216 94.438 59.9589 83.2598 72.2224 74.9366C80.6962 69.1827 90.4629 65.9924 99.7949 61.9723C114.575 55.6126 129.986 51.0744 145.444 46.7334C158.567 43.0538 171.514 43.486 183.872 49.7443C193.579 54.6541 200.3 62.2347 203.382 72.8293C204.926 78.1501 204.725 83.4257 203.074 88.7007C202.245 91.3568 201.494 94.0357 200.906 96.7584C200.487 98.7152 199.417 100.122 197.605 100.534C193.924 101.37 190.197 102.226 186.452 102.494C180.487 102.907 174.58 102.2 168.886 100.224C167.704 99.8144 166.513 99.2858 165.485 98.5839C163.293 97.095 162.3 95.6263 163.001 92.6544C164.039 88.2954 164.935 83.8886 165.562 79.4565C166.208 74.9245 163.943 72.5308 159.328 73.0709C156.157 73.4434 153.006 74.3437 149.995 75.4248C140.002 78.9806 130.074 82.7667 120.107 86.4025C110.378 89.9484 100.584 93.3248 90.9032 97.0073C88.9319 97.7499 87.1114 99.2873 85.6609 100.869C83.7643 102.939 83.9419 104.924 85.9344 106.931C87.8519 108.854 89.9752 110.572 92.0673 112.32C93.9173 113.856 95.8274 115.322 97.7395 116.799C99.2602 117.97 99.9057 119.524 99.3251 121.316C98.7174 123.161 98.0731 125.072 97.0098 126.659C92.0836 133.991 85.7299 139.785 77.7719 143.722C74.9706 145.104 72.3671 145.269 69.7039 143.017C66.606 140.419 63.1088 138.301 59.9391 135.775C55.3368 132.099 53.2938 126.829 51.5666 121.431C51.4262 120.973 51.2037 120.529 51.0185 120.09C50.7116 117.572 50.4302 115.061 50.1585 112.537Z" stroke="#878787" stroke-width="0.75" stroke-miterlimit="10" />
                                        <path className='ring-2 ring' d="M238.621 97.8178C235.898 96.8805 233.29 95.9835 230.541 95.0386C234.866 81.569 234.183 68.5271 228.03 55.9693C221.909 43.4543 212.056 34.9474 198.858 30.1036C199.791 27.3567 200.677 24.751 201.562 22.1454C230.11 30.6725 250.215 64.9796 238.621 97.8178Z" stroke="#878787" stroke-width="0.75" stroke-miterlimit="10" />
                                        <path className='ring-1 ring' d="M194.09 44.2061C194.277 43.5457 194.413 43.0147 194.587 42.4893C195.324 40.3443 196.074 38.2089 196.824 36.0736C220.677 44.2008 232.626 70.4534 224.567 92.9666C221.922 92.064 219.263 91.1517 216.451 90.1937C219.517 80.7113 219.057 71.5063 214.741 62.6244C210.41 53.7211 203.417 47.6972 194.09 44.2061Z" stroke="#878787" stroke-width="0.75" stroke-miterlimit="10" />
                                        <path className='ring-3 ring' d="M253.87 101.759C250.433 100.609 247.137 99.5057 243.661 98.3377C248.974 81.3269 247.991 64.9082 240.132 49.1467C232.294 33.4417 219.803 22.8237 203.135 16.847C204.282 13.3867 205.373 10.093 206.464 6.79938C242.508 17.2536 268.156 60.2767 253.87 101.759Z" stroke="#878787" stroke-width="0.75" stroke-miterlimit="10" />
                                    </svg>

                                    <div className="contact-form">
                                        <span>
                                            <DefaultInput onChange={setFirstName} value={firstName} labelName='first name*' placeHolder='John' />
                                            <DefaultInput onChange={setLastName} value={lastName} labelName='second name' placeHolder='Smith' />
                                        </span>
                                        <span>
                                            <DefaultInput onChange={setEmail} value={email} labelName='email*' placeHolder='johnsmith@example.com' />
                                            <DefaultPhoneInput value={phone} onChange={setPhone} />
                                        </span>
                                        <span>
                                            <ServicesDropDown onServiceSelected={handleServiceSelection} />
                                        </span>
                                        <span>
                                            <DefaultTextArea onChange={setMessage} value={message} labelName='share more' placeHolder='Share your thoughts' />
                                        </span>
                                        {
                                            loading ? <button><AnimationComponent /></button> : <button onClick={handleSubmit} >submit</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </> : "loading"
            }
        </>
    )
}

export default ServiceDetailed
