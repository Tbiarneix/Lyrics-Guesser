import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "../style/Game.css";
import "../style/Home.css";
import Timer from "../Timer";
import scoreCounting from "../scoreCounting";

const Game = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [tracks, setTracks] = useState([]);
  const [track, setTrack] = useState(null);
  const [lyrics, setLyrics] = useState([]);
  const [index, setIndex] = useState(null);
  const [trackName, setTrackName] = useState(null);
  const [trackID, setTrackID] = useState(null);
  const [artistName, setArtistName] = useState(null);
  const rs = global.responsiveVoice;
  const saveIndex = [];
  const [numberTrackPlay, setNumberTrackPlay] = useState(1);
  const [isStart, setIsStart] = useState(false);
  const [artistAnswerValue, setArtistAnswerValue] = useState("");
  const handleArtistAnswer = (answer) => setArtistAnswerValue(answer.target.value);
  const [songAnswerValue, setSongAnswerValue] = useState("");
  const handleSongAnswer = (answer) => setSongAnswerValue(answer.target.value);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * (31 - 0) + 0));
    saveIndex.push(index);
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://magical-it-works.jsrover.wilders.dev/https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=128b7ceff7bed320824b72e696827c98&chart_name=top&page=1&page_size=30&country=fr&f_has_lyrics=1"
      )
      .then((res) => res.data)
      .then((data) => data.message.body.track_list)
      .then((tracklist) => setTracks(tracklist))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (tracks.length) {
      console.log(index);
      setTrack({
        title: tracks[index].track.track_name,
        id: tracks[index].track.track_id,
        artist: tracks[index].track.artist_name,
      });
    }
  }, [tracks]);

  useEffect(() => {
    if (track) {
      axios
        .get(
          `https://magical-it-works.jsrover.wilders.dev/https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=128b7ceff7bed320824b72e696827c98&track_id=${track.id}`
        )
        .then((res) => res.data)
        .then((data) => data.message.body.lyrics)
        .then((lyricsArray) => setLyrics(lyricsArray.lyrics_body));
    }
  }, [track]);

  return (
    <div className="container">
      <h1>Chanson n°{numberTrackPlay}</h1>
      <div className="flex">
        {isStart ? <Timer /> : <h4>30 secondes</h4>}
        <button
          className="play-game"
          type="button"
          onClick={() => {
            rs.speak(lyrics, "UK English Male", { rate: 0.9 });
            setIsStart(true);
          }}
        >
          Play
        </button>
      </div>
      <div className="flex">
        <img src="/assets/music.png" alt="musique" width="300" />
        <div>
          <p>Artiste</p>
          <input
            className="play"
            value={artistAnswerValue}
            type="text"
            placeholder="Artist answer here..."
            onChange={handleArtistAnswer}>

          </input>
          <p>Titre</p>
          <input
            className="play"
            value={songAnswerValue}
            type="text"
            placeholder="Song answer here..."
            onChange={handleSongAnswer}>

          </input>
        </div>
      </div>
      <div>
        {numberTrackPlay < 10 ? (
          <button
            className="send"
            type="button"
            onClick={() => {
              setNumberTrackPlay(numberTrackPlay + 1);
              setIsStart(false);
              scoreCounting(trackName,
                artistName,
                artistAnswerValue,
                songAnswerValue,
                setTotalScore
                );
            }}
          >
            Envoyer
          </button>
        ) : (
          <NavLink exact to="/result">
            <button type="button">Résultats</button>
          </NavLink>
        )}
      </div>
      <div> Total score : {totalScore}</div>
    </div>
  );
};

export default Game;
