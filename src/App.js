import './App.css';
import Auth from './Pages/Auth';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Auth />
      )}
    </Router>
  );
}

export default App;
