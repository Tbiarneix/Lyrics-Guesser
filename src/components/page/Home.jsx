import "../style/Home.css";

const Home = () => {
  return (
    <div>
      <div className="container">
      <h1 className="title1">Comment jouer ? </h1>
      <p>
        Les paroles de 10 musiques vont être lues à haute voix. Vous avez 30
        secondes pour trouver le nom et l'artiste de chaque musique. Prêt à
        jouer ?
      </p>
      {/* bouton = link to 'Game.jsx' */}
      <button className="play" type="button">Jouer</button>
      
   
        <h2>Envoyer l'application à un ami</h2>
      </div>
    </div>
  );
};

export default Home;
