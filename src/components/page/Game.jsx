import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import "../style/Game.css";
import "../style/Home.css";
import Timer from "../Timer";
import ScoreCounting from "../ScoreCounting";

const Game = ({
  generateTrack,
  song,
  index,
  totalScore,
  handleTotalScore,
  roundScore,
  handleRoundScore,
}) => {
  // const [tracks, setTracks] = useState([]);
  // const [track, setTrack] = useState(null);
  // const [lyrics, setLyrics] = useState([]);
  // const [index, setIndex] = useState(null);
  // const [trackName, setTrackName] = useState(null);
  // const [trackID, setTrackID] = useState(null);
  // const [artistName, setArtistName] = useState(null);

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

  let rs = global.responsiveVoice;

  const [numberTrackPlay, setNumberTrackPlay] = useState(1);
  const [isStart, setIsStart] = useState(false);
  const [timer, setTimer] = useState(30);
  const [artistAnswerValue, setArtistAnswerValue] = useState("");
  const handleArtistAnswer = (answer) =>
    setArtistAnswerValue(answer.target.value);
  const [songAnswerValue, setSongAnswerValue] = useState("");
  const handleSongAnswer = (answer) => setSongAnswerValue(answer.target.value);

  useEffect(() => {
    if (timer === 0) {
      rs.cancel(song.lyric);
      setNumberTrackPlay(numberTrackPlay + 1);
      setIsStart(false);
      generateTrack();
      setTimer(30);
      setSongAnswerValue("");
      setArtistAnswerValue("");
    }
  }, [timer]);

  return (
    <div>
      <div className="container">
        <h1>Chanson n°{numberTrackPlay}</h1>
        <p className="paragraphe">
          Vous devez trouver l'artiste et le titre de 10 chansons
          <br />
          <b>Appuyez sur play </b>pour lancer la chanson à chaque tour
        </p>
        <hr className="ligne"></hr>

        <div className="flex">
          <span className="timer">
            {isStart ? (
              <Timer timer={timer} setTimer={setTimer} />
            ) : (
              <h4>30 s</h4>
            )}
          </span>
          <button
            className="play-game"
            type="button"
            onClick={() => {
              rs.speak(song.lyric, "UK English Male", { rate: 0.9 });
              setIsStart(true);
            }}
          >
            Play
          </button>
          <button
            className="play-game"
            onClick={() => rs.cancel(song.lyric)}
            type="button"
            value="Stop"
          >
            Stop
          </button>
        </div>
        <div className="flex">
          <img
            className="gif"
            src="/assets/voice-wave.gif"
            alt="musique"
            width="400"
          />
          <div>
            <p>Artiste</p>
            <input
              className="input"
              value={artistAnswerValue}
              type="text"
              maxlength="50"
              placeholder="L'artiste ici.."
              onChange={handleArtistAnswer}
            ></input>
            <p>Titre</p>
            <input
              className="input"
              value={songAnswerValue}
              type="text"
              maxlength="50"
              placeholder="La chanson ici..."
              onChange={handleSongAnswer}
            ></input>
          </div>
        </div>
        <div>
          {numberTrackPlay < 10 ? (
            <button
              className="send"
              type="button"
              onClick={() => {
                handleTotalScore();
                rs.cancel(song.lyric);
                setNumberTrackPlay(numberTrackPlay + 1);
                setIsStart(false);
                generateTrack();
                setTimer(30);
                setSongAnswerValue("");
                setArtistAnswerValue("");
              }}
            >
              {" "}
              Envoyer{" "}
            </button>
          ) : (
            <NavLink exact to="/result">
              <button
                className="send"
                type="button"
                onClick={() => {
                  handleTotalScore();
                  rs.cancel(song.lyric);
                  setIsStart(false);
                  setTimer(30);
                  setSongAnswerValue("");
                  setArtistAnswerValue("");
                }}
              >
                {" "}
                Résultats{" "}
              </button>
            </NavLink>
          )}
        </div>
      </div>
      <ScoreCounting
        trackName={song.track}
        artistName={song.singer}
        artistAnswerValue={artistAnswerValue}
        songAnswerValue={songAnswerValue}
        totalScore={totalScore}
        handleTotalScore={handleTotalScore}
        roundScore={roundScore}
        handleRoundScore={handleRoundScore}
      />
      <Footer />
    </div>
  );
};

export default Game;
