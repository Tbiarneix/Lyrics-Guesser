import TestVocal from './components/TestVocal';
import Home from './components/page/Home';

import Result from './components/page/Result';
import Footer from './components/Footer';


import './App.css';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
     
        <Result />
      </header>
    </div>
  );
}

export default App;
