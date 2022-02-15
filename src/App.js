import logo from './logo.svg';
import './App.css';
import Navbar from './comps/navbar';
import Box from './comps/Box';
import React, { useState } from 'react';
import TextForm from './comps/TextForm';
import {
  BrowserRouter as Router,

  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  let toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      // setInterval(() => {
      //   document.title = "JD"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Jaydeep Degamadiya  "
      // }, 3000);
    }
    else {
      setmode('light')
    }
  }
  let warningBG = (cls) => {
    if (cls == 'warning') {
      document.body.classList.add('bg-' + cls);
      document.title = "Jd-readble"
    }


  }
  return (
    <>


      <Router>
        <Navbar title="JD" mode={mode} onClick={warningBG} toggleMode={toggleMode} />
        <Switch >
          <Route exact path="/">
            <TextForm head="TextBOX" />
          </Route>
          <Route exact path="/box">
            <Box />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
