import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './app/globals.css';
import SplashScreen from './components/SplashScreen/SplashScreen';
import ChatIcon from './components/ChatIcon/ChatIcon';
import { StatusContext } from './Hooks/StatusContext';
import { useContext } from 'react';
import Page404 from './components/Page404/Page404';

// Lazy load components
const HomePage = React.lazy(() => import('./app/page'));
const Works = React.lazy(() => import('./app/works/page'));
const Services = React.lazy(() => import('./app/services/page'));
const ServiceDetailed = React.lazy(() => import('./app/services/[serviceId]/page'));
const Blogs = React.lazy(() => import('./app/blogs/page'));
const BlogDetailed = React.lazy(() => import('./app/blogs/[blogId]/page'));
const About = React.lazy(() => import('./app/about/page'));
const Careers = React.lazy(() => import('./app/careers/page'));
const CareersRequirement = React.lazy(() => import('./app/careers/[careersId]/page'));
const Contact = React.lazy(() => import('./app/contact/page'));
const WorkDetailed = React.lazy(() => import('./app/works/[workId]/page'));
import TagManager from 'react-gtm-module';
import Team from './app/team/page';

function App() {
  const showSplash = sessionStorage.getItem('isNotFirstTime');

  const { notify } = useContext(StatusContext);

  const tagManagerArgs = {
    gtmId: 'G-CMM0518P02',
  }

  TagManager.initialize(tagManagerArgs);

  return (
    <div className='app'>
      {notify && <div style={{ position: "fixed", left: "50%", bottom: "80px", transform: "translate(-50%, 0)", zIndex: 9999, backgroundColor: notify.color, borderRadius: "12px", padding: "10px 16px", textTransform: "capitalize" }} ><p>{notify.message}</p></div>}

      {!showSplash && <SplashScreen />}

      <ChatIcon />

      <Suspense fallback={<div style={{ height: "100dvh", width: "100dvw" }} />}>
        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route path='/works' element={<Works />} />
          <Route path='/works/:title' element={<WorkDetailed />} />

          <Route path='/services' element={<Services />} />
          <Route path='/services/:title' element={<ServiceDetailed />} />

          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:title' element={<BlogDetailed />} />

          <Route path='/about' element={<About />} />

          <Route path='/team' element={<Team />} />

          <Route path='/careers' element={<Careers />} />
          <Route path='/careers/:title' element={<CareersRequirement />} />

          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;


// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import HomePage from './app/page'
// import Works from './app/works/page'
// import Services from './app/services/page'
// import ServiceDetailed from './app/services/[serviceId]/page'
// import Blogs from './app/blogs/page'
// import BlogDetailed from './app/blogs/[blogId]/page'
// import About from './app/about/page'
// import Careers from './app/careers/page'
// import CareersRequirement from './app/careers/[careersId]/page'
// import Contact from './app/contact/page'
// import SplashScreen from './components/SplashScreen/SplashScreen'
// import ChatIcon from './components/ChatIcon/ChatIcon'
// import WorkDetailed from './app/works/[workId]/page'
// import { StatusContext } from './Hooks/StatusContext'
// import { useContext } from 'react'
// import Page404 from './components/Page404/Page404'

// function App() {
//   const showSplash = sessionStorage.getItem('isNotFirstTime');

//   const { notify } = useContext(StatusContext);

//   return (
//     <div className='app'>
//       {notify && <div style={{ position: "fixed", left: "50%", bottom: "80px", transform: "translate(-50%, 0)", zIndex: "9999", backgroundColor: notify.color, borderRadius: "12px", padding: "10px 16px", textTransform: "capitalize" }} ><p>{notify.message}</p></div>}
//       {!showSplash && <SplashScreen />}

//       <ChatIcon />

//       <Routes>
//         <Route path='/' element={<HomePage />} />

//         <Route path='/works' element={<Works />} />
//         <Route path='/works/:title' element={<WorkDetailed />} />

//         <Route path='/services' element={<Services />} />
//         <Route path='/services/:title' element={<ServiceDetailed />} />

//         <Route path='/blogs' element={<Blogs />} />
//         <Route path='/blogs/:title' element={<BlogDetailed />} />

//         <Route path='/about' element={<About />} />

//         <Route path='/careers' element={<Careers />} />
//         <Route path='/careers/:title' element={<CareersRequirement />} />

//         <Route path='/contact' element={<Contact />} />
//         <Route path='*' element={<Page404 />} />
//       </Routes>
//     </div>
//   )
// }

// export default App
