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
  
  const [totalScore, setTotalScore] = useState(0);


  // useEffect(() => {
  //   index.current = index.current + 1
  // }, [])


  const generateTrack = () => {
    // setIndex(Math.floor(Math.random() * (10 - 0) + 0));
    setIndex(Math.floor(Math.random() * (3 - 0) + 0));
    console.log(index);
    setArtist(tracks[index].singer);
    setTrack(tracks[index].track);
    setLyric(tracks[index].lyric);
  }

  const handleTotalScore = (roundScore) => {
    setTotalScore(roundScore)
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
          <Route path='/game' element={<Game generateTrack={generateTrack} song={song} index={index} totalScore={totalScore} handleTotalScore={handleTotalScore} />} />
          <Route path='/result' element={<Result totalScore={totalScore} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
