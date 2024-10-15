import SectionTitle from '../SectionTitle';
import React from 'react';
import './WorkProcess.css';

const WorkProcessMobile = () => {
    const workProcessData = [
        {
            icon: '1',
            title: 'Idea',
            points: [
                "Brainstorming and validating concepts",
                "User persona creation and feature prioritization",
                "Prototyping for visualization",
                "Market research for trend identification",
                "Ideation workshops for refinement",
            ],
            color: '#C3DFFF',
            position: 50,
        },
        {
            icon: '2',
            title: 'Design',
            points: [
                "UI/UX design based on research",
                "Iterative design optimization",
                "Style guide development for consistency",
                "Stakeholder collaboration for feedback",
                "Usability testing for validation",
            ],
            color: '#DCD2F7',
            position: 675,
        },
        {
            icon: '3',
            title: 'Development',
            points: [
                "Efficient code writing based on design",
                "Functionality implementation",
                "API integration as needed",
                "Version control and code reviews",
                "Continuous integration and deployment",
            ],
            color: '#F7D2DB',
            position: 1300,
        },
        {
            icon: '4',
            title: 'Test',
            points: [
                "Test case creation",
                "Unit and integration testing",
                "User acceptance testing (UAT)",
                "Regression testing",
                "Performance monitoring",
            ],
            color: '#F5C9FD',
            position: 1925,
        },
        {
            icon: '5',
            title: 'Support',
            points: [
                "Documentation and training materials",
                "Technical support and issue troubleshooting ",
                "System performance monitoring",
                "User feedback gathering",
                "Product iteration based on feedback",
            ],
            color: '#FFE3C2',
            position: 2550,
        },
    ];

    return (
        <div className="work-process-section-mobile">
            <div>
                <div style={{ margin: "60px 24px" }} >
                    <SectionTitle title='work process' />
                </div>
                <div>
                    <svg style={{ width: '100dvw' }} width="200" height="3001" viewBox="0 0 2 3001" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0V3001" stroke="#878787" stroke-dasharray="8 8" />
                        {workProcessData.map((item, index) => (
                            <React.Fragment key={index}>
                                <g className="check-point-icon" fill={item.color}>
                                    <circle cx="1" cy={item.position} r="50" />
                                    <image x={index === 0 ? '-30' : '-25'} y={item.position - 30} xlinkHref={`/svgIcons/checkPointsIcon/mobile/${item.icon}.svg`} width="60" height="60" />
                                </g>
                                <foreignObject x="-150" y={item.position + 100} style={{ backgroundColor: item.color, width: '300px', height: '400px', borderRadius: '4px' }}>
                                    <div className="work-process-card-mobile">
                                        <div className="title-div-mobile">
                                            <img src={`/svgIcons/checkPointsIcon/mobile/${item.icon}.svg`} alt="" />
                                            <p>{item.title}</p>
                                        </div>
                                        <div className="work-process-points-mobile">
                                            <ul>
                                                {item.points.map((point, index) => (
                                                    <li key={index}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </foreignObject>
                            </React.Fragment>
                        ))}
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default WorkProcessMobile;