import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Login } from './components/Login'
import { NavBar } from './components/NavBar';
import { SignUp } from './components/SignUp';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />   
      </header>
      <body>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/' element={<Home />} />
        </Routes>   
      </body>
      <footer>        
        <Footer />
      </footer>
    </div>
  );
}

export default App;
