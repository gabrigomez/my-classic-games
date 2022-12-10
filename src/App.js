import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login'
import { SignUp } from './components/SignUp';

function App() {
  return (
    <div className="App">
      <header>   
      </header>
      <body>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/' element={<Home />} />
        </Routes>   
      </body>
    </div>
  );
}

export default App;
