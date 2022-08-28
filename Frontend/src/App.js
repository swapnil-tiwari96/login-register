import './App.css';
import React, { useState } from 'react';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Homepage from './Components/Homepage/Homepage';
import ErrorPage from './Components/Error Page/ErrorPage';
import
{
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

function App()
{
  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={user && user._id ? <Homepage /> : <Login setLoginUser={setLoginUser} />}></Route>
          <Route path='/login' element={<Login setLoginUser={setLoginUser} />} ></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
