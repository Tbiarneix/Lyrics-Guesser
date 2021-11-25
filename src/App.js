import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/page/Home';
import Game from './components/page/Game';
import Result from './components/page/Result';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Home/>
        <Game/>
        <Result score={5} />
        <Footer/>
      </header>
    </div>
  );
}

export default App;
