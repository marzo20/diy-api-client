import './App.css';
import Home from './components/pages/Home';
import Car from './components/pages/Car';
import History from './components/pages/History';
import Navbar from './components/Navbar';
import { 
  BrowserRouter as Router,
  Routes,
  Route
  } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/cars"
          element={<Home />}
        />

        <Route
          path="/cars/:id"
          element={<Car />}
        />
        <Route
          path="/history"
          element={<History />}
        />
      </Routes>
    </Router>
  );
}

export default App;
