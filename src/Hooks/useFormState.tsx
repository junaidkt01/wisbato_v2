import { useState } from 'react';

export const useFormState = () => {
    const [selectedService, setSelectedService] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState<{ message: string, color: string }>({ message: '', color: '' });

    const handleServiceSelection = (service: any) => {
        setSelectedService(service);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage({ message: '', color: '' });

        if (!firstName || !lastName || !email || !phone || !message) {
            setStatusMessage({ message: 'Please fill in all required fields', color: '#FAE7C7' });
            setTimeout(() => setStatusMessage({ message: '', color: '' }), 2000);
            setLoading(false);
            return;
        }

        try {
            const formData = {
                form_type: selectedService,
                fname: firstName,
                lname: lastName,
                phone: phone,
                email: email,
                message: message
            };

            console.log("formData", formData);
            const response = await fetch('https://backend.wisbato.com/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatusMessage({ message: 'Form submitted successfully', color: '#B6F8C4' });
                console.log('Form submitted successfully');
                setSelectedService('');
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setMessage('');
            } else {
                setStatusMessage({ message: 'Failed to submit form', color: '#FFB7B7' });
                console.error('Failed to submit form');
            }
        } catch (error) {
            setStatusMessage({ message: 'An error occurred', color: '#FFB7B7' });
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return {
        selectedService, handleServiceSelection, firstName, setFirstName, lastName, setLastName, email, setEmail, phone,
        setPhone, message, setMessage, handleSubmit, statusMessage, setStatusMessage, loading
    };
};

export const useResumeUpload = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [designation, setDesignation] = useState('');
    const [experience, setExperience] = useState('');
    const [cv, setCv] = useState(null);
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState<{ message: string, color: string }>({ message: '', color: '' });


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage({ message: '', color: '' });

        if (!firstName || !lastName || !email || !phone || !message || !designation || !experience || !cv) {
            setStatusMessage({ message: 'Please fill in all required fields', color: '#FAE7C7' });
            setTimeout(() => setStatusMessage({ message: '', color: '' }), 2000);
            setLoading(false);
            return;
        }

        try {
            const formData = new FormData();
            formData.append('fname', firstName);
            formData.append('lname', lastName);
            formData.append('phone', phone);
            formData.append('email', email);
            formData.append('message', message);
            formData.append('designation', designation);
            formData.append('experience', experience);
            formData.append('cv', cv);

            const response = await fetch('https://backend.wisbato.com/api/resume', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setStatusMessage({ message: 'Submitted Successfully', color: '#B6F8C4' });
                setTimeout(() => setStatusMessage({ message: '', color: '' }), 2000);

                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setDesignation('');
                setExperience('');
                setCv(null);
            } else {
                setStatusMessage({ message: 'Failed to submit form', color: '#FFB7B7' });
                setTimeout(() => setStatusMessage({ message: '', color: '' }), 2000);
            }
        } catch (error) {
            setStatusMessage({ message: 'An error occurred', color: '#FFB7B7' });
            setTimeout(() => setStatusMessage({ message: '', color: '' }), 2000);
        } finally {
            setLoading(false);
        }
    };

    return {
        firstName, setFirstName, lastName, setLastName, email, setEmail, phone, setPhone, message, setMessage,
        designation, setDesignation, experience, setExperience, cv, setCv, handleSubmit, loading, statusMessage,
    };
};