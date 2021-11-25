import '../style/Game.css';
import '../style/Home.css';

const Game = () => {
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