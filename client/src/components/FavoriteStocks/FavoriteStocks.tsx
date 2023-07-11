import React from 'react';
import './FavoriteStocks.css';
import { EmptyBox } from '../Icons';
import { FavoriteProps } from '../../type/type';

type FavoriteStocksProps = {
  stocks: FavoriteProps[];
  search: (value: string) => void;
};
const FavoriteStocks: React.FC<FavoriteStocksProps> = ({ stocks, search }) => {
  return (
    <div className='FavoriteStocks'>
      <h3>Favorite Stocks</h3>
      {stocks.length === 0 && <EmptyBox />}
      {stocks.length > 0 &&
        stocks.map((item, index) => {
          return (
            <div
              key={index}
              className='stock'
              onClick={() => search(item.symbol)}
            >
              <small className='name'>{item.symbol}</small>
              <small className='price'>{item.priceToday}</small>
            </div>
          );
        })}
    </div>
  );
};

export default FavoriteStocks;
