const ProjectsCard = ({ bgColor, isFade }: { bgColor: string; isFade: boolean }) => {

    return (
        <div id="project-card" className={`projects-card ${isFade ? "" : "is-fade"}`} style={{ backgroundColor: bgColor }}>
            <p>Project Name</p>
            <p>Category</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <img className='projects-card-img' src="https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    )
}

export default ProjectsCard
