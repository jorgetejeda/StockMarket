import React from 'react'
import './Title.css'

const Title = ({symbol, priceToday, regularMarketPrice}) => {
  return (
    <div className="Title">
      <h1>{symbol}</h1>
      <h2>${regularMarketPrice}</h2>
      <div className="change">
        <span> {priceToday} <span className='timing'>Today</span> </span>
      </div>
    </div>
  )
}

export default Title