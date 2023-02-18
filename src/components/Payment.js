import './Payment.css'
import or from '../assets/Cooperative Bank of Oromia Logo (1).png'
import cbe from '../assets/Commercial Bank of Ethiopia Logo.png'
import chapa from '../assets/Layer 2.png'
import dashen from '../assets/Dashen Bank Logo 1.png'

import unknown from '../assets/Group.png'
import telebirr from '../assets/TeleBirr Logo 1.png'
const Payment = () => {
    return (
        <>
        <div className="platform-listens">

            <div className='payment-d'>
                <h5>Payment Made <span className='blues'>Easy.</span></h5>
                <p>We made it easy for you to make payments on HahuCloud. It's Simple and Fast! Buying Hosting and Domain has never been this easy in Ethiopia. Own Your dream domain in less than 3 Minutes!</p>
            </div>
            <div className="platforms">

                <img src={telebirr}/>
                <img src={or}/>
                <img src={chapa}/>
                <img src={dashen}/>
                <img src={cbe}/>
                <img src={unknown}/>
                

              
            </div>
        </div>
        
        </>
    )
}
export default Payment