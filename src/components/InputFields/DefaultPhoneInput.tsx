import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

// const DefaultPhoneInput = ({ value, onChange }: { value: any, onChange: (phoneValue: any) => void }) => {
const DefaultPhoneInput = ({ value, onChange }: { value?: any, onChange?: any }) => {
    const handlePhoneChange = (phoneValue: any) => {
        onChange(phoneValue);
    }

    // const handlePhoneChange = (e: any) => {
    //     if (typeof onChange === 'function') {
    //         onChange(e.target.value);
    //     }
    // };

    return (
        <div className='default-input with-icon'>
            <label htmlFor="">Phone</label>
            <div className="input-container">
                <div className="country-icon">
                    <PhoneInput
                        className="flag-border-checkout"
                        defaultCountry="IN"
                        value={value}
                        onChange={handlePhoneChange}
                        placeholder="Mobile Number"
                        name="contact_number"
                        id=""
                    />
                </div>
            </div>
        </div>
    )
}

export default DefaultPhoneInput;

// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";

// const DefaultPhoneInput = () => {
//     const handle = () => {
//         console.log("object")
//     }
//     return (
//         <div className='default-input with-icon'>
//             <label htmlFor="">Phone</label>
//             <div className="input-container">
//                 <div className="country-icon">
//                     <PhoneInput
//                         className="flag-border-checkout"
//                         value={"IN"}
//                         onChange={handle}
//                         placeholder="Mobile Number"
//                         name="contact_number"
//                         id=""
//                     />
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default DefaultPhoneInput