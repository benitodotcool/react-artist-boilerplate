import React from 'react';
import { useParams } from 'react-router';
import CustomFont from '../../components/CustomFont';
import FilterTags from '../../components/FilterTags';
// import FilterTHead from '../../components/FilterTHead';
import './works.scss';

const Works = ({ works, tags }) => {
  const { queryParams } = useParams();

  // console.log(queryParams)
  console.log(works)
  console.log(tags)

  return (
    <div className="wrapper__index">
      <div className="container__index">
        <CustomFont tag="h1" className="big__font" content="Index" />
        <FilterTags tags={tags} />
        {/* <FilterTHead /> */}
      </div>
    </div>
  );
};

export default Works;