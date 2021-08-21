import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


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
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = '#13134b';
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtilis-Dark Mode"

      // setIntervel for Installing app"

      // setInterval(() => {
      // document.title = "TextUtilis is Amazing "

      // }, 2000);
      // setInterval(() => {
      // document.title = "Instal TextUtils Now"

      // }, 1500);

    }
    else {
      setMode('light')
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled", "success")

    }
  }
  return (
    <>
      <Router>

      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar/> */}
        <Switch>
          {/* /user --> Component 1     */}
          {/* /user/home --> Component 2 // to remove that bevaiyer of path we use exact path instant of path */}
        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter The Text to Analyze" mode={mode} />
        </Route>
      </Switch>
      
      <Alert alert={alert} />
      </Router>
    </>
  );
}

export default App;
