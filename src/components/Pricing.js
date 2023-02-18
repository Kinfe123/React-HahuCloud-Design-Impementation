import React from 'react'
import './Pricing.css'
import icon from '../assets/icon.png'
function Pricing() {
  return (
    <div className='pricing'>
        <div className='pricing-real'>
            <h5 className='plans'>PLANS & PRICING</h5>

            <h3 className='make-simple'>Pricing made simple</h3>
            <div className='button-container'>
                <button className='active'>YEARLY</button>
                <span className='space'></span>
                <button>MONTHLY</button>
            </div>

        </div>

      <div className='real-pricing'>
          
          {[1 , 2, 3 , 4].map((each)=> {
              return (
                <div className='pricing-features'>
                <div className='descriptions'>
                    <p className='standard'> 🛵 Standard</p>
                    <p><span className='price'>3280 Birr</span> / year</p>
  
                  
  
                </div>
                <p className='developer-price'>Best For Developers</p>
                <div className='features'>
                    <div className='each'> <img src={icon}/> <p> <b>60GB</b> NVMe Storage</p> </div>
                    <div className='each'> <img src={icon}/> <p> <b>60GB</b> NVMe Storage</p> </div>
                    <div className='each'> <img src={icon}/> <p> <b>60GB</b> NVMe Storage</p> </div>
                    <div className='each'> <img src={icon}/> <p> <b>60GB</b> NVMe Storage</p> </div>
                    <div className='each'> <img src={icon}/> <p> <b>60GB</b> NVMe Storage</p> </div>
                    <div className='each'> <img src={icon}/> <p> <b>60GB</b> NVMe Storage</p> </div>
                    <div className='each'> <img src={icon}/> <p> <b>60GB</b> NVMe Storage</p> </div>
                    <div className='each'> <img src={icon}/> <p> <b>60GB</b> NVMe Storage</p> </div>
                    <div className='each'> <img src={icon}/> <p> <b>60GB</b> NVMe Storage</p> </div>
                    <div className='each'> <img src={icon}/> <p> <b>60GB</b> NVMe Storage</p> </div>
  
  
                </div>
                <div className='wrapper'>
  
                <div className='buy-now'>
                    <p>BUY NOW</p>
  
                </div>
                </div>
  
  
  
  
  
  
            </div>
              )
          })}
          {/* <div className='pricing-features'>

hashasa




</div>
<div className='pricing-features'>

hashasa




</div>
<div className='pricing-features'>

hashasa




</div> */}

      </div>


    </div>
  )
}

export default Pricing