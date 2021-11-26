const ScoreCounting = ({ artistName, trackName, artistAnswerValue, songAnswerValue, totalScore, handleTotalScore}) => {
  //Importe la valeur de l'API
    const artist = artistName;
    const song = trackName ;
    const artistLower = artist.toLowerCase();
    const songLower = song.toLowerCase();
  // Récupère l'input de l'utilisateur
    const artistAnswer = artistAnswerValue;
    const songAnswer = songAnswerValue;
    const artistAnswerLower = artistAnswer.toLowerCase();
    const songAnswerLower = songAnswer.toLowerCase();
  //Score du tour
    let roundScore = 0;
  // Score du tour pour comparer la validité de la réponse
    let artistRoundScore = 0;
    let songRoundScore = 0;
  // Comparer la réponse de l'utilisateur avec celle de la réponse attendue
    for (let i = 0; i < artistAnswerLower.length; i++) {
      if (artistLower.includes(artistAnswerLower[i]) === true) {
        artistRoundScore += 1;
      }
    }
    for (let i = 0; i < songAnswerLower.length; i++) {
      if (songLower.includes(songAnswerLower[i]) === true) {
        songRoundScore += 1;
      }
    }
  // Calcul du score du tour
    if (artistRoundScore === artist.length) {
      roundScore += 5;
    } else if (artistRoundScore >= artist.length * 0.8) {
      roundScore += 3;
    }
    if (songRoundScore === song.length) {
      roundScore += 5;
    } else if (songRoundScore >= song.length * 0.8) {
      roundScore += 3;
  };
  handleTotalScore(roundScore);
  roundScore = 0;
  artistRoundScore = 0;
  songRoundScore = 0;
  return (
    <div>
      <p>Total Score : {totalScore}</p>
    </div>
  );
};

export default ScoreCounting;
