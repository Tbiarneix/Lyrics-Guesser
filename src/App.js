import { Routes, Route } from 'react-router-dom';
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
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/game' element={<Game />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      <Footer />
        {/* <Game />
        <Result /> */}
      </header>
    </div>
  );
}

export default App;
