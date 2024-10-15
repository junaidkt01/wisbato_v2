import { useEffect, useRef, useState } from "react";
import "./WorkProcess.css"
import { workProcessCard } from "../../utils/WorkProcessCard";

const WorkProcessDesktop = () => {

    const pathRef: any = useRef();
    const containerRef: any = useRef();
    const [progress, setProgress] = useState(0);
    const [pointPosition, setPointPosition] = useState({ x: 51.701698303222656, y: 0 });
    const [popupPositions, setPopupPositions] = useState<any>(null);

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

    const checkCollisionWithBlackCircles = (x: number, y: number) => {
        const circles = document.querySelectorAll('circle[id^="point"]');
        circles.forEach((circle: any) => {
            const cx = parseFloat(circle.getAttribute("cx"));
            const cy = parseFloat(circle.getAttribute("cy"));

            const distance = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);

            if (distance <= 50) {
                const index = parseInt(circle.id.slice(-1)) - 1;
                const popupContent = workProcessCard[index];

                setPopupPositions({ x: cx, y: cy, content: popupContent });
            }
        });
    };


    // <svg width="58" height="1341" viewBox="0 0 58 1341" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path fill-rule="evenodd" clip-rule="evenodd" d="M28.611 1110.42C14.9666 1133.45 0.859168 1157.26 0.859167 1187.37C0.859165 1217.48 14.9762 1241.31 28.6249 1264.34L28.6292 1264.35C42.1892 1287.21 56.1992 1310.85 56.1992 1340.56L57.6992 1340.56C57.6992 1310.46 43.6013 1286.66 29.9613 1263.62L29.9292 1263.57C16.3692 1240.71 2.35917 1217.06 2.35917 1187.36C2.35917 1157.66 16.3764 1134.01 29.9252 1111.16L29.9292 1111.15L29.9474 1111.12C43.5917 1088.09 57.6992 1064.28 57.6992 1034.17C57.6992 1033.97 57.6985 1033.76 57.6972 1033.56L57.6992 1033.56C57.6992 1003.46 43.6013 979.657 29.9613 956.624L29.9292 956.57C16.3692 933.71 2.35916 910.06 2.35916 880.36C2.35917 850.663 16.3764 827.015 29.9251 804.157L29.9292 804.15L29.9473 804.119C43.5327 781.188 57.5772 757.482 57.6984 727.56L57.6992 727.56L57.699 727.368L57.6992 727.17C57.6992 697.063 43.5916 673.251 29.9472 650.22L29.9292 650.19L29.9202 650.175C22.693 637.979 15.217 625.364 9.95918 612L9.85446 612.041C5.32771 600.421 2.35917 588.031 2.35917 574.36C2.35917 544.663 16.3764 521.015 29.9251 498.157L29.9292 498.15L29.9473 498.119C43.5327 475.188 57.5772 451.482 57.6984 421.56L57.6992 421.56L57.699 421.368L57.6992 421.17C57.6992 391.063 43.5917 367.251 29.9473 344.221L29.9292 344.19L29.9202 344.175L29.92 344.175C22.6929 331.979 15.217 319.364 9.95918 306L9.85446 306.041C5.32771 294.421 2.35916 282.031 2.35916 268.36C2.35917 238.663 16.3764 215.015 29.9251 192.157L29.9292 192.15L29.9473 192.119C43.5917 169.089 57.6992 145.277 57.6992 115.17C57.6992 85.0633 43.5917 61.2511 29.9473 38.2206L29.9292 38.19L29.9202 38.1748C22.693 25.9795 15.217 13.3645 9.95918 -2.08678e-06L8.55918 0.549998C13.8592 14.03 21.3692 26.7 28.6392 38.96C42.1892 61.82 56.1992 85.46 56.1992 115.17C56.1992 144.88 42.1892 168.52 28.6292 191.39L28.6111 191.42C14.9667 214.451 0.859166 238.263 0.859165 268.37C0.859164 298.477 14.9761 322.305 28.6247 345.342L28.6292 345.35C42.16 368.161 56.1388 391.748 56.199 421.368C56.1368 450.985 42.159 474.571 28.6292 497.39L28.6111 497.421C14.9667 520.451 0.859168 544.263 0.859167 574.37C0.859165 604.477 14.9761 628.305 28.6247 651.342L28.6292 651.35C42.16 674.161 56.1388 697.748 56.199 727.368C56.1368 756.985 42.159 780.571 28.6292 803.39L28.6111 803.42C14.9667 826.451 0.859166 850.263 0.859165 880.37C0.859164 894.611 4.01767 907.447 8.79112 919.459L8.55918 919.55C13.8592 933.03 21.3692 945.7 28.6392 957.96C42.1892 980.82 56.1992 1004.46 56.1992 1034.17C56.1992 1063.88 42.1892 1087.52 28.6292 1110.39L28.611 1110.42Z" fill="#D4D4D4" />
    // </svg>

    return (
        <div style={{ maxHeight: "100vh", backgroundColor: "", position: "relative" }}>
            <h1 style={{
                position: "absolute", left: "60px", fontSize: "72px", fontWeight: "500"
            }} >WORK PROCESS</h1>
            <div ref={containerRef} className="horizontal-section" id="horizontalScrollSection">
                <div className="boxes">
                    <svg style={{ transform: "rotate(-90deg)", backgroundColor: "" }} width="454" height="5400" viewBox="-55 -55 454 5000" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path ref={pathRef} d="M51.7017 0C51.7017 0 244.866 242.805 244.866 930.112C244.866 1617.42 20.9234 1492.92 3.91371 2174.59C-13.7255 2881.49 229.643 2748.94 249.141 3441.15C272.2 4259.75 73.0805 5000 73.0805 5000" stroke="black" stroke-width="1" />
                        <g className="check-point-icon" fill="#C3DFFF">
                            <circle id="pointA 1" cx="51.701698303222656" cy="0" r="50" />
                            <image x={51.701698303222656 - 30} y={0 - 30} xlinkHref="/svgIcons/checkPointsIcon/desktop/1.svg" />
                        </g>

                        <g className="check-point-icon" fill="#DCD2F7">
                            <circle id="pointB 2" cx="234.14755249023438" cy="1163.5897216796875" r="50" />
                            <image x={234.14755249023438 - 27} y={1163.5897216796875 - 27} xlinkHref="/svgIcons/checkPointsIcon/desktop/2.svg" />
                        </g>

                        <g className="check-point-icon" fill="#F7D2DB">
                            <circle id="pointC 3" cx="4.14755249023438" cy="2162.186279296875" r="50" />
                            <image x={4.14755249023438 - 29} y={2162.186279296875 - 29} xlinkHref="/svgIcons/checkPointsIcon/desktop/3.svg" />
                        </g>

                        <g className="check-point-icon" fill="#F5C9FD">
                            <circle id="pointD 4" cx="249.7351531982422" cy="3464.423095703125" r="50" />
                            <image x={249.7351531982422 - 30} y={3464.423095703125 - 22} xlinkHref="/svgIcons/checkPointsIcon/desktop/4.svg" />
                        </g>

                        <g className="check-point-icon" fill="#FFE3C2">
                            <circle id="pointE 5" cx="73.08049774169922" cy="5000" r="50" />
                            <image x={73.08049774169922 - 22} y={5000 - 30} xlinkHref="/svgIcons/checkPointsIcon/desktop/5.svg" />
                        </g>

                        <g className="check-point-icon" fill="#F7931E">
                            <circle cx={pointPosition.x} cy={pointPosition.y} r="50" />
                            <image x={pointPosition.x - 25} y={pointPosition.y - 40} xlinkHref="/svgIcons/checkPointsIcon/desktop/move.svg" />
                        </g>

                        {popupPositions && (
                            <foreignObject x={popupPositions.x - popupPositions.content.x} y={popupPositions.y - popupPositions.content.y} style={{ width: "500px", height: "500px", borderRadius: "8px", position: "relative", padding: "10px" }} >
                                <div className="work-process-card" style={{ backgroundColor: popupPositions.content.color }}>
                                    <div className="title-div">
                                        <img src={`/svgIcons/checkPointsIcon/desktop/${popupPositions.content.id}.svg`} alt="" />
                                        <h1>{popupPositions.content.title}</h1>
                                    </div>
                                    <div className="work-process-points" >
                                        {
                                            popupPositions.content.content.map((itm: any, i: number) => <ul key={i}>
                                                <li>{itm}</li>
                                            </ul>)
                                        }
                                    </div>
                                </div>
                            </foreignObject>
                        )}
                    </svg>
                </div>
            </div>
        </div >
    )
}

export default WorkProcessDesktop