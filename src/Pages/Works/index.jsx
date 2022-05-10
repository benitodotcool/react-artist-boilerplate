import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import DataContext from '../../config/dataContext';
import CustomFont from '../../components/CustomFont';
import FilterTags from '../../components/FilterTags';
// import FilterTHead from '../../components/FilterTHead';
import { normalizeQuery } from '../../config/normalize';
import './works.scss';

const Works = ({ works, tags }) => {
  const data = useContext(DataContext);
  const { queryParams } = useParams();
  const history = useHistory();
  const isFilterMultiple = true;
  const prevTagsQuery = "&tags="
  const [filterTags, setFilterTags] = useState([]);

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
      }
    }
  }, [data.isAllDataLoaded, queryParams])

  useEffect(() => {
    let arrFilterTag = []
    filterTags
      .filter((tag) => tag.isActive === true)
      .map((filteredTag) => {
        arrFilterTag.push(normalizeQuery(filteredTag.name))
      })
    if (arrFilterTag.length >= 1) {
      history.push(`/works${prevTagsQuery}${arrFilterTag.join('+')}`)
    }
    // else {
    //   history.push('/works')
    // }
    console.log(filterTags)
  }, [filterTags])

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

  return (
    <div className="wrapper__index">
      <div className="container__index">
        <CustomFont tag="h1" className="big__font" content="Index" />
        <FilterTags tags={filterTags} handleFilterTags={handleFilterTags}/>
        {/* <FilterTHead /> */}
      </div>
    </div>
  );
};

export default Works;