import { useEffect, useState } from 'react';
import './App.css';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: 'AGHWN NI DUBLI',
      artist: 'Sulekha Basumatary',
      img_src: './images/1.jpg',
      src: './music/AGHWN NI DUBLI II OFFICIAL VIDEO II FEAT. RIYA BRAHMA  RAJIB II RB FILM PRODUCTIONS.mp3'
    },
    {
      title: 'Ang dinwi fagla',
      artist: 'Gautom Brahma and Sulekha Basumatary',
      img_src: './images/2.jpg',
      src: './music/Ang Dinwi Fagwla.mp3'
    },
    {
      title: 'Ajwli hai Bwisw Angni',
      artist: 'Sulekha Basumatary',
      img_src: './images/3.jpg',
      src: './music/Ajwli hai Bwisw Angni.mp3'
    },
    {
      title: 'Ajwli Dao mwina',
      artist: 'Asha Boro',
      img_src: './images/4.jpg',
      src: './music/AjwliDaoMwina2019Asha Boro.mp3'
    },
    {
      title: 'ANGNI SELFIE',
      artist: 'Anaya Brahma',
      img_src: './images/5.jpg',
      src: './music/ANGNI SELFIE  BODO SONG ANAYA BRAHMAS NEW   2017 HOT VIDEO SONG.mp3'
    },
    {
      title: 'Angni Simang',
      artist: 'Gracy Brahma',
      img_src: './images/6.jpg',
      src: './music/Angni Simang - Gracy Brahma [ Official bodo music video ] (192  kbps).mp3'
    },
    {
      title: 'Ang Ajwli Hainari',
      artist: 'Heema Basumatary',
      img_src: './images/1.jpg',
      src: './music/Ang Ajwli Hainari (Bodosong.In).mp3'
    },

  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    })
  }, [currentSongIndex, songs.length])
  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
