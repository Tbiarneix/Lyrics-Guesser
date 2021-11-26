const TestVocal = () => {
  const lyrics = "To the left, to the left. Everything you own in the box to the left";
  const rs = global.responsiveVoice;
  //const song = () => rs.speak(lyrics, "US English Male");

  return (
    <div>
      <button
        onClick={() => {
            rs.speak(lyrics, "UK English Male", {rate: 0.9})
        ;
        }}
        type="button"
        value="Play"
      >
        Play
      </button>
      <button onClick={() => rs.cancel(lyrics)} type="button" value="Stop">
        Stop
      </button>
    </div>
  );
};

export default TestVocal;


