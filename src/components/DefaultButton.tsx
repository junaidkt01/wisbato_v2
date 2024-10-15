const DefaultButton = ({ text, theme, onClick }: { text: string, theme: string, onClick?: () => void }) => {
    return (
        <button onClick={onClick} className={`default-button ${theme}`} >{text}</button>
    )
}

export default DefaultButton
