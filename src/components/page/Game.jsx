import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import axios from 'axios';
import '../style/Game.css';
import '../style/Home.css';
import Timer from '../Timer';

const Game = ({ generateTrack, song }) => {

    // const [tracks, setTracks] = useState([]);
    // const [track, setTrack] = useState(null);
    // const [lyrics, setLyrics] = useState([]);
    // const [index, setIndex] = useState(null);

    // const [trackName, setTrackName] = useState(null);
    // const [trackID, setTrackID] = useState(null);
    // const [artistName, setArtistName] = useState(null);

    const rs = global.responsiveVoice;
    // const song = "To the left, to the left";

    const [numberTrackPlay, setNumberTrackPlay] = useState(1);
    const [isStart, setIsStart] = useState(false);

    
    console.log(song);
    // useEffect(() => {
    //     setIndex(Math.floor(Math.random() * (31 - 0) + 0));
    // }, []);


    // useEffect(() => {
    //     axios
    //         .get('https://magical-it-works.jsrover.wilders.dev/https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=128b7ceff7bed320824b72e696827c98&chart_name=top&page=1&page_size=30&country=fr&f_has_lyrics=1')
    //         .then((res) => res.data)
    //         .then((data) => data.message.body.track_list)
    //         .then((tracklist) => setTracks(tracklist))
    //         .catch((err) => console.log(err))
    // }, []);

    // useEffect(() => {
    //     if (tracks.length) {
    //         setTrackName(tracks[index].track.track_name);
    //         setTrackID(tracks[index].track.track_id);
    //         setArtistName(tracks[index].track.artist_name);

    //         setTrack({
    //             title: trackName,
    //             id: trackID,
    //             artist: artistName
    //         });
    //     }
    // }, [tracks]);

    // useEffect(() => {
    //     if (track) {
    //         axios
    //             .get(`https://magical-it-works.jsrover.wilders.dev/https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=128b7ceff7bed320824b72e696827c98&track_id=${track.id}`)
    //             .then((res) => res.data)
    //             .then((data) => data.message.body.lyrics)
    //             .then((lyricsArray) => setLyrics(lyricsArray.lyrics_body))
    //     }
    // }
    //     , [track])


    return (
        <div className="container">
            <h1>Chanson n°{numberTrackPlay}</h1>
            <div className="flex">{isStart ? <Timer /> : <h4>30 secondes</h4>}
                <button className="play-game" type="button" onClick={() => {
                    rs.speak(song.lyric, "UK English Male", { rate: 0.9 })
                    setIsStart(true)
                }}>Play</button>
            </div>
            <div className="flex">
                <img src="/assets/music.png" alt="musique" width="300" />
                <div >
                    <p>Artiste</p>
                    <input className="play" value=""></input>
                    <p>Titre</p>
                    <input className="play" value=""></input>
                </div>

            </div>
            <div>
                {numberTrackPlay < 10
                    ? <button
                        className="send"
                        type="button"
                        onClick={() => {
                            setNumberTrackPlay(numberTrackPlay + 1);
                            setIsStart(false);
                            generateTrack();
                        }}
                    > Envoyer </button>
                    : <NavLink exact to='/result'><button type="button"> Résultats </button></NavLink>
                }
            </div>
        </div>
    );
}

export default Game;