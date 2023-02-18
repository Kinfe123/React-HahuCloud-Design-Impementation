import React from 'react'
import './Good.css'
import price from '../assets/donate.png'
function Good() {
  return (
    <div className='goods'>
        <p>Good reasons to switch to <span className='hahu'>HahuCloud!</span></p>

        <div className='good-features'>
            {[1 , 2 , 3, 4 , 5 , 6].map((x)=> {
                return (
                    <div className='each-goods'>
                        <img src={price}/>
                        <p className='saks'>Reasonable Price. High Quality</p>
                        <p className='were'>
                        We utilize top-of-the-range cloud technology, allowing us to keep costs down and provide 5-Star performance.

                        </p>




            </div>
                )
            })}

        </div>


    </div>
  )
}

export default Good