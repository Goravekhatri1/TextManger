// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

// import About from './component/About';
import React, { useState } from 'react'
import Alert from './component/Alert';


function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);

  }
  const Togglemode = () => {
    if (mode === 'dark') {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showalert("Light mode enabled", "success")
    }
    else {
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showalert("Darks mode enabled", "success")
    }


  }
  return (
    <>
    {/* <Navbar/> */}
      <Navbar title="GK-Textutils" mode={mode} Togglemode={Togglemode} AboutText="About Us" />
      <Alert alert={alert} />


      <div className="container my-3">
        <TextForm text="Enter Your Text Below" mode={mode} showalert={showalert} heading="Welcome To GK-TextUtils" />

      </div>
    </>
  );
}

export default App;
