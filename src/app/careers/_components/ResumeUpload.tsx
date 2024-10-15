import { useContext, useEffect } from 'react'
import { useResumeUpload } from '../../../Hooks/useFormState'
import { StatusContext } from '../../../Hooks/StatusContext'

import AnimationComponent from '../../../components/AnimationComponent/AnimationComponent'
import DefaultFilesInput from '../../../components/InputFields/DefaultFilesInput'
import DefaultInput from '../../../components/InputFields/DefaultInput'
import DefaultPhoneInput from '../../../components/InputFields/DefaultPhoneInput'
import DefaultTextArea from '../../../components/InputFields/DefaultTextArea'

import './ResumeUpload.css'

const ResumeUpload = ({ onClose }: { onClose: () => void }) => {

    const { firstName, setFirstName, lastName, setLastName, email, setEmail, phone, setPhone, message, setMessage, designation, setDesignation, experience, setExperience, setCv, handleSubmit, loading, statusMessage } = useResumeUpload();

    const { setNotify } = useContext(StatusContext);

    useEffect(() => {
        if (statusMessage.message) {
            setNotify(statusMessage);
        } else if (statusMessage.message === '') {
            setTimeout(() => {
                setNotify(statusMessage);
            }, 3000);
        }
    }, [statusMessage]);

    // useEffect(() => {
    //     if (statusMessage) {
    //         setNotify(statusMessage);
    //         setTimeout(() => {
    //             setNotify(statusMessage);
    //         }, 2000);
    //     }
    // }, [statusMessage]);

    return (
        <div className="overlay page-transition" >
            <div className="popup">
                <button className='resume-form-close' onClick={onClose} >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 5L5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19 19L5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <div className="resume-form-section">
                    <h1 className='resume-form-section-title' >
                        <span>Ready to Impress?</span>
                        <span>Upload Your Resume!</span>
                    </h1>
                    <div className="resume-contact-form">
                        <span>
                            <DefaultInput value={firstName} onChange={setFirstName} labelName='first name*' placeHolder='John' />
                            <DefaultInput value={lastName} onChange={setLastName} labelName='second name' placeHolder='Smith' />
                        </span>
                        <span>
                            <DefaultInput value={email} onChange={setEmail} labelName='email*' placeHolder='johnsmith@example.com' />
                            <DefaultPhoneInput value={phone} onChange={setPhone} />
                        </span>
                        <span>
                            <DefaultInput value={designation} onChange={setDesignation} labelName='designation*' placeHolder='Designer' />
                            <DefaultInput value={experience} onChange={setExperience} labelName='years of experience' placeHolder='Fresher' />
                        </span>
                        <span>
                            <DefaultTextArea value={message} onChange={setMessage} labelName='share more' placeHolder='Share your thoughts' />
                        </span>
                        <span>
                            <DefaultFilesInput onChange={setCv} labelName='attachments ( upload .pdf files only )' placeHolder='Choose File or Drop Here' />
                        </span>
                        {
                            loading ? <button><AnimationComponent /></button> : <button onClick={handleSubmit} >submit</button>
                            // loading ? <button><AnimationComponent /></button> : <button disabled={statusMessage?.message == ''} onClick={handleSubmit} >submit</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeUpload;