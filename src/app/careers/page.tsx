import OpeningsTabs from './_components/OpeningsTabs'
import OpeningsEyeExpand from './_components/OpeningsEyeExpand'
import InnerBanner from '../../components/InnerBanner/InnerBanner'
// import DefaultButton from '../../components/DefaultButton'
import SectionTitle from '../../components/SectionTitle'
import { Helmet } from 'react-helmet-async'
import { useFetchMetaTags } from '../../Hooks/useFetchMetaTags'
import { useFetchCareers } from '../../Hooks/useFetchData'

// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

const Careers = () => {
    const { metaTags } = useFetchMetaTags("Career");

    const { careers, isLoading, error } = useFetchCareers();

    return (
        <div className='careers-section page-transition' >

            {/* //// header meta tag */}
            <Helmet>
                <title>{metaTags?.title}</title>
                <meta name="description" content={metaTags?.description} />
                <link rel="canonical" href="https://www.wisbato.com/careers" />
            </Helmet>
            {/* //// header meta tag */}

            <InnerBanner nextSection={'.openings-section'} text={'join our <br> <span>team</span>'} icons={["careersIcon1", "careersIcon2", "careersIcon3"]} />
            <div className="openings-section">
                <SectionTitle title='current openings' />

                {/* BIG SCREEN  */}
                <OpeningsTabs openings={careers} isLoading={isLoading} error={error} />

                {/* SMALL SCREEN  */}
                <OpeningsEyeExpand openings={careers} isLoading={isLoading} error={error} />
            </div>

        
        </div>
    )
}

export default Careers
