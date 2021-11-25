import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../style/Game.css';
import '../style/Home.css';
import Timer from '../Timer';

const Game = () => {

    const [ tracks, setTracks ] = useState([]);
    const [ track, setTrack ] = useState(null);
    const [ lyrics, setLyrics ] = useState([]);
    const [ index, setIndex ] = useState(null);
    const saveIndex = [];
  
    const [numberTrackPlay, setNumberTrackPlay] = useState(1);
    const [isStart, setIsStart] = useState(false);
  
    useEffect(() => {
      setIndex(Math.floor(Math.random() * (31 - 0) + 0));
      saveIndex.push(index);
    }, []);

    useEffect(() => {
      axios
        .get('https://magical-it-works.jsrover.wilders.dev/https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=128b7ceff7bed320824b72e696827c98&chart_name=top&page=1&page_size=30&country=fr&f_has_lyrics=1')
        .then((res) => res.data)
        .then((data) => data.message.body.track_list)
        .then((tracklist) => setTracks(tracklist))
        .catch((err) => console.log(err))
    }, []);
  
    useEffect(() => {
      if (tracks.length) {
        console.log(index);
        setTrack({
          title: tracks[index].track.track_name,
          id: tracks[index].track.track_id,
          artist: tracks[index].track.artist_name
        });
      }
    }, [tracks]);
  
    useEffect(() => {
      if (track) {
        axios
          .get(`https://magical-it-works.jsrover.wilders.dev/https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=128b7ceff7bed320824b72e696827c98&track_id=${track.id}`)
          .then((res) => res.data)
          .then((data) => data.message.body.lyrics)
          .then((lyricsArray) => setLyrics(lyricsArray.lyrics_body))}
    }
    , [track])
  
    return (
        <div className="container">

            <h1>Chanson n°{numberTrackPlay}</h1>
            {isStart ? <Timer /> : <h4>30 secondes</h4>}
            <img src="/assets/music.png" alt="musique" width="300"/>

            <div className="button-input">
            <button type="button" onClick={()=>{
                // setTimeout(setNumberTrackPlay(numberTrackPlay+1) , 5000);
                setIsStart(true)}} >Play</button>
            {numberTrackPlay<10?<button type="button" onClick={()=>{
                setNumberTrackPlay(numberTrackPlay+1);
                setIsStart(false);
            }} >Morceau suivant</button>
            :<NavLink exact to='/result'><button type="button">Résultats</button></NavLink>}
            </div>
        </div>
    );
}

export default Game;