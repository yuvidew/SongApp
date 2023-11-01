import React from 'react'
import "./Style.css"

const Crausel = () => {
    return (
        <section className='theCreausel '>
            <img src={'https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} className=' w-100 h-100 object-fit-cover' alt="" />
            <div className="textBox w-100 h-100 d-flex align-items-center p-5">
                <h1 style={{color : "aliceblue"}}>Music is the divine way to tell beautiful, <br></br> poetic things to the heart.</h1>
            </div>
        </section>
    )
}

export default Crausel