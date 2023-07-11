import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Search from './components/Search/Search';
import Title from './components/Title/Title';
import LineChart from './components/LineChart/LineChart';
import SegmentedButton from './components/SegmentedButton/SegmentedButton';
import NotFound from './components/NotFound/NotFound';
import FavoriteStocks from './components/FavoriteStocks/FavoriteStocks';

import './App.css';
import { FavoriteProps } from './type/type';

type DataProps = {
  symbol: string;
  regularMarketPrice: number;
  priceToday: string;
  validRanges: string[];
  range: string;
  timestamps: number[];
  volumens: number[];
  empty: boolean;
};

const App: React.FC = () => {
  const [data, setData] = useState({} as DataProps);
  const [timestamps, setTimestamps] = useState('1mo');
  const [search, setSearch] = useState('PYPL');
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState<FavoriteProps[]>([]);

  const getStock = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:3000',
        {
          symbol: search,
          interval: timestamps === '1d' ? '30m' : '1d',
          range: timestamps,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.status === 404) {
        setNotFound(true);
        throw new Error(response.data.error);
      }

      setNotFound(false);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, [search, timestamps]);

  useEffect(() => {
    getStock();
  }, [timestamps, search, getStock]);

  return (
    <div className='App'>
      <Search loading={loading} setSearch={setSearch} />
      {notFound ? (
        <div className='stocks'>
          <NotFound />
          <FavoriteStocks stocks={favorite} search={setSearch} />
        </div>
      ) : (
        <>
          <div className='stocks'>
            <div className='chart-container'>
              <Title
                symbol={data.symbol}
                priceToday={data.priceToday}
                regularMarketPrice={data.regularMarketPrice}
                setFavorite={setFavorite}
                favorite={favorite}
                emptyData={data.empty}
              />
              <LineChart
                timestamps={data.timestamps}
                volumens={data.volumens}
              />
            </div>
            <div className='stocks-container'>
              <FavoriteStocks stocks={favorite} search={setSearch} />
            </div>
          </div>
          <SegmentedButton
            range={data.validRanges}
            activeRange={data.range}
            setTimestamps={setTimestamps}
          />
        </>
      )}
    </div>
  );
};

export default App;
