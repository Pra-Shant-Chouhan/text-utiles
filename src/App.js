import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/Alert';


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
    setAlert(null)
    },2000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = '#13134b';
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtilis-Dark Mode"
      setInterval(() => {
      document.title = "TextUtilis is Amazing "
        
      }, 2000);
      setInterval(() => {
      document.title = "Instal TextUtils Now"
        
      }, 1500);

    }
    else {
      setMode('light')
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled", "success")

    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar/> */}
      <TextForm showAlert={showAlert} heading="Enter The Text to Analyze" mode={mode} />
      {/* <About /> */}
      <Alert alert={alert}/>
    </>
  );
}

export default App;
