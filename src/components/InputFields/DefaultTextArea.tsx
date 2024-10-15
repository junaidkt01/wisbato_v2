
// const DefaultTextArea = ({ labelName, placeHolder, value, onChange }: { labelName: string; placeHolder: string; value: string, onChange: (e: any) => void }) => {
const DefaultTextArea = ({ labelName, placeHolder, value, onChange }: { labelName: string; placeHolder: string; value: string, onChange?: any }) => {
    const textareaStyle = {
        fontFamily: 'Arial, sans-serif'
    };

    return (
        <div className='default-input'>
            <span style={{ display: "flex", justifyContent: "space-between" }} >
                <label htmlFor="">{labelName}</label>
                <label style={{ opacity: value?.length >= 1000 ? "1.5" : "" }} htmlFor="">{value?.length >= 1000 && "( Reached 1000 words )"} {value?.length}/ 1000</label>
                {/* <label htmlFor="">{value?.length}/ 1000</label> */}
            </span>
            <textarea
                maxLength={1000}
                placeholder={placeHolder}
                style={textareaStyle}
                value={value}
                onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}

export default DefaultTextArea