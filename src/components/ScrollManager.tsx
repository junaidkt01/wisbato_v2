import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const ScrollManager = ({ children }: { children: any }) => {
    useEffect(() => {
        const scrollContainer: any = document.querySelector('[data-scroll-container]');

        if (scrollContainer) {
            const scroll = new LocomotiveScroll({
                el: scrollContainer,
                smooth: true,
                smartphone: {
                    smooth: true,
                },
                tablet: {
                    smooth: true,
                    breakpoint: 1024,
                },
            });

            return () => {
                if (scroll) {
                    scroll.destroy();
                }
            };
        }
    }, []);

    return <div data-scroll-container className="scroll-container" >{children}</div>;
};

export default ScrollManager;