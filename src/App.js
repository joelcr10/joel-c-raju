
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./Navbar";
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Home/>
        {/* <div className="content">
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
        </div> */}
      </div>
    </Router>
  );
}

export default App;
