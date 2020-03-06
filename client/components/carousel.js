import React from 'react'

export const Carousel = props => {
  return (
    <div>
      <img
        className="car1img"
        src="https://weekiwachee.com/wp-content/uploads/sites/16/2019/04/kayaking_58021358_1050x600.jpg"
      />
      <div className="centered">Experience a whole new class of adventure</div>
      <div className="header2">
        <img src="https://akns-images.eonline.com/eol_images/Entire_Site/201387/rs_1024x759-130907100915-1024.Beyonce-JayZ-Holiday-Boat.jl.090713.jpg" />
        <div className="header2txtbox">
          <p className="header2head">Live your wildest dreams</p>
          <p className="header2text">
            Take fantastical excursions to the wildest places, led by the
            biggest names worldwide.{' '}
          </p>
        </div>
      </div>
      <div className="adventuresbox">
        <div className="adventuresHead">Start your journey</div>
        <div className="adventuresList" />
      </div>
    </div>
  )
}
