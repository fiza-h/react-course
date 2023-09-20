import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const [color, setcolor] = useState("grey")

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='light') {
      setmode("dark");
      document.body.style.backgroundColor = color;
      showAlert(`${color} mode has been enabled`, "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  const handleColorChange = (newColor) => {
    setcolor(newColor);
  };

  return (
    <>
      {/* <Router>
        <Navbar title= "BestTextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} color={color} onColorChange={handleColorChange}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below: " mode={mode} />}/>
          </Routes>
        </div>
      </Router> */}
      <Navbar title= "BestTextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} color={color} onColorChange={handleColorChange}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below: " mode={mode} />
      </div>
    </>
  );
}

export default App;
