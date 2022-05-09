import React from 'react';
import CustomFont from '../CustomFont';
import './tag.scss';

const Tag = ({ tag }) => {

  return (
    <button
      className="TAG"
      data-filter={tag.name}
      data-is-active={tag.id}
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