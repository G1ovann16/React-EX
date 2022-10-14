import logo from './logo.svg';
import './App.css';
import Contact from './components/containers/contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contact></Contact>
      </header>
    </div>
  );
}

export default App;
