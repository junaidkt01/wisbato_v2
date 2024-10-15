import React from 'react';
import { StatusProvider } from '../StatusContext';

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <StatusProvider>{children}</StatusProvider>;
};

export default ContextProvider;