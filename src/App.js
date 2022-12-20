import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/Dashboard';
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
      <main>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/' element={<Home />} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>   
      </main>
      <footer>        
        <Footer />
      </footer>
    </div>
  );
}

export default App;
