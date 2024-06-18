"use client"
import { useState } from "react"
import YouTube from "react-youtube"


export default function VideoPlayer({youtubeId}){
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlay = () => {
        setIsOpen((prevstate) => !prevstate)
    }
    const options = {
        height : '250',
        width : '300',
    }

    const Player = () => {
        return(
            <div className="fixed bottom-2 right-2">
                <button onClick={handleVideoPlay} className="float-right px-3 text-primary bg-secondary mb-1">x</button>
                <YouTube videoId={youtubeId} opts={options} onReady={(event)=>event.target.pauseVideo()} />
            </div>
        )
    }

    const ButtonOpenTrailer = () => {
        return <button className="fixed bottom-5 right-5 w-32 bg-primary text-dark text-xl rounded" onClick={handleVideoPlay}>Tonton Trailer</button>
    }

    return isOpen ? <Player/> : <ButtonOpenTrailer/>
}