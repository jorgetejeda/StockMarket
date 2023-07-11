import React from 'react'
import { Favorite as FavoriteIcon, FavoriteFill} from '../Icons'
import './Favorite.css'

type FavoriteProps = {
  handleFavorite: () => void;
  isFavorite: boolean;
}

const Favorite: React.FC<FavoriteProps> = ({ handleFavorite, isFavorite }) => {
  return (
    <div className="Favorite" onClick={() => handleFavorite()}>
      {!isFavorite ? <FavoriteIcon /> : <FavoriteFill/>}
    </div>
  )
}

export default Favorite