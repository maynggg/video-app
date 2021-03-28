import React, { useState, useEffect } from 'react';
import { Input } from 'semantic-ui-react';
import useDebounce from '../hooks/debounce';
import { searchVideo } from '../apiService';

function SearchBar({ onVideoSearch }) {
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword= useDebounce(keyword, 500);

  // Call searchVideo API whenever the keyword typed in the search bar changes
  useEffect(
    () => {
      if (debouncedKeyword) {
        searchVideo(debouncedKeyword)
          .then((data) => onVideoSearch(data));
      } else {
        onVideoSearch([]);
      }
    },
    [debouncedKeyword], // Only call effect if debounced keyword changes
  );

  return (
    <>
      <Input 
        icon='search' 
        placeholder='Search...'
        size='huge'
        value={keyword} 
        onChange={(e) => {setKeyword(e.target.value)}}
      />
    </>
  );
}

export default SearchBar;
