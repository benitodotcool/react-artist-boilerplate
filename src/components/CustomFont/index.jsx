import React from "react";
import './customFont.scss';

const CustomFont = ({
  tag: Tag,
  className: ClassName,
  content: Content}) => {

  return (
    <Tag
      className={ClassName}
    >
      {Content}
    </Tag>
  );
};

export default CustomFont;
