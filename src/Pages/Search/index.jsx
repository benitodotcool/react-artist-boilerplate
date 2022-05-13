import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";
import CustomFont from '../../components/CustomFont';
import SearchInput from '../../components/SearchInput';
import WorksToDisplay from '../../components/WorksToDisplay';
import './search.scss';

const Search = ({ works }) => {
  const history = useHistory();
  const { queryParams } = useParams();
  const [inputValue, setInputValue] = useState("");
  const [worksToDisplay, setWorksToDisplay] = useState([]);

  useEffect(() => {
    if (queryParams != undefined) {
      let arrSearchParams = queryParams.split('=')[1].split(' ');
      handleFiltering(setWorksToDisplay, arrSearchParams, works)
    }
  }, [queryParams])

  const handleFiltering = (setFunction, params, data) => {
    let filteredData = data.filter((item) => 
      // This can be upgraded to choose any values of the object 
      params.every((param) => JSON.stringify(item).toLowerCase().includes(param))
    )
    setFunction(filteredData)
  }

  const handleValue = (e) => {
    setInputValue(e.target.value)
  }

  const handleSearch = (e) => {
    if (inputValue.length >= 3 && e.keyCode === 13) {
      history.push(`/search=${inputValue.toLowerCase()}`);
    }
  }

  const handleClickSearch = () => {
    if (inputValue.length >= 3) {
      history.push(`/search=${inputValue.toLowerCase()}`);
    }
  }

  const handleReset = () => {
    history.push('/search');
    setInputValue("");
    setWorksToDisplay([]);
  }

  return (
    <div className="wrapper__search">
      <div className="container__search">
        <CustomFont tag="h1" className="big__font" content="Search" />
        <SearchInput
          handleValue={handleValue}
          handleSearch={handleSearch}
          handleClickSearch={handleClickSearch}
          handleReset={handleReset}
          inputValue={inputValue}
        />
        <WorksToDisplay works={worksToDisplay} />
        {queryParams != undefined && worksToDisplay.length <= 0 &&
          <CustomFont tag="p" className="small__font" content="No results" />
        }
      </div>
    </div>
  );
};

export default Search;
