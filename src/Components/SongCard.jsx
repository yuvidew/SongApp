import React, { useState , useRef ,useEffect} from 'react'
import backword from  "./ImgFld/backward.png"
import forward from  "./ImgFld/forward.png"
import pause from  "./ImgFld/pause.png"
import play from  "./ImgFld/play.png"
import playList from "./ImgFld/playlist.png"

const SongCard = (prop) => {
    const [Index , setIndex] = useState(0)
    const [playPause , setPlayPause] = useState(play)
    const audioref = useRef(null)
    let theList = prop.songList

    // alert(prop.actionSong)

    useEffect(() =>{
        audioref.current.src = theList[Index].songName
    }, [Index])

    useEffect(() =>{
        audioref.current.src = theList[prop.actionSong].songName
        setIndex(prop.actionSong)
    }, [prop.actionSong])

    const playandpause = () =>{
        if(playPause === play){
            audioref.current.play()
            setPlayPause(pause)
        }else if(playPause !== play){
            audioref.current.pause()
            setPlayPause(play)
        }
    }

    const prevSlide = () => {
        const prevIndex = (Index - 1 + theList.length) % theList.length;
        audioref.current.play()
        setIndex(prevIndex);
    };

    const nextSlide = () => {
        const nextIndex = (Index + 1) % theList.length;
        audioref.current.play()
        setIndex(nextIndex);
    };


    return (
    <section>
        <article className='theArtical1 d-flex align-items-center justify-content-center '>
            <audio id="audio-player" ref={audioref} controls loop style={{display: "none"}}>
                <source src={theList[Index || 0].songName} type="audio/mpeg" />
            </audio>
            <img src={theList[Index].imgsrc} alt="" />
            <div className="theControBox d-flex align-items-center p-3">
                <div className="textBox">
                    <h1>{theList[Index].theSong}</h1>
                    <p>{theList[Index].singer}</p>
                </div>
                <div className="controlers d-flex align-content-center gap-3">
                    <button><img src={backword} alt="" onClick={() => prevSlide()} /></button>
                    <button><img src={playPause} alt="" onClick={() => playandpause()} /></button>
                    <button><img src={forward} alt="" onClick={() => nextSlide()} /></button>
                </div>
            </div>
        </article>
        <article className='theArtical2 p-3'>
            <h3>Play List <img src= {playList} alt="" /></h3>
            <ol>
                {theList.map((ele , index) =>(
                    <li key={index} className={index === Index ?  'theol d-flex align-items-center gap-4' : 'd-flex align-items-center gap-4'} onClick={() => setIndex(index)}>
                        <div className="index h-100 d-flex align-items-center">
                            0{index + 1}
                        </div>
                        <div className="textimg h-100 d-flex align-items-center gap-2">
                            <div className="imgBox h-100 d-flex align-items-center">
                                <img src={ele.imgsrc} alt="" />
                            </div>
                            <div className="textBox h-100 d-flex align-items-right justify-content-start flex-column">
                                <h3 className='mt-3'>{ele.theSong}</h3>
                                <p>{ele.singer}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </article>
    </section>
    )
}

export default SongCard

