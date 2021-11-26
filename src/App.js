import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TestVocal from './components/TestVocal';
import Home from './components/page/Home';
import Game from './components/page/Game';
import Result from './components/page/Result';
import Footer from './components/Footer';

import Tracks from './components/data/Tracks';

import './App.css';
import Header from './components/Header';

function App() {

  const [index, setIndex] = useState(0);
  const [artist, setArtist] = useState(null);
  const [track, setTrack] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [song, setSong] = useState(null);
  // const [savedIndex, setSavedIndex ] = useState([]);

  const tracks = Tracks;

  const generateTrack = () => {

    setIndex(Math.floor(Math.random() * (3 - 0) + 0));
    // setIndex(index+1);

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
          <Route exact path='/' element={<Home generateTrack={generateTrack} song={song} index={index} />} />
          <Route path='/game' element={<Game generateTrack={generateTrack} song={song} index={index} />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
