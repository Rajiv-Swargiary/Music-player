import React, { useEffect, useRef, useState } from 'react'
import PlayerController from './PlayerController'
import PlayerDetails from './PlayerDetails'

const Player = (props) => {

    const audioElement = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioElement.current.play();
        } else {
            audioElement.current.pause();
        }
    })

    const skipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0
                }
                return temp;
            })
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1
                }
                return temp;
            })
        }
    }
    return (
        <div className='c-player'>
            <audio src={props.songs[props.currentSongIndex].src} ref={audioElement}></audio>
            <h4>Playing Now</h4>
            {/* details */}
            <PlayerDetails song={props.songs[props.currentSongIndex]} />
            <PlayerController
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                skipSong={skipSong}
            />
            <p><strong>Next up : </strong>{props.songs[props.currentSongIndex].title} by {props.songs[props.currentSongIndex].artist}</p>
        </div>
    )
}

export default Player
