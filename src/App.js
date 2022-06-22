import './App.css';
import Home from './components/pages/Home';
import Car from './components/pages/Car';
import { 
  BrowserRouter as Router,
  Routes,
  Route
  } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/cars"
          element={<Home />}
        />

        <Route
          path="/cars/:id"
          element={<Car />}
        />
      </Routes>
    </Router>
  );
}

export default App;
