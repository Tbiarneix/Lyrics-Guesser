import TestVocal from './components/TestVocal';
import Home from './components/page/Home';
import Game from './components/page/Game';
import Result from './components/page/Result';
import Footer from './components/Footer';


import './App.css';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Game />
      </header>
    </div>
  );
}

export default App;
