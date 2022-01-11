import React from 'react'
import BannerBg from '../img/banner-bg.png'
import nextIcon from '../img/icon-next.svg'
import MockupImg from '../img/mockup-3.png'
import objectImg from '../img/object-1.svg'
import bannerLogo from '../img/affinity-logo-white.png'

const banner = () => {

    

    const loadBanner = window.addEventListener('load', () => {
        setInterval(() => {
            console.log('hey hey ')
        }, 3000)
    })


    return (
        <div className="main-container">
            <div className='banner-container' style={{
                background: `url("${BannerBg}")`,
                height: "800px",
                width: "1280px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
                }} onLoad={loadBanner}>
                <div className='left-aside'>
                    <h1>Available Now</h1>
                    <p>Investing in a few taps, Just register <br /> by login in to our website</p>
                    <button className='btn'>Register Now <img src={nextIcon} alt="next icon" /></button>
                </div>
                <div className='right-aside'>
                    <img src={MockupImg} alt="" className='main-mockup'/>
                    <img src={objectImg} alt="" className='img-object'/>
                </div>
                <div className='banner-logo'>Powered by: <img src={bannerLogo} /></div>
            </div>
        </div>
        
    )
}

export default banner
