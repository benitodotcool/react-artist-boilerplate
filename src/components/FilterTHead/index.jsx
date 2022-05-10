import React from 'react';
import Tag from '../Tag';
import './filterTHead.scss';

const FilterTHead = ({ data }) => {

  return (
    <ul className="container__filter--thead">
      {data.map((el, i) =>
        <li
          key={i}
          className="filter--thead"
          onClick={el.function}
        >
          <Tag data={el}/>
        </li>
      )}
    </ul>
  );
};

export default FilterTHead;