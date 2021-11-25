// import { useState } from 'react';
import '../style/Result.css';

const Result = ({ score }) => {
    // const [congratulation, setCongratulation] = useState("");
    let congratulation = "";

    if (score == 10) {
        congratulation = "Parfait ! Tu es beaucoup trop chaud !"   
    } else if (score > 6) {
        congratulation = "Tu es balèze de ouf ! Bravo !"     
    } else if (score > 4) {
        congratulation = "Plutôt pas mal ! Bien joué !"    
    } else if (score > 2) {
        congratulation = "C'est pas terrible... Tu feras mieux la prochaine fois !"  
    } else {
        congratulation = "Nul ! Nul ! Nul ! Tu es obligé de rejouer pour laver cet échec !"     
    };

    return (
        <div>
            <h1>Vous avez répondu correctement à {score}/10 questions !</h1>
            <h2>{congratulation}</h2>
            {/* bouton = link to 'Game.jsx' */}
            <button type="button">Rejouer</button>
        </div>
    );
}

export default Result;