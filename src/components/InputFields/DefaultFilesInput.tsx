const DefaultFilesInput = ({ labelName, placeHolder, onChange }: { labelName: string; placeHolder: string; onChange: (e: any) => void }) => {
    return (
        <div className="default-input">
            <label htmlFor="">{labelName}</label>
            <input
                className="files-input"
                type="file"
                placeholder={placeHolder}
                onChange={(e) => onChange(e.target.files?.[0])}
            />
        </div>
    );
};

export default DefaultFilesInput

// const DefaultFilesInput = ({ labelName, placeHolder }: { labelName: string; placeHolder: string }) => {
//     return (
//         <div className='default-input' >
//             <label htmlFor="">{labelName}</label>
//             <input className='files-input' type="file" placeholder={placeHolder} />
//         </div>
//     )
// }

// export default DefaultFilesInput
