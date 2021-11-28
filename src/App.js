import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/page/Home';
import Game from './components/page/Game';
import Result from './components/page/Result';
import Tracks from './components/data/Tracks';
import './App.css';

function App() {

  // const index = useRef(0);
  const [index, setIndex] = useState(0);
  const [artist, setArtist] = useState(null);
  const [track, setTrack] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [song, setSong] = useState({});

  const tracks = Tracks;

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

  const generateTrack = () => {
    setIndex(Math.floor(Math.random() * (31 - 0) + 0));
    console.log(index);
    setArtist(tracks[index].singer);
    setTrack(tracks[index].track);
    setLyric(tracks[index].lyric);
  }

  useEffect(() => {
    generateTrack();

    setSong({
      singer: artist,
      track: track,
      lyric: lyric
    })

  }, [artist]);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path='/' element={<Home generateTrack={generateTrack} song={song} index={index}/>} />
          <Route path='/game' element={<Game generateTrack={generateTrack} song={song} index={index} totalScore={totalScore} handleTotalScore={handleTotalScore} roundScore={roundScore} handleRoundScore={handleRoundScore}/>} />
          <Route path='/result' element={<Result totalScore={totalScore} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
