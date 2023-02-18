import React from 'react'
import hahuCloud from '../assets/hahu-cloud.png'
import leftCloud from '../assets/left-cloud.png'
import underline from '../assets/underline.png'

function Navbar() {
  return (
    <div>   
        <div className='container'>
                <div className='bc'><img src={hahuCloud} alt='hahu-cloud' /><span className='renting'><img src="https://em-content.zobj.net/thumbs/320/toss-face/342/flag-ethiopia_1f1ea-1f1f9.png"  />  </span></div>
                <div className="links">
                <a href="#">WordPress</a>
                <a href="#">Web Hosting</a>
                <a href="#">VPS</a>
                <a href="#">DOMAIN</a>
                <div className='hahu-sms'>
                <div>

                    <a href="#">hahu.io</a>


                    </div>


                </div>
                    <a href="#">SMS</a>
                <div className='after-sms'>
                <a href="#">FAQ</a>
                <a href="#">ABOUT</a>
                <div className='login'>
                    <a href='#'>LOGIN</a>
                </div>

                </div>
                </div>


            </div>

            <div className='container-for-hero'>
                <div className='hero'>
                    <div className='titles'>
                        <h5 className='premium'>Ethiopian <span className='pr-word'>Premium </span>Web hosting provider</h5>
                    <h1 className='success'> <span className='headerbutcolor'>Success</span> starts  </h1> <br/>
                    <img src={underline} className='underlined-vector'/>
                    <h1 className='nextword'>with Domain.</h1>

                    </div>
                    <div className='para'>
                    <p>A catchy and inventive domain is the basis of success!</p>
                    <div className='inputs'>
                        <input placeholder='Search for domains' className='input-real'/>
                        <a href='#' >Search</a>
                    </div>
                    <div className='hot-domains'>
                        <p>.et</p>
                        <p>.org</p>
                        <p>.com</p>
                        <p>.net</p>
                        

                    </div>
                    <p className='starting'>Starting from $24/<b>year</b></p>
                    </div>
                    {/* <div className='btns'>
                    <a href='#'>Get started Now! </a>
                    </div> */}
                </div>
          <div className="images">
            <img src={leftCloud}  alt='cloud-img'/> 
            
          </div>

       </div>

        


    </div>
  )
}

export default Navbar