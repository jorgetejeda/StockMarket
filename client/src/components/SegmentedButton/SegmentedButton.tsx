import React from 'react';
import './SegmentedButton.css';

type SegmentedButtonProps = {
  range?: string[];
  activeRange: string;
  setTimestamps: (value: string) => void;
};

const SegmentedButton: React.FC<SegmentedButtonProps> = ({
  range = [],
  activeRange,
  setTimestamps,
}) => {
  console.log('range', range, typeof range);

  return (
    <div className='segmented-button'>
      <div className='container'>
        {range.map((item, index) => {
          return (
            <div
              key={index}
              className={`button ${activeRange === item ? 'active' : ''}`}
              onClick={() => setTimestamps(item)}
            >
              {item.toUpperCase()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SegmentedButton;
