import "./InnerBanner.css"
import "../Home/Home.css"
import ScrollButton from '../ScrollButton'

const InnerBanner = ({ text, icons, nextSection }: { text: string; icons: string[]; nextSection: string }) => {

    return (
        <div className='inner-banner-section'>
            <h1 className='banner-title' dangerouslySetInnerHTML={{ __html: text }}></h1>
            <span className="inner-banner-icons">
                {
                    icons?.map((item, i) =>
                        <img key={i} className='gravity-icon shadow' src={`/svgIcons/${item}.svg`} alt="" />
                    )
                }
            </span>

            <div style={{ position: "relative", top: "110px" }} >
                <ScrollButton nextSection={nextSection} color='#000' hide={true} />
            </div>
        </div>
    )
}

export default InnerBanner
