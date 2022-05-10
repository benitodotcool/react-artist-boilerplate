import React from 'react';
import CustomFont from '../CustomFont';
import { normalizeQuery } from '../../config/normalize';
import './tag.scss';

const Tag = ({ data }) => {

  return (
    <button
      className="TAG"
      data-filter={normalizeQuery(data.name)}
      data-is-active={data.isActive}
    >
      <CustomFont
        tag={"p"}
        className={"small__font t--CAPS"}
        content={data.name}
      />
    </button>
  );
};

export default Tag;