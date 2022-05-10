import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import DataContext from '../../config/dataContext';
import CustomFont from '../../components/CustomFont';
import FilterTags from '../../components/FilterTags';
import FilterTHead from '../../components/FilterTHead';
import { normalizeQuery } from '../../config/normalize';
import './works.scss';
import WorksToDisplay from '../../components/WorksToDisplay';

const Works = ({ works, tags }) => {
  const data = useContext(DataContext);
  const isFilterMultiple = true;
  const { queryParams } = useParams();
  // const history = useHistory();
  // const prevTagsQuery = "&tags="
  const [filterTags, setFilterTags] = useState([]);
  const [worksToDisplay, setWorksToDisplay] = useState([]);
  const filterTHead = [
    {name: "year", isActive: true, function: () => handleSortByYear()},
    {name: "tag", isActive: false, function: () => handleSortByTag()},
    {name: "title", isActive: false, function: () => handleSortByTitle()},
  ]

  useEffect(() => {
    if (data.isAllDataLoaded === true) {
      if (queryParams != undefined) {
        let normalizedTagsArr = queryParams.split('=')[1].split('+')
        setFilterTags(tags.map((tag) => {
          if (normalizedTagsArr.includes(normalizeQuery(tag.name)) === true) {
            return {...tag, isActive: true}
          } else {
            return {...tag, isActive: false}
          }
        }))
      } else {
        setFilterTags(tags.map((tag) => {return {...tag, isActive: false}}))
        setWorksToDisplay(works)
      }
    }
  }, [data.isAllDataLoaded, queryParams])

  // À CHANGER
  // useEffect(() => {
  //   let arrFilterTag = []
  //   filterTags
  //     .filter((tag) => tag.isActive === true)
  //     .map((filteredTag) => {
  //       arrFilterTag.push(normalizeQuery(filteredTag.name))
  //     })
  //   if (arrFilterTag.length >= 1) {
  //     history.push(`/works${prevTagsQuery}${arrFilterTag.join('+')}`)
  //   }
  //   // else {
  //   //   history.push('/works')
  //   // }
  //   console.log(filterTags)
  // }, [filterTags])

  const handleFilterTags = (clickedTag) => {
    setFilterTags(
      filterTags.map((tag) => {
        if (clickedTag.id === tag.id) {
          if (clickedTag.isActive === true) {
            return { ...clickedTag, isActive: false };
          } else {
            return { ...clickedTag, isActive: true };
          }
        } else {
          if (isFilterMultiple === true) {
            return { ...tag };
          } else {
            return { ...tag, isActive: false };
          }
        }
      })
    );
  };

  const handleSortByYear = () => {
    console.log('sort by year')
    setWorksToDisplay(worksToDisplay.sort((a, b) => b.year - a.year))
  }

  const handleSortByTag = () => {
    console.log('sort by tag')
  }

  const handleSortByTitle = () => {
    console.log('sort by title')
  }

  return (
    <div className="wrapper__index">
      <div className="container__index">
        <CustomFont tag="h1" className="big__font" content="Index" />
        <FilterTags tags={filterTags} handleFilterTags={handleFilterTags}/>
        {data.isAllDataLoaded && <FilterTHead data={filterTHead} />}
        <WorksToDisplay works={worksToDisplay}/>
      </div>
    </div>
  );
};

export default Works;