import React, { useState } from 'react'
import {SongData , songinglist , songHindilist} from "./SongData"
import SongCard from './SongCard'
import Crausel from './Crausel'
import sound from "./ImgFld/sound.png"
import search from "./ImgFld/search.png"
import pause from  "./ImgFld/pause.png"


const Home = () => {
    const [active , setActive] = useState(0)
    const [action , setAction] = useState(0)
    let songDatalist = [songinglist, songHindilist]

    let btnData = [
        {text : "English"},
        {text : "New Hindi"},
        {text : "Old Hindi"},
    ]

    return (
        <div  className="row">
            <div className="col-lg-3 col-md-0">
                <div className="div d-flex align-content-center flex-column">
                    <SongCard songList = {songDatalist[active]} actionSong = {action}></SongCard>
                </div>
            </div>
            <div className="col-lg-9 col-md-12 thehome">
                <div className="theCint">
                <nav className=' mt-2 mb-4'>
                <div className="row">
                    <div className="col-6">
                        <div className="logo d-flex align-items-center ">
                            <img src={sound} alt=""/>
                            <h1>Music <span>App</span></h1>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="searchCont d-flex align-items-right justify-content-end">
                            <div className="searchBox d-lg-flex d-md-flex d-none align-items-center gap-3">
                                <span>
                                    <img src={search} alt=""/>
                                </span>
                                <input type="search" placeholder="Search here..."/>
                            </div>
                            <div className="searchBox d-lg-none d-md-none d-flex align-items-center gap-3">
                                <span>
                                    <img src={search} alt=""/>
                                </span>
                                <input type="search" placeholder="Search here..."/>
                            </div>
                        </div>
                    </div>
                </div>
                </nav>
                <Crausel/>
                <section>
                    <div className="buttonCont mt-3 d-flex align-items-center justify-content-start gap-2">
                        {btnData.map((ele , index) =>(
                            <button key={index} className={index === active ? "theBtn2" : "theBtn"} onClick={() => setActive(index)}>{ele.text}</button>
                        ))}
                    </div>
                </section>
                <section className='theSongBox mt-2 d-flex align-items-center gap-3'>
                    <div className="imgSlider h-100 d-flex align-items-center gap-3">
                        {songDatalist[active].map((ele ,index) =>(
                            <div className='ImgCard d-flex flex-column' key={index} onClick={() => setAction(index)}>
                                <div className="imgBox">
                                    <img src={ele.imgsrc} alt={ele.imgsrc} />
                                    <div className={index === action ? "playBtn d-flex align-items-center justify-content-center" : "d-none"}>
                                        <img src={pause} alt="" />
                                    </div>
                                </div>
                                <h3>{ele.theSong}</h3>
                                <p>{ele.singer}</p>
                            </div>
                        ))}
                    </div>
                </section>
                </div>
            </div>
        </div>
    )
}

export default Home