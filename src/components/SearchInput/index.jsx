import React from 'react';
import CustomFont from '../CustomFont';
import './searchInput.scss';

const SearchInput = ({
  handleValue,
  handleSearch,
  handleClickSearch,
  handleReset,
  inputValue }) => {

  return (
    <div className="container__search--input">
      <input
        type="text"
        placeholder='Search…'
        value={inputValue}
        className='small__font'
        onKeyDown={() => handleSearch(event)}
        onChange={() => handleValue(event)}
        autoFocus={true}
        autoComplete="off"
      />
      {inputValue.length >= 3 &&
        <>
          <CustomFont
            className={"small__font t--CAPS"}
            content={"search"}
            tag={"button"}
            onClick={handleClickSearch}
          />
          <CustomFont
            className={"small__font t--CAPS"}
            content={"reset"}
            tag={"button"}
            onClick={handleReset}
          />
        </>
      }
    </div>
  );
};

export default SearchInput;
