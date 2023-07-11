import React, { useState } from 'react';
import { Search as SearcIcon, Loading } from '../Icons';
import './Search.css';

type SearchProps = {
  setSearch: (value: string) => void;
  loading: boolean;
};

const Search = ({ setSearch, loading }: SearchProps) => {
  const [value, setValue] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(value);
  };

  return (
    <form className='Search' onSubmit={handleSearch}>
      <SearcIcon />
      <input
        type='text'
        placeholder='Search'
        onChange={(e) => setValue(e.target.value)}
        value={value}
        name='search'
      />
      {!loading && (
        <button className='search_button' type='submit'>
        <Loading />
        </button>
      )}

      {loading && <div className='loader'></div>}
    </form>
  );
};

export default Search;
