import React from 'react';
import CustomFont from '../CustomFont';
import { normalizeQuery } from '../../config/normalize';
import './tag.scss';

const Tag = ({ tag }) => {

  return (
    <button
      className="TAG"
      data-filter={normalizeQuery(tag.name)}
      data-is-active={tag.isActive}
    >
      <CustomFont
        tag={"p"}
        className={"small__font t--CAPS"}
        content={tag.name}
      />
    </button>
  );
};

export default Tag;