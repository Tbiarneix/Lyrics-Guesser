import { useState } from 'react';
import '../style/Game.css';
import Timer from '../Timer';

const Game = () => {
    const [numberTrackPlay, setNumberTrackPlay] = useState(1);
    const [isStart, setIsStart] = useState(false);

    return (
        <div>
            <h1>Chanson n°{numberTrackPlay}</h1>
            {isStart ? <Timer /> : <h4>30 secondes</h4>}
            <button type="button" onClick={()=>{
                // setTimeout(setNumberTrackPlay(numberTrackPlay+1) , 5000);
                setIsStart(true)}} >Play</button>
            {numberTrackPlay<10?<button type="button" onClick={()=>{
                setNumberTrackPlay(numberTrackPlay+1);
                setIsStart(false);
            }} >Morceau suivant</button>
            :<button type="button">Résultats</button>}

        </div>
    );
}

export default Game;