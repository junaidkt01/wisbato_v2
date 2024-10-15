import { useRef, useEffect } from 'react';

const SectionWithAutoScroll = () => {
    const sectionRef: any = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // If title is intersecting with viewport, scroll to the section
                    entry.target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            },
            { threshold: 0.5 } // Adjust threshold as needed
        );

        observer.observe(sectionRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section ref={sectionRef}>
            <h1>Title</h1>
            <div style={{ height: "1500px", backgroundColor: "red" }} >
                
            </div>
        </section>
    );
};

export default SectionWithAutoScroll;
