import React, { createContext, useState } from 'react';

interface StatusContextType {
    notify: { message: string; color: string };
    setNotify: (value: { message: string; color: string }) => void;
}

export const StatusContext = createContext<StatusContextType>({
    notify: { message: '', color: '' },
    setNotify: () => { },
});

export const StatusProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [notify, setNotifyState] = useState<{ message: string; color: string }>({ message: '', color: '' });

    const setNotify = (value: { message: string; color: string }) => {
        setNotifyState(value);
    };

    return (
        <StatusContext.Provider value={{ notify, setNotify }}>
            {children}
        </StatusContext.Provider>
    );
};

// import React, { createContext, useState } from 'react';

// interface StatusContextType {
//     notify: { message: string, color: string };
//     setNotify: (error: string) => void;
// }

// export const StatusContext = createContext<StatusContextType>({
//     notify: { message: '', color: '' },
//     setNotify: () => { },
// });

// export const StatusProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const [notify, setNotify] = useState<{ message: string, color: string }>({ message: '', color: '' });

//     return (
//         <StatusContext.Provider value={{ notify, setNotify }}>
//             {children}
//         </StatusContext.Provider>
//     );
// };