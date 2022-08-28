import './App.css';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Homepage from './Components/Homepage/Homepage'
import
{
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

function App()
{
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'><Homepage /></Route>
          <Route path='/Login'><Login /></Route>
          <Route path='/Register'></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
