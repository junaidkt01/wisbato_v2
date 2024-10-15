"use client"

import "./EyeExpand.css"

const EyeExpand = ({ data, isOpen, toggleExpand }: { data: { title: string; content: string; id: number }, isOpen: number | null; toggleExpand: (id: number) => void }) => {

    const handleClick = () => {
        if (isOpen === data.id) {
            toggleExpand(0);
        } else {
            toggleExpand(data.id,);
        }
    };

    return (
        <div className="eye-expand-component" onClick={handleClick}>
            <div className="eye-expand-div">
                <div className="eye-expand-texts">
                    <p>{data.title}</p>
                    <div className={isOpen === data.id ? "expanded" : ""} >
                        <p dangerouslySetInnerHTML={{ __html: data.content }} />
                    </div>
                </div>
                {isOpen === data.id ?
                    <svg className='opened-eye' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.89899 12.7346C2.80091 12.5052 2.75 12.2542 2.75 12C2.75 11.7458 2.80091 11.4948 2.89899 11.2654C3.70725 9.34502 4.99868 7.72989 6.61515 6.61781C8.23161 5.50574 10.1029 4.945 12 5.00426C13.8971 4.945 15.7684 5.50574 17.3849 6.61781C19.0013 7.72989 20.2928 9.34502 21.101 11.2654C21.1991 11.4948 21.25 11.7458 21.25 12C21.25 12.2542 21.1991 12.5052 21.101 12.7346C20.2928 14.655 19.0013 16.2701 17.3849 17.3822C15.7684 18.4943 13.8971 19.055 12 18.9957C10.1029 19.055 8.23161 18.4943 6.61515 17.3822C4.99868 16.2701 3.70725 14.655 2.89899 12.7346Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    :
                    <svg className='closed-eye' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.83203 15.8336C6.17913 19.0342 8.33151 21.7261 11.0256 23.5795C13.7197 25.433 16.8385 26.3676 20.0004 26.2688C23.1622 26.3676 26.281 25.433 28.9752 23.5795C31.6692 21.7261 33.8217 19.0342 35.1687 15.8336" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                }
            </div>
        </div>
    )
}

export default EyeExpand
