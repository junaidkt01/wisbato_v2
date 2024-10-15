import { useNavigate } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton";
import "../careers.css"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const OpeningsCard = ({ data, selectedTab, isLoading, error }: { data: { id: number; name: string; experience: string; location: string; bgColor: string; category: string; }, selectedTab: string; isLoading: boolean; error: string }) => {
    const navigate = useNavigate()

    const colors = ["#C3DFFF", "#DCD2F7", "#FFDD78", "#F6C4FE", "#FFE3C2", "#F7D2DB",]
    const color = colors[data?.id % colors.length];

    const handleNavigation = (title: string) => {
        const data = title.replace(/[^\w]+/gi, "-").toLowerCase();
        navigate(`/careers/${data}`)
        window.scrollTo(0, 0)
    };

    return (
        <div className={`openings-card ${selectedTab === data.category ? "active" : ""}`} style={{ backgroundColor: color, position: "relative" }} >
            <p className='openings-card-title' >{isLoading || error ? <Skeleton width={300} /> : data.name}</p>
            <div>
                <p>{isLoading || error ? <Skeleton width={200} /> : `experience: ${data.experience}`}</p>
                <p>{isLoading || error ? <Skeleton width={200} /> : `location: ${data.location}`}</p>
            </div>

            {isLoading || error ? <Skeleton width={200} height={50} /> : <DefaultButton onClick={() => handleNavigation(data.name)} text='apply now' theme='light-bg-btn' />}
        </div>
    )
}

export default OpeningsCard
