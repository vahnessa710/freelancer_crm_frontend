import './App.css';
import Auth from './Pages/Auth';
import Dashboard from './Pages/Dashboard';
import {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {/* {isLoggedIn ? ( */}
        <Dashboard onLogout={() => setIsLoggedIn(false)}/>
      {/* ) : (
        <Auth onLogin={() => setIsLoggedIn(true)}/>
      )} */}
    </Router>
  );
}

export default App;
