import React, { useState } from 'react'
import './Search.css'

const Search = ({
  setSearch,
  loading
}) => {
  const [value, setValue] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(value)
  }
  return (
    <form className="Search" onSubmit={handleSearch}>
      <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.05"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M5.5 11.1455C5.49956 8.21437 7.56975 5.69108 10.4445 5.11883C13.3193 4.54659 16.198 6.08477 17.32 8.79267C18.4421 11.5006 17.495 14.624 15.058 16.2528C12.621 17.8815 9.37287 17.562 7.3 15.4895C6.14763 14.3376 5.50014 12.775 5.5 11.1455Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15.989 15.4905L19.5 19.0015" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        name="search"
      />
      {!loading && <button className="search_button" type='submit'>
        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Arrow / Arrow_Right_SM"> <path id="Vector" d="M7 12H17M17 12L13 8M17 12L13 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
      </button>}

      {loading && <div className="loader"></div>}
    </form>
  )
}

export default Search