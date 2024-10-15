import { servicePlatformData } from "../../../utils/servicesData"

const ServicePlatform = () => {
    return (
        <div className="service-platforms">
            {
                servicePlatformData.map((item, i) => <div key={i} className='service-platform' >
                    <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                    <p>{item.title}</p>
                </div>)
            }
        </div>
    )
}

export default ServicePlatform
