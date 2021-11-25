import { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/Game.css';
import '../style/Home.css';

const Game = () => {

    const [ tracks, setTracks ] = useState([]);
    const [ track, setTrack ] = useState(null);
    const [ lyrics, setLyrics ] = useState([]);
    const [ index, setIndex ] = useState(null);
  
    useEffect(() => {
      setIndex(Math.floor(Math.random() * (31 - 0) + 0));
    }, []);

  
    useEffect(() => {
      axios
        .get('https://magical-it-works.jsrover.wilders.dev/https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=128b7ceff7bed320824b72e696827c98&chart_name=top&page=1&page_size=30&country=fr&f_has_lyrics=1')
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
  
    console.log(lyrics);

    return (
        <div className="container">

            <h1>Chanson n°1</h1>

            <p>Timer</p>
            <button className="play" type="button">PLAY</button>
            <button className="play" type="button">STOP</button>

            <img src="/assets/music.png" alt="musique" width="300"/>

            <div className="button-input">
                <input></input>
                <input></input>

            </div>





        </div>
    );
}

export default Game;