import '../style/Home.css';

const Home = () => {
    return (
        <div>
            <h1>Règle du jeu</h1>
            <p>Les paroles de 10 musiques vont être lues à haute voix. Vous avez 30 secondes pour trouver le nom et l'artiste de chaque musique. Prêt à jouer ?</p>
            {/* bouton = link to 'Game.jsx' */}
            <button type="button">Jouer</button>
        </div>
    );
}

export default Home;