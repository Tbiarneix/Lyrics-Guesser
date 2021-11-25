import { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/Game.css';
import '../style/Home.css';
import Timer from '../Timer';

const Game = () => {

    const [ tracks, setTracks ] = useState([]);
    const [ track, setTrack ] = useState(null);
    const [ lyrics, setLyrics ] = useState([]);
    const [ index, setIndex ] = useState(null);
    const rs = global.responsiveVoice;
    const song = "To the left, to the left. Everything you own in the box to the left";
  
    const [numberTrackPlay, setNumberTrackPlay] = useState(1);
    const [isStart, setIsStart] = useState(false);
  
    useEffect(() => {
      setIndex(Math.floor(Math.random() * (31 - 0) + 0));
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
  
    console.log(lyrics);

    return (
        <div className="container">

            <h1>Chanson n°{numberTrackPlay}</h1>
            <p className="paragraphe">Vous devez trouver l'artiste et le titre de 10 chanson<br/>
            Appuyez sur play pour lancer la chanson à chaque tour</p>
            <span className="timer">{isStart ? <Timer /> : <h4>30 s</h4>}</span>
            <div className="flex">
            <button className="play-game" type="button" onClick={()=>{
                rs.speak(song, "UK English Male", {rate: 0.9})
                setIsStart(true)
            }}>Play</button>
            </div>
            <hr className="ligne"></hr>
            <div className="flex">
                
            <img className="gif" src="/assets/voice-wave.gif" alt="musique" width="400"/>
            <div >
                <p>Artiste</p>
           <input className="input" value=""></input>
           <p>Titre</p>
           <input className="input" value=""></input>
           </div>
          
            </div>
            

            
            <div>
            {numberTrackPlay<10?<button className="send" type="button" onClick={()=>{
                setNumberTrackPlay(numberTrackPlay+1);
                setIsStart(false);
            }} >Envoyer</button>
            :<button type="button">Résultats</button>}
            </div>
        </div>
    );
}

export default Game;