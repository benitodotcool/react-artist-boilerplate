import React from 'react';
import Tag from '../Tag';
import './filterTags.scss';

const FilterTags = ({ tags }) => {

  return (
    <ul className="container__filter--tags">
      {tags.map((tag, i) => 
        <li
          key={i}
          className="filter--tag"
        >
          <Tag tag={tag}/>
        </li>
      )}
    </ul>
  );
};

export default FilterTags;