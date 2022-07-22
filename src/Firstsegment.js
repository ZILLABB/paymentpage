import React, { useState } from 'react'
import ima from './images/illustration-hero.svg'
import './App.css'
import ims from './images/icon-music.svg'


let yearPlan = 'Annual Plan  $59.99/year'
let monthPlan = 'Montly Plan  $4.99/month'
const Firstsegment = () => {
    let [sub, setSub] = useState(true)
    const subChoice = () => {
        setSub(monthPlan);
    }
    return (
        <div>
            <div >
                
                <div className='order'>
                    <img  className='container' src={ima} />
                    <h1>Order Summary</h1>
                    <p>You can now listen to millions of songs,<br /> audiobooks, and podcasts on any device <br /> anywhere you like</p>
                    <div className='changes'>
                        <div className='annual'>
                            <img className='music' src={ims} />
                            <h4 className='annualPlan'>{sub?yearPlan:monthPlan}</h4>
                        </div>
                        <button className='changess' onClick={()=>setSub(!sub)}>change</button>
                    </div>
                    <div>
                        <button className='proceed'>Proceed to Payment </button>
                    </div>
                    <div className='cancelOrder'>
                        <a href="">cancel order</a>
                    </div>
                </div>
            </div>   

        </div>
    )
}

export default Firstsegment