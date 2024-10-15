import ServicePlatform from "./ServicePlatform";

type Point = {
    id: number;
    title: string;
    description: string;
};

type Card = {
    id: number;
    title: string;
    description: string;
};

type Summary = {
    id: number;
    title: string;
    description: string[];
};

type Outcomes = {
    id: number;
    title: string;
    description: string[];
    servicePlatform: boolean,
    subContent: {
        title: string;
        description: string[];
        advantages: {
            id: number;
            title: string;
            description: string;
            points: Point[];
        };
        disAdvantages: {
            id: number;
            title: string;
            description: string;
            points: Point[];
        };
    };
    question: {
        title: string;
        cards: Card[];
    };
    summery: Summary;
};

const OutComes = ({ outComes }: { outComes?: Outcomes }) => {

    return (
        <div className="outcomes" >
            {/* 1 */}
            <div className="content" >
                <h1 dangerouslySetInnerHTML={{ __html: outComes?.title || "" }} />
                <div>
                    {outComes?.description.map((item, i) => <p className="paragraph" key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
                </div>
            </div>


            {/* 2 */}
            <div className="sub-content" >
                <div className="content" >
                    <h2>{outComes?.subContent.title}</h2>
                    <div>
                        {
                            outComes?.subContent.description.map((item, i) => <p className="paragraph" key={i} dangerouslySetInnerHTML={{ __html: item }} />)
                        }
                    </div>
                </div>

                { outComes?.servicePlatform && <ServicePlatform />}

                <div className="adv-dis-cards" >
                    <div className="adv-card" >
                        <div className="content">
                            <h2>{outComes?.subContent.advantages.title}</h2>
                            <p>{outComes?.subContent.advantages.description}</p>
                        </div>
                        <div className="adv-card-list" >
                            {
                                outComes?.subContent.advantages.points.map((item, i) => {
                                    return (
                                        <div className="card-list-points" key={i} >
                                            <div>
                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="14" cy="14" r="14" fill="#008359" fill-opacity="0.8" />
                                                    <path d="M9.83383 12.2764H9.04483C8.3912 12.2764 7.86133 12.8063 7.86133 13.4599V18.9829C7.86133 19.6365 8.3912 20.1664 9.04483 20.1664H9.83383C10.4875 20.1664 11.0173 19.6365 11.0173 18.9829V13.4599C11.0173 12.8063 10.4875 12.2764 9.83383 12.2764Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M20.1069 14.162L19.1601 18.896C19.0879 19.2593 18.8903 19.5856 18.6018 19.8178C18.3133 20.0501 17.9524 20.1734 17.5821 20.1663H12.5956C12.1771 20.1663 11.7757 20.0001 11.4798 19.7041C11.1838 19.4082 11.0176 19.0068 11.0176 18.5883V13.8543C11.0303 13.5505 11.1071 13.2528 11.2431 12.9808C11.3791 12.7089 11.5711 12.4687 11.8066 12.2763L12.4615 8.33129C12.4762 8.23925 12.5125 8.15201 12.5674 8.07666C12.6222 8.00131 12.6942 7.93999 12.7772 7.89769C12.8602 7.85539 12.9521 7.83331 13.0454 7.83325C13.1386 7.83319 13.2304 7.85515 13.3136 7.89733L14.0474 8.26028C14.5321 8.49997 14.9202 8.89844 15.147 9.38939C15.3738 9.88033 15.4257 10.4341 15.294 10.9587L14.9626 12.2684H18.5604C18.7944 12.2684 19.0256 12.3204 19.237 12.4206C19.4484 12.5209 19.635 12.667 19.783 12.8483C19.931 13.0295 20.0368 13.2415 20.0929 13.4687C20.1489 13.6959 20.1537 13.9327 20.1069 14.162Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="dis-card" >
                        <div className="content" >
                            <h2>{outComes?.subContent.disAdvantages.title}</h2>
                            <p>{outComes?.subContent.disAdvantages.description}</p>
                        </div>
                        <div className="dis-card-list" >
                            {
                                outComes?.subContent.disAdvantages.points.map((item, i) => {
                                    return (
                                        <div className="card-list-points" key={i} >
                                            <div>
                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="14" cy="14" r="14" fill="#DB1F21" fill-opacity="0.8" />
                                                    <path d="M9.83383 15.7236H9.04483C8.3912 15.7236 7.86133 15.1937 7.86133 14.5401V9.01713C7.86133 8.36347 8.3912 7.8336 9.04483 7.8336H9.83383C10.4875 7.8336 11.0173 8.36347 11.0173 9.01713V14.5401C11.0173 15.1937 10.4875 15.7236 9.83383 15.7236Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M20.1069 13.838L19.1601 9.10401C19.0879 8.74075 18.8903 8.41441 18.6018 8.18221C18.3133 7.94995 17.9524 7.82661 17.5821 7.83368H12.5956C12.1771 7.83368 11.7757 7.99995 11.4798 8.29588C11.1838 8.59181 11.0176 8.99321 11.0176 9.41168V14.1457C11.0303 14.4495 11.1071 14.7472 11.2431 15.0192C11.3791 15.2911 11.5711 15.5313 11.8066 15.7237L12.4615 19.6687C12.4762 19.7607 12.5125 19.848 12.5674 19.9233C12.6222 19.9987 12.6942 20.06 12.7772 20.1023C12.8602 20.1446 12.9521 20.1667 13.0454 20.1667C13.1386 20.1668 13.2304 20.1449 13.3136 20.1027L14.0474 19.7397C14.5321 19.5 14.9202 19.1016 15.147 18.6106C15.3738 18.1197 15.4257 17.5659 15.294 17.0413L14.9626 15.7316H18.5604C18.7944 15.7316 19.0256 15.6796 19.237 15.5794C19.4484 15.4791 19.635 15.333 19.783 15.1517C19.931 14.9705 20.0368 14.7585 20.0929 14.5313C20.1489 14.3041 20.1537 14.0673 20.1069 13.838Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className="outcomes-question" >
                <h2>{outComes?.question.title}</h2>
                <div className="outcomes-question-cards" >
                    {
                        outComes?.question.cards.map((item, i) => {
                            return (
                                <div className="outcomes-question-card" key={i} >
                                    <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                                    <p>{item.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* 4 */}
            <div className="summery-content" >
                <h2 dangerouslySetInnerHTML={{ __html: outComes?.summery.title || "" }} />
                <p>
                    {
                        outComes?.summery?.description?.map((item, i) => <span key={i} dangerouslySetInnerHTML={{ __html: item }} />)
                    }
                </p>
            </div>
        </div >
    )
}

export default OutComes
