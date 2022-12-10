import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login'
import { SignUp } from './components/SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>      
      </header>
    </div>
  );
}

export default App;
