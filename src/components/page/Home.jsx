import { NavLink } from 'react-router-dom';
import "../style/Home.css";

const Home = () => {
  return (
    <div>
      <div className="container">
      <h1 className="title1">Comment jouer ? </h1>
      <p>
        Les <b>paroles de 10 musiques</b> vont être lues à haute voix.<br/> <b>Vous avez 30
        secondes</b> pour trouver le nom et l'artiste de chaque musique. 
      </p>
      <div className="image">

      <img src="/assets/music.png" alt="music" width="150"/>
      </div>

      {/* bouton = link to 'Game.jsx' */}
      <h2>Prêt à jouer ?</h2>
      <NavLink exact to='/game'><button className="play" type="button">Jouer</button></ NavLink>
      
   
       
      </div>
    </div>
  );
};

export default Home;
