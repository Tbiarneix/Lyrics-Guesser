import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/page/Home';
import Game from './components/page/Game';
import Result from './components/page/Result';
import Tracks from './components/data/Tracks';
import './App.css';

function App() {
  const [roundScore, setRoundScore] = useState(0);
  const handleRoundScore = (roundScore) => {
    setRoundScore(roundScore);
  }
  
  const [totalScore, setTotalScore] = useState(0);
  const handleTotalScore = () => {
    setTotalScore(totalScore + roundScore);
  }
  useEffect(() => {
    handleTotalScore()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/game' element={<Game totalScore={totalScore} handleTotalScore={handleTotalScore} roundScore={roundScore} handleRoundScore={handleRoundScore}/>} />
          <Route path='/result' element={<Result totalScore={totalScore} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
