import { Helmet } from "react-helmet-async"
import InnerBanner from "../../components/InnerBanner/InnerBanner"
import './team.css'
import TeamCateCard from "./_components/TeamCateCard"
import { useFetchMetaTags } from "../../Hooks/useFetchMetaTags"


const Team = () => {
    const { metaTags } = useFetchMetaTags("Team");

    return (
        <div className="team-section page-transition" >
            <Helmet>
                <title>{metaTags?.title}</title>
                <meta name="description" content={metaTags?.description} />
                <link rel="canonical" href="https://www.wisbato.com/team" />
            </Helmet>
            {/* //// header meta tag */}

            <InnerBanner nextSection={'.team-section'} text={'<span>team</span> <br> wisbato'} icons={["careersIcon1", "careersIcon2", "careersIcon3"]} />


            <div className="team-banner-section" >
                <img className="team-image" src="/images/image.png" alt="no img" />
                <div className="team-title">
                    <h1 >What We Build</h1>
                    <p >empowering ideas, transforming innovation into reality</p>
                </div>

                <div className="sub-content">
                    <p className="aditional-content">Meet the talented team behind our success</p>
                </div>
            </div>
            <TeamCateCard />
            <div className="team-moments">
                <div className="team-content">
                    <h1>Together We Celebrate</h1>
                    <p>"Highlighting our teamwork and joyous moments."</p>
                </div>

                {/* <div className="box-gallery">
    <div className="gallery1 column1">
        <img src="https://cdn.create.vista.com/api/media/small/416698034/stock-photo-young-manager-pointing-laptop-multicultural-colleagues-working-together-office-blurred" alt="Image 1" />
        <img src="https://cdn.create.vista.com/api/media/small/416698034/stock-photo-young-manager-pointing-laptop-multicultural-colleagues-working-together-office-blurred" alt="Image 2" />
    </div>
    <div className="gallery1 column2">
        <img src="https://cdn.create.vista.com/api/media/small/416698034/stock-photo-young-manager-pointing-laptop-multicultural-colleagues-working-together-office-blurred" alt="Image 3" />
        <img src="https://cdn.create.vista.com/api/media/small/416698034/stock-photo-young-manager-pointing-laptop-multicultural-colleagues-working-together-office-blurred" alt="Image 4" />
        <img src="https://cdn.create.vista.com/api/media/small/416698034/stock-photo-young-manager-pointing-laptop-multicultural-colleagues-working-together-office-blurred" alt="Image 5" />
        <img src="https://cdn.create.vista.com/api/media/small/416698034/stock-photo-young-manager-pointing-laptop-multicultural-colleagues-working-together-office-blurred" alt="Image 6" />
    </div>
    <div className="gallery1 column3">
        <img src="https://cdn.create.vista.com/api/media/small/416698034/stock-photo-young-manager-pointing-laptop-multicultural-colleagues-working-together-office-blurred" alt="Image 7" />
        <img src="https://cdn.create.vista.com/api/media/small/416698034/stock-photo-young-manager-pointing-laptop-multicultural-colleagues-working-together-office-blurred" alt="Image 8" />
    </div>
</div> */}
                {/* <div className="gallery-box">
    <div className="gallery-img">
        <img src="https://cdn.create.vista.com/api/media/small/416698034/stock-photo-young-manager-pointing-laptop-multicultural-colleagues-working-together-office-blurred" alt="no img" />

    </div>
    <div className="gallery-img">
        <img src="https://media.istockphoto.com/id/869437538/photo/one-to-one-business-meeting.jpg?s=612x612&w=0&k=20&c=m6BO1eB1tDI-pe0aJvn-uGQjOWTN_qbhmMvxWccOCG8=" alt="no img" />

    </div>
    <div className="gallery-img">
        <img src="https://media.istockphoto.com/id/1207315307/photo/mature-latin-american-businesswoman-working-from-home.jpg?s=612x612&w=0&k=20&c=IyNlGeWr9lPsPqKBzRybu5Lx5tSUinGinDJVENHpcGQ=" alt="no img" />

    </div>
    <div className="gallery-img">
        <img src="https://img.freepik.com/free-photo/smiley-businesswoman-taking-notes-clipboard_23-2148816872.jpg" alt="no img" />

    </div>
    <div className="gallery-img">
        <img src="https://media.istockphoto.com/id/1414606076/pt/foto/businessman-man-business-young-businesswoman-woman-office-rope-concept-competition-pull.jpg?s=612x612&w=0&k=20&c=3KmCvApL_YoVFhHDAA46hHLZVMhAAwmQNFcfcaXElfc=" />

    </div>
    <div className="gallery-img">
        <img src="https://media.istockphoto.com/id/1248161450/photo/overjoyed-multiethnic-businesspeople-stack-palms-together-celebrating-promotion-and-reward.jpg?s=612x612&w=0&k=20&c=QfMVb56bdiUVrqxAmVC7F81jTYhiALVojXt4S1fEzfA=" />

    </div>
    <div className="gallery-img">
        <img src="https://media.istockphoto.com/id/1202253476/photo/happy-business-team-giving-high-five-in-office.jpg?s=612x612&w=0&k=20&c=2OFX4GPmDE4GxpeKG8imGdio4lmFHUxE4ERotH3aZaQ=" />

    </div>
    <div className="gallery-img">
        <img src="https://images.pexels.com/photos/7108701/pexels-photo-7108701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

    </div>


</div> */}

                <div className="gallery">
                    <div className="image-container">
                        <img src="/images/events/img1.jpeg" />
                    </div>
                    <div className="image-container">
                        <img src="/images/events/img2.jpeg" />
                    </div>
                    <div className="image-container tall">
                        <img src="/images/events/img5.jpeg" />
                    </div>
                    <div className="image-container">
                        <img src="https://i.insider.com/5babe7f6ea4002cc798b4573?width=700" />
                    </div>
                    <div className="image-container">
                        <img src="/images/events/img3.jpeg" />
                    </div>
                    <div className="image-container tall">
                        <img src="https://www.giftcardpartners.com/hubfs/iStock-1365603844.jpg" />
                    </div>
                    <div className="image-container">
                        <img src="/images/events/img4.jpeg" />
                    </div>
                    <div className="image-container tall ">
                        <img src="https://img.freepik.com/free-photo/medium-shot-colleagues-celebrating_23-2149008991.jpg" />
                    </div>
                    <div className="image-container tall">
                        <img src="/images/events/img7.jpeg" />
                    </div>
                    <div className="image-container">
                        <img src="/images/events/img6.jpeg" />
                    </div>
                    <div className="image-container">
                        <img src="https://img.freepik.com/premium-photo/happy-work-anniversary-celebration-image_1046319-115110.jpg" />
                    </div>
                </div>

            </div>


        </div>









        // </div>




    )
}

export default Team
