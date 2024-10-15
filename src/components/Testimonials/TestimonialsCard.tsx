
const TestimonialsCard = ({ item }: { item: any, width: string }) => {
    return (
        <div className='testimonials-card'>
            <p>“</p>
            <p>{item?.text}</p>
            <p>{item?.name}, <span>{item?.jobTitle}</span></p>
        </div>
    )
}

export default TestimonialsCard