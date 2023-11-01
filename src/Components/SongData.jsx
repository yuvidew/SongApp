import React from 'react'
import Closer from "./MusicFold/Closer.mp3"
import Prefect from "./MusicFold/Perfect.mp3"
import LoveGone from "./MusicFold/Love_is_gonw.mp3"
import LuisFonsi from "./MusicFold/Luis_Fonsi.mp3"
import seeYouAgain from "./MusicFold/seeYouAgain.mp3"
import ShapeofYou from "./MusicFold/Shape_of_You.mp3"
import ShounenKi from "./MusicFold/Shounen_Ki.mp3"
import TheNights from "./MusicFold/The_Nights.mp3"
import TheWeekend from "./MusicFold/The_Weekend_.mp3"

/**hindi Song */

import Img1 from './ykMusic/img1.mp3'
import Img2 from './ykMusic/img2.mp3'
import Img3 from './ykMusic/img3.mp3'
import Img4 from './ykMusic/img4.mp3'
import Img5 from './ykMusic/img5.mp3'
import Img6 from './ykMusic/img6.mp3'
import Img7 from './ykMusic/img7.mp3'
import Img8 from './ykMusic/img8.mp3'
import Img9 from './ykMusic/img9.mp3'




const  songinglist = [
    {
        imgsrc : "https://www.billboard.com/wp-content/uploads/media/Charlie-Puth-press-2017-cr-Catie-Laffoon-billboard-1548.jpg?w=942&h=623&crop=1",
        theSong : "See You Again", 
        songName : seeYouAgain, 
        singer : "Song by Wiz Khalifa"},
    {
        imgsrc : "https://i.scdn.co/image/ab67616d0000b2730ae4f4d42e4a09f3a29f64ad",
        theSong : "The Nights", 
        songName : TheNights, 
        singer : "Song by Avicii"},
    {
        imgsrc : "https://images.squarespace-cdn.com/content/v1/58ab2fce20099e7487a18b2a/1488317107594-HP2TZF26U5IPH49MTCG8/image-asset.jpeg",
        theSong : "Closer", 
        songName : Closer, 
        singer : "Song by The Chainsmokers"},
    {
        imgsrc : "https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png",
        theSong : "Shape of You", 
        songName : ShapeofYou , 
        singer : "Song by Ed Sheeran"},
    {
        imgsrc : "https://i.ytimg.com/vi/kPhpHvnnn0Q/hqdefault.jpg",
        theSong : "Perfect", 
        songName : Prefect, 
        singer : "Song by Ed Sheeran"},
    {
        imgsrc : "https://s1.dmcdn.net/v/T2PXa1Wp6EIit2Y7a/x720",
        theSong : "Shounenki", 
        songName : ShounenKi , 
        singer : "Song by Tetsuya Takeda"},
    {
        imgsrc : "https://i.ytimg.com/vi/jb-i_ARlumQ/maxresdefault.jpg"
    ,    theSong : "Love Is Gone", 
        songName : LoveGone , 
        singer : "Song by Dylan Mathew and SLANDER"},
    {
        imgsrc : "https://upload.wikimedia.org/wikipedia/en/c/c8/Luis_Fonsi_Feat._Daddy_Yankee_-_Despacito_%28Official_Single_Cover%29.png",
        theSong : "Despacito", 
        songName : LuisFonsi , 
        singer : "Song by Luis Fonsi"},
    {
        imgsrc : "https://cnnespanol.cnn.com/wp-content/uploads/2015/12/gettyimages-117317361.jpg?quality=100&strip=info&w=300&h=170&crop=1",
        theSong : "Coldplay hymn for the weekend", 
        songName : TheWeekend , 
        singer : "Song by the British rock band Coldplay"},
]


const  songHindilist = [
    {imgsrc : "https://hindilyricsbox.com/wp-content/uploads/2020/04/Dekha-Hazaro-Dafa-RUSTOM-Lyrics-In-Hindi-1.jpg", theSong : "Dekha Hazaro Dafa", songName : Img1 , singer : "Song by Arijit Singh and Palak Muchhal"},
    {imgsrc : "https://c.saavncdn.com/328/Pal-Pal-Dil-Ke-Paas-Hindi-2019-20200420150444-500x500.jpg", theSong : "Pal pal dil ke paas", songName : Img2, singer : "Song by Arijit singh"},
    {imgsrc : "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1687954113.webp", theSong : "Tum kya mile", songName : Img3, singer : "Song by Arijit singh"},
    
    {imgsrc : "https://www.punekarnews.in/wp-content/uploads/2018/07/1.-Utkarsh-Sharma-Ishitha-Chauhan-in-the-song-Tera-Fitoor-1024x1024.jpg", theSong : "Tera Fitoor", songName : Img4 , singer : "Song by Arijit singh"},
    {imgsrc : "https://static.toiimg.com/thumb/50547624.cms?width=400&height=300&resizemode=4&imgsize=156553", theSong : "Tera Chehra", songName : Img5, singer : "Song by Arijit Singh"},
    {imgsrc : "https://cdn.siasat.com/wp-content/uploads/2022/07/New-Project-63.jpg", theSong : "Kesariya", songName : Img6 , singer : "Song by Arijit Singh"},
    
    {imgsrc : "https://img.wynk.in/unsafe/320x180/top/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/00602455783424_20230523000419473/1684804830361/23UMGIM48395_T1_cvrart.jpg", theSong : "Zihaal e Miskin", songName : Img7 , singer : "Song by Javed-Mohsin, Shreya Ghoshal, and Vishal Mishra"},
    {imgsrc : "https://static.toiimg.com/thumb/msid-102719613,width-1280,resizemode-4/102719613.jpg", theSong : "Dil Jhoom", songName : Img8 , singer : "Song by Arijit Singh and Mithoon"},
    {imgsrc : "https://i0.wp.com/www.lyricspedia.co.in/wp-content/uploads/2023/08/Screenshot_20230815-142220-01.jpeg?resize=350%2C200&ssl=1", theSong : "Tu Aashiqui Hai Meri", songName : Img9 , singer : "Song by Kunaal Vermaa, Payal Dev, and Stebin Ben"},
]


const SongData = () => {
    return (
        <div></div>
    )
}

export {SongData , songinglist ,songHindilist}
