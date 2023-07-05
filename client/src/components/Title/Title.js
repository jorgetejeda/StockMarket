import React, { useEffect, useState } from 'react'
import Favorite from '../Favorite/Favorite'
import './Title.css'

const Title = ({ symbol, priceToday, regularMarketPrice, setFavorite, favorite, emptyData }) => {

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const exist = favorite.find(item => item.symbol === symbol);
    if (exist) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favorite, symbol, setIsFavorite]);

  const handleFavorite = () => {

    const exist = favorite.find(item => item.symbol === symbol);

    if (exist) {
      const newFavorite = favorite.filter(item => item.symbol !== symbol);
      setFavorite(newFavorite);
      return;
    }

    setFavorite([...favorite, {symbol, priceToday}]);
  }

  return (
    <div className="Title">
      <div className="header">
        <h1>{symbol}</h1>
        {!emptyData && <Favorite handleFavorite={handleFavorite} isFavorite={isFavorite}/>}
      </div>
      <h2>${regularMarketPrice}</h2>
      <div className="change">
        <span> {priceToday} <span className='timing'>Today</span> </span>
      </div>
    </div>
  )
}

export default Title