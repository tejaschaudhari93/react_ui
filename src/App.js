import logo from './logo.svg';
import './App.css';
import Login from './demo.jsx';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';
import Navbar from './navbar';
import Routes1 from './routes.jsx';
function App() {
  return (
    <div className="App">
      <header>
      <StyledEngineProvider injectFirst> 
    <Navbar />
    
    </StyledEngineProvider>
      <Routes1 />
      </header>
    </div>
  );
}

export default App;
