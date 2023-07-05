import React from 'react'
import './SegmentedButton.css'

const SegmentedButton = ({ range = [], activeRange, setTimestamps }) => {
  return (
    <div className="segmented-button">
      <div className="container">

        {range.map((item, index) => {
          return (
            <div
              key={index}
              className={`button ${activeRange === item ? 'active' : ''}`}
              onClick={()=>setTimestamps(item)}
              >
              {item.toUpperCase()}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SegmentedButton