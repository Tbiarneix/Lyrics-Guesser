import { useEffect, useState } from 'react';
import axios from 'axios';

const Songs = () => {

    const [ test, setTest ] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=128b7ceff7bed320824b72e696827c98&chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1')
            .then((data) => setTest(data))
            .catch((err) => console.log(err))
    }, []);

    console.log(test);

}

export default Songs;
