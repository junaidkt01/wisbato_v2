
// const DefaultInput = ({ labelName, placeHolder, value, onChange }: { labelName: string; placeHolder: string; value: string | number; onChange: (e: any) => void }) => {
const DefaultInput = ({ labelName, placeHolder, value, onChange }: { labelName: string; placeHolder: string; value?: string | number; onChange?: any }) => {
    return (
        <div className='default-input' >
            <label htmlFor="">{labelName}</label>
            <input
                type="text"
                placeholder={placeHolder}
                value={value}
                onChange={(e: any) => onChange(e.target.value)}
            />
        </div>
    )
}

export default DefaultInput
