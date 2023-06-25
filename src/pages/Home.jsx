/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import  ContentSide  from '../components/ContentSide'
import ImageSide from '../components/ImageSide'
import ImageDesktop from '../assets/illustration-sign-up-desktop-removebg-preview.png'
import ImageMobile from "../assets/illustration-sign-up-mobile.png"
import '../App.css'

function Home({email, setEmail}) {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    window.addEventListener("resize", handleResize);
    
    return () => {
        window.removeEventListener("resize", handleResize)
        }
    }, []);

  return (
    <div className='home-content'>
        <ContentSide email={email} setEmail={setEmail} />
        <ImageSide Image={width <= 380 ? ImageMobile : ImageDesktop} />
    </div>
  )
}

export default Home