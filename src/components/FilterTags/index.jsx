import React from 'react';
import Tag from '../Tag';
import './filterTags.scss';

const FilterTags = ({ tags, handleFilterTags }) => {
  const orderedTags = tags.sort((a, b) => a.order - b.order)

  return (
    <ul className="container__filter--tags">
      {orderedTags.map((tag, i) => 
        <li
          key={i}
          className="filter--tag"
          onClick={() => handleFilterTags(tag)}
        >
          <Tag data={tag}/>
        </li>
      )}
    </ul>
  );
};

export default FilterTags;