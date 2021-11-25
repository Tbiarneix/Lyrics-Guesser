import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/page/Home';
import Game from './components/page/Game';
import Result from './components/page/Result';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Home />
        <Footer />
        <Game />
        <Result />
      </header>
    </div>
  );
}

export default App;
