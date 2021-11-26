import { NavLink } from 'react-router-dom';
import "../style/Home.css";
import Header from '../Header';

const Home = ({ generateTrack, song, index }) => {
  
  return (
    <div>
      <Header />
      <div className="container">
      <h1 className="title1">Comment jouer ? </h1>
      <p>
        <span className="num">- 1 -</span><br/>
        Les <b>paroles de 10 musiques</b> vont être lues à haute voix.<br/>
        <span className="num">- 2 -</span><br/>
         <b>Vous avez 30
        secondes</b> pour trouver le nom et l'artiste de chaque musique. <br/>
        <span className="num">- 3 -</span><br/>
        Une fois votre réponse envoyée, <b>vous ne pourrez pas revenir en arrière</b> :)
      </p>
      <div className="image">

      <img src="/assets/music.png" alt="music" width="150"/>
      </div>

      <h2>Prêt à jouer ?</h2>
      <NavLink exact to='/game'><button className="send" type="button" onClick= {generateTrack}>Jouer</button></ NavLink>
      
   
       
      </div>
    </div>
  );
};

export default Home;
