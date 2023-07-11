import { EmptyBox } from '../Icons';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>Stock not found</h2>
      <p>
        The stock you are attempting to access either does not exist or is not
        available at the moment. Please verify the stock symbol or try again
      </p>
      <EmptyBox />
    </div>
  );
};

export default NotFound;
