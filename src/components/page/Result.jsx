// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import '../style/Result.css';
import '../style/Home.css';

const Result = ({ totalScore }) => {
    // const [congratulation, setCongratulation] = useState("");
    let congratulation = "";
    let scoreImage = "";

    if (totalScore === 100) {
        congratulation = "Parfait ! Tu es beaucoup trop chaud !"
        scoreImage = "/assets/100plus.gif"
    } else if (totalScore > 59) {
        congratulation = "Tu es balèze de ouf ! Bravo !"
        scoreImage = "/assets/60plus.gif"  
    } else if (totalScore > 39) {
        congratulation = "Plutôt pas mal ! Bien joué !"
        scoreImage = "/assets/40plus.gif"    
    } else if (totalScore > 19) {
        congratulation = "C'est pas terrible... Tu feras mieux la prochaine fois !"
        scoreImage = "/assets/20plus.gif" 
    } else {
        congratulation = "Nul ! Nul ! Nul ! Tu es obligé de rejouer pour laver cet échec !" 
        scoreImage = "/assets/0plus.gif"    
    };

    return (
        <div>
            <Header />
            <div className="container">
            <h1>Ton score est de {totalScore} !</h1>
            <h2>{congratulation}</h2>
            <div><img className='gif' src={scoreImage} alt='scoreImage' /></div>
            <NavLink exact to='/'><button className="play" type="button" >Rejouer</button></NavLink>
            </div>
            <Footer />
        </div>
    );
}

export default Result;