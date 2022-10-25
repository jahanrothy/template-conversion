import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutComponent from './component/about/About.component';
import ContactComponent from './component/contact/Contact.component';
import HomeComponet from './component/home/Home.component';
import SamplePage from './component/samplePost/SamplePage.component';
import AppLayout from './layouts/AppLayout';
function App() { 
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomeComponet />} /> 
          <Route path="about" element={<AboutComponent />} />
          <Route path="contact" element={<ContactComponent />} />
          <Route path="*" element={<SamplePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
       
  );
}

export default App;
