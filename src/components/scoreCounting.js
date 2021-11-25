const scoreCounting = (
  trackName,
  artistName,
  artistAnswerValue,
  songAnswerValue,
) => {
  //A importer de l'API
    const artist = trackName;
    const song = artistName ;
    const artistLower = artist.toLowerCase();
    const songLower = song.toLowerCase();
  // A récupérer de l'input de l'utilisareur
    const artistAnswer = artistAnswerValue;
    const songAnswer = songAnswerValue;
    const artistAnswerLower = artistAnswer.toLowerCase();
    const songAnswerLower = songAnswer.toLowerCase();
  //Score du tour
    let score = 0;
  // Score du tour pour comparer la validité de la réponse
    let artistScore = 0;
    let songScore = 0;
  // Comparer la réponse de l'utilisateur avec celle de la réponse attendue
    for (let i = 0; i < artistAnswerLower.length; i++) {
      if (artistLower.includes(artistAnswerLower[i]) === true) {
        artistScore += 1;
      }
    }
    for (let i = 0; i < songAnswerLower.length; i++) {
      if (songLower.includes(songAnswerLower[i]) === true) {
        songScore += 1;
      }
    }
  // Calcul du score du tour
    if (artistScore === artist.length) {
      score += 5;
    } else if (artistScore >= artist.length * 0.8) {
      score += 3;
    } else {
      score = score;
    }
    if (songScore === song.length) {
      score += 5;
    } else if (songScore >= song.length * 0.8) {
      score += 3;
    } else {
      score = score;
    }
};

export default scoreCounting;
