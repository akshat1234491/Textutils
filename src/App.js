import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light")
  const [alert,setAlert] = useState(null)

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1000)
  }
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor="black"
      showAlert("Dark Mode has been enabled","success")
      document.title = "TEXTUTILS - DARKmode"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light Mode has been enabled","success")
      document.title = "TEXTUTILS - LIGHTnpmode"
    }
  }

  return (
    <>
    <Router>
     <Navbar title="TEXTUTILS" aboutText="About" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container">
     <Routes>
      <Route exact path="/about" element={<About mode={mode} />} />
      <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
     </Routes>
     </div>
     </Router>
    </>
  );
}

export default App;
