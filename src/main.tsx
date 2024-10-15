import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import HeaderSection from './components/Header/HeaderSection.tsx';
import FooterSection from './components/Footer/FooterSection.tsx';
import { HelmetProvider } from 'react-helmet-async';
import ContextProvider from './Hooks/ContextAPI/ContextProvider.tsx';
import { checkAndHandleVersion } from './utils/clearStorage/versionCheck.ts';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const initializeApp = async () => {
  await checkAndHandleVersion();

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <ContextProvider>
            <HeaderSection />
            <App />
            <FooterSection />
          </ContextProvider>
        </HelmetProvider>
      </BrowserRouter>
    </React.StrictMode >,
  )
}

initializeApp();
// serviceWorkerRegistration.register({});