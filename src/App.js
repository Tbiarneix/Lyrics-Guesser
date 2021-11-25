import TestVocal from './components/TestVocal';
import Home from './components/page/Home';
import Game from './components/page/Game';
import Result from './components/page/Result';


import './App.css';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
       {/* <Home /> */}
        <Game />
  
    

      </header>
    </div>
  );
}

export default App;
