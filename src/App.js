import { Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';

import TestVocal from './components/TestVocal';
import Home from './components/page/Home';
import Game from './components/page/Game';
import Result from './components/page/Result';
import Footer from './components/Footer';

import Lyrics from './components/data/Lyrics';


import './App.css';
import Header from './components/Header';

function App() {

  const artists = ['Beyoncé', 'Céline Dion', 'Ed Sheeran', 'Emile et Images', 'Daft Punk', 'Red Hot Chili Peppers'];
  const tracks = ['Irreplaceable', "Pour que tu m'aimes encore", 'Shape of you', 'Les démons de minuit', 'Harder, better, faster, stronger', "Can't stop"];
  const lyrics = Lyrics;

  const [index, setIndex] = useState(0);
  const [artist, setArtist] = useState(null);
  const [track, setTrack] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [song, setSong] = useState(null);

  const generateTrack = () => {
      setIndex(Math.floor(Math.random() * (6 - 0) + 0));
      setArtist(artists[index]);
      setTrack(tracks[index]);
      setLyric(lyrics[index]);
  }

  useEffect(() => {
    setSong({
      singer: artist,
      track: track,
      lyric: lyric
  })
  }, [artist]);

  return (
    <div className="App">
      <header className="App-header">
      <Header />
        <Routes>
          <Route exact path='/' element={<Home generateTrack={generateTrack} />} />
          <Route path='/game' element={<Game generateTrack={generateTrack} song={song} />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      <Footer />
      </header>
    </div>
  );
}

export default App;
