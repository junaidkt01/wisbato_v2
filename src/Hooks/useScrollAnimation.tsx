import { useEffect, useRef } from 'react';

const useScrollAnimation = () => {
    const elementRef = useRef<HTMLDivElement>(null);
    let hasScrolled = false;

    useEffect(() => {
        const handleScroll = () => {
            if (!elementRef.current || hasScrolled) return;
            const boxTop = elementRef.current.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight / 5 * 4;
            if (boxTop < triggerBottom) {
                elementRef.current.classList.add('animated-ref');
                hasScrolled = true;
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return elementRef;
};

export default useScrollAnimation;
