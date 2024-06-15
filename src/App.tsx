import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/Dash.scss'
import './styles/Login.scss'
import Login from './page/Login';
import Dash from './page/Dash';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dash" element={<Dash />} />
      </Routes>
    </Router>

  )  
}

export default App;
