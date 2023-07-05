import React from 'react'
import './Favorite.css'

const Favorite = ({ handleFavorite, isFavorite }) => {
  return (
    <div className="Favorite" onClick={() => handleFavorite()}>
      {!isFavorite ?
        <svg viewBox="0 0 1024 1024" fill="#000000" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M802.4 967.2c-7.2 0-15.2-1.6-21.6-4.8l-258.4-128.8-252.8 140c-18.4 10.4-41.6 5.6-56-9.6-8.8-9.6-12.8-23.2-11.2-36.8l43.2-285.6L33.6 444C20.8 432 16 414.4 21.6 397.6c4.8-16.8 18.4-28.8 36-31.2l285.6-48L464.8 56c7.2-15.2 22.4-25.6 39.2-26.4 17.6-0.8 33.6 8.8 41.6 24l133.6 256.8 287.2 35.2c17.6 2.4 31.2 13.6 36.8 30.4 5.6 16 1.6 34.4-10.4 46.4L790.4 629.6l55.2 284c2.4 12.8-0.8 26.4-8.8 36.8-8.8 10.4-21.6 16.8-34.4 16.8zM520.8 784.8c7.2 0 15.2 1.6 21.6 4.8l255.2 127.2-54.4-280c-3.2-14.4 1.6-29.6 12-40l200-203.2L672 358.4c-14.4-1.6-28-11.2-34.4-24L506.4 81.6 385.6 340c-6.4 13.6-19.2 23.2-33.6 25.6L70.4 412l208 194.4c11.2 10.4 16 24.8 13.6 40L249.6 928l249.6-137.6c7.2-3.2 14.4-4.8 21.6-5.6z" fill=""></path></g></svg> : <svg fill="#4bc0c0" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m12.673 10.779.798 4.02c.221 1.11-.407 1.566-1.395 1.013L8.5 13.81l-3.576 2.002c-.988.553-1.616.097-1.395-1.013l.397-2.001.401-2.02-1.51-1.397-1.498-1.385c-.832-.769-.592-1.507.532-1.64l2.026-.24 2.044-.242 1.717-3.722c.474-1.028 1.25-1.028 1.724 0l1.717 3.722 2.044.242 2.026.24c1.124.133 1.364.871.533 1.64L14.184 9.38z"></path></g></svg>}
    </div>
  )
}

export default Favorite