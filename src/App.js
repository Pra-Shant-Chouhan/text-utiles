import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = '#13134b';

    }
    else {
      setMode('light')
      document.body.style.background = 'white';
      
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      
        <TextForm heading ="Enter The Text to Analyze" mode={mode} />
        {/* <About /> */}
    </>
  );
}

export default App;
