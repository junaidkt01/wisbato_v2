import { workProcessCard } from "../../utils/WorkProcessCard";
import { useEffect, useRef, useState } from "react";
import "./WorkProcess.css"

const Test = () => {
    const pathRef: any = useRef();
    const containerRef: any = useRef();
    const [progress, setProgress] = useState(0);
    const [pointPosition, setPointPosition] = useState({ x: 209.771, y: 0 });
    const [popupPositions, setPopupPositions] = useState<any>([]);

    console.log("popupPositions: ", popupPositions)

    useEffect(() => {
        const handleScroll = () => {
            const containerWidth = containerRef.current.clientHeight;
            const scrollLeft = containerRef.current.scrollTop;
            const scrollWidth = containerRef.current.scrollHeight;

            const scrollProgress = (scrollLeft / (scrollWidth - containerWidth)) * 100;
            setProgress(scrollProgress);
            updatePointPosition(scrollProgress);
        };

        containerRef?.current?.addEventListener('scroll', handleScroll);

        return () => {
            containerRef?.current?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            if (progress < 100) {
                setProgress(prevProgress => prevProgress + 1);
            }
        }, 20);

        return () => clearInterval(timer);
    }, [progress]);

    const updatePointPosition = (newProgress: number) => {
        const pathLength = pathRef.current.getTotalLength();
        const newPathLength = pathLength * (newProgress / 100);

        const { x, y } = pathRef.current.getPointAtLength(newPathLength);

        setPointPosition({ x, y });

        checkCollisionWithBlackCircles(x, y);
    };

    const MAX_POPUP_POSITIONS = 5;

    const checkCollisionWithBlackCircles = (x: number, y: number) => {
        const circles = document.querySelectorAll('circle[id^="point"]');
        circles.forEach((circle: any) => {
            const cx = parseFloat(circle.getAttribute("cx"));
            const cy = parseFloat(circle.getAttribute("cy"));
            const circleId = circle.id;
            const distance = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);

            if (distance <= 100) {
                const popupContent = workProcessCard.find(
                    (card) => card.checkpoint_id === circleId
                );

                if (popupContent) {
                    setPopupPositions((prevPositions: any) => {
                        if (prevPositions.length >= MAX_POPUP_POSITIONS) {
                            return prevPositions;
                        }

                        const updatedPositions = prevPositions.filter(
                            (position: any) => position.id !== circleId
                        );

                        return [...updatedPositions, { x: cx, y: cy, id: circleId, content: popupContent }];
                    });
                }
            }
        });
    };

    return (
        <div style={{ maxHeight: "100vh", position: "relative" }}>
            <h1 style={{
                position: "absolute", left: "60px", fontSize: "72px", fontWeight: "500"
            }} >WORK PROCESS</h1>
            <div ref={containerRef} className="horizontal-section" id="horizontalScrollSection">
                <div className="boxes">

                    <svg style={{ transform: "rotate(-90deg)" }} width="452" height="4975" viewBox="-50 -50 502 4975" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path ref={pathRef} d="M209.771 1C209.771 1 397.308 267.09 400.945 474C404.749 690.37 209.771 974 209.771 974C209.771 974 1 1253.74 1 1474C1 1694.26 209.771 1974 209.771 1974C209.771 1974 400.945 2257.58 400.945 2474C400.945 2690.42 209.771 2974 209.771 2974C209.771 2974 1 3253.74 1 3474C1 3694.26 209.771 3974 209.771 3974C209.771 3974 400.945 4257.58 400.945 4474C400.945 4690.42 209.771 4974 209.771 4974" stroke-dasharray="8 8" stroke="black" />

                        <g className="check-point-icon" fill="#C3DFFF">
                            <circle id="pointA 1" cx="209.771" cy="0" r="50" />
                            <image x={209.771 - 30} y={0 - 30} xlinkHref="/svgIcons/checkPointsIcon/desktop/1.svg" />
                        </g>

                        <g className="check-point-icon" fill="#DCD2F7">
                            <circle id="pointB 2" cx="0" cy="1487" r="50" />
                            <image x={0 - 27} y={1487 - 27} xlinkHref="/svgIcons/checkPointsIcon/desktop/2.svg" />
                        </g>

                        <g className="check-point-icon" fill="#F7D2DB">
                            <circle id="pointC 3" cx="399.771" cy="2487" r="50" />
                            <image x={399.771 - 29} y={2487 - 29} xlinkHref="/svgIcons/checkPointsIcon/desktop/3.svg" />
                        </g>

                        <g className="check-point-icon" fill="#F5C9FD">
                            <circle id="pointD 4" cx="0" cy="3487" r="50" />
                            <image x={0 - 30} y={3487 - 22} xlinkHref="/svgIcons/checkPointsIcon/desktop/4.svg" />
                        </g>

                        <g className="check-point-icon" fill="#FFE3C2">
                            <circle id="pointE 5" cx="209.771" cy="4975" r="50" />
                            <image x={209.771 - 22} y={4975 - 30} xlinkHref="/svgIcons/checkPointsIcon/desktop/5.svg" />
                        </g>

                        <g className="check-point-icon" fill="#F7931E">
                            <circle cx={pointPosition.x} cy={pointPosition.y} r="50" />
                            <image x={pointPosition.x - 25} y={pointPosition.y - 40} xlinkHref="/svgIcons/checkPointsIcon/desktop/move.svg" />
                        </g>

                        {
                            popupPositions?.map((item: any) => {
                                return (
                                    <foreignObject x={item.x - item.content.x} y={item.y - item.content.y} style={{
                                        width: "500px", height: "500px", borderRadius: "8px", position: "relative", padding: "10px",
                                    }}>
                                        <div className="work-process-card" style={{ backgroundColor: item.content.color }}>
                                            <div className="title-div">
                                                <img src={`/svgIcons/checkPointsIcon/desktop/${item.content.id}.svg`} alt="" />
                                                <h1>{item.content.title}</h1>
                                            </div>
                                            <div className="work-process-points" >
                                                {
                                                    item.content.content.map((itm: any, i: number) => <ul key={i}>
                                                        <li>{itm}</li>
                                                    </ul>)
                                                }
                                            </div>
                                        </div>
                                    </foreignObject>
                                )
                            })
                        }
                    </svg>
                </div>
            </div>
        </div >
    )
}

export default Test



// import { workProcessCard } from "../../utils/WorkProcessCard";
// import { useEffect, useRef, useState } from "react";
// import "./WorkProcess.css"

// const Test = () => {

//     const pathRef: any = useRef();
//     const containerRef: any = useRef();
//     const [progress, setProgress] = useState(0);
//     const [pointPosition, setPointPosition] = useState({ x: 209.771, y: 0 });
//     const [popupPositions, setPopupPositions] = useState<any>([]);

//     useEffect(() => {
//         const handleScroll = () => {
//             const containerWidth = containerRef.current.clientHeight;
//             const scrollLeft = containerRef.current.scrollTop;
//             const scrollWidth = containerRef.current.scrollHeight;

//             const scrollProgress = (scrollLeft / (scrollWidth - containerWidth)) * 100;
//             setProgress(scrollProgress);
//             updatePointPosition(scrollProgress);
//         };

//         containerRef?.current?.addEventListener('scroll', handleScroll);

//         return () => {
//             containerRef?.current?.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             if (progress < 100) {
//                 setProgress(prevProgress => prevProgress + 1);
//             }
//         }, 20);

//         return () => clearInterval(timer);
//     }, [progress]);

//     const updatePointPosition = (newProgress: number) => {
//         const pathLength = pathRef.current.getTotalLength();
//         const newPathLength = pathLength * (newProgress / 100);

//         const { x, y } = pathRef.current.getPointAtLength(newPathLength);

//         setPointPosition({ x, y });

//         checkCollisionWithBlackCircles(x, y);
//     };

//     const checkCollisionWithBlackCircles = (x: number, y: number) => {
//         const circles = document.querySelectorAll('circle[id^="point"]');
//         circles.forEach((circle: any) => {
//             const cx = parseFloat(circle.getAttribute("cx"));
//             const cy = parseFloat(circle.getAttribute("cy"));

//             const distance = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);

//             if (distance <= 100) {
//                 const index = parseInt(circle.id.slice(-1)) - 1;
//                 const popupContent = workProcessCard[index];

//                 setPopupPositions(prevPopupPositions => [...prevPopupPositions, { x: cx, y: cy, content: popupContent }]);

//             }
//         });
//     };

//     console.log("content.x", popupPositions?.x - popupPositions?.content?.x)
//     console.log("content.y", popupPositions?.y - popupPositions?.content?.y)

//     return (
//         <div style={{ maxHeight: "100vh", position: "relative" }}>
//             <h1 style={{
//                 position: "absolute", left: "60px", fontSize: "72px", fontWeight: "500"
//             }} >WORK PROCESS</h1>
//             <div ref={containerRef} className="horizontal-section" id="horizontalScrollSection">
//                 <div className="boxes">

//                     <svg style={{ transform: "rotate(-90deg)" }} width="452" height="4975" viewBox="-50 -50 502 4975" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path ref={pathRef} d="M209.771 1C209.771 1 397.308 267.09 400.945 474C404.749 690.37 209.771 974 209.771 974C209.771 974 1 1253.74 1 1474C1 1694.26 209.771 1974 209.771 1974C209.771 1974 400.945 2257.58 400.945 2474C400.945 2690.42 209.771 2974 209.771 2974C209.771 2974 1 3253.74 1 3474C1 3694.26 209.771 3974 209.771 3974C209.771 3974 400.945 4257.58 400.945 4474C400.945 4690.42 209.771 4974 209.771 4974" stroke-dasharray="8 8" stroke="black" />

//                         <g className="check-point-icon" fill="#C3DFFF">
//                             <circle id="pointA 1" cx="209.771" cy="0" r="50" />
//                             <image x={209.771 - 30} y={0 - 30} xlinkHref="/svgIcons/checkPointsIcon/desktop/1.svg" />
//                         </g>

//                         <g className="check-point-icon" fill="#DCD2F7">
//                             <circle id="pointB 2" cx="0" cy="1487" r="50" />
//                             <image x={0 - 27} y={1487 - 27} xlinkHref="/svgIcons/checkPointsIcon/desktop/2.svg" />
//                         </g>

//                         <g className="check-point-icon" fill="#F7D2DB">
//                             <circle id="pointC 3" cx="399.771" cy="2487" r="50" />
//                             <image x={399.771 - 29} y={2487 - 29} xlinkHref="/svgIcons/checkPointsIcon/desktop/3.svg" />
//                         </g>

//                         <g className="check-point-icon" fill="#F5C9FD">
//                             <circle id="pointD 4" cx="0" cy="3487" r="50" />
//                             <image x={0 - 30} y={3487 - 22} xlinkHref="/svgIcons/checkPointsIcon/desktop/4.svg" />
//                         </g>

//                         <g className="check-point-icon" fill="#FFE3C2">
//                             <circle id="pointE 5" cx="209.771" cy="4975" r="50" />
//                             <image x={209.771 - 22} y={4975 - 30} xlinkHref="/svgIcons/checkPointsIcon/desktop/5.svg" />
//                         </g>

//                         <g className="check-point-icon" fill="#F7931E">
//                             <circle cx={pointPosition.x} cy={pointPosition.y} r="50" />
//                             <image x={pointPosition.x - 25} y={pointPosition.y - 40} xlinkHref="/svgIcons/checkPointsIcon/desktop/move.svg" />
//                         </g>

//                         {popupPositions.map((popup, index) => (
//                             <foreignObject key={index} x={popup.x - popup.content.x} y={popup.y - popup.content.y} style={{ width: "500px", height: "500px", borderRadius: "8px", position: "relative", padding: "10px" }} >
//                                 <div className="work-process-card" style={{ backgroundColor: popup.content.color }}>
//                                     <div className="title-div">
//                                         <img src={`/svgIcons/checkPointsIcon/desktop/${popup.content.id}.svg`} alt="" />
//                                         <h1>{popup.content.title}</h1>
//                                     </div>
//                                     <div className="work-process-points" >
//                                         {popup.content.content.map((itm, i) => (
//                                             <ul key={i}>
//                                                 <li>{itm}</li>
//                                             </ul>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </foreignObject>
//                         ))}
//                     </svg>
//                 </div>
//             </div>
//         </div >
//     )
// }

// export default Test