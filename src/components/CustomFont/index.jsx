import React from "react";
import './customFont.scss';

const CustomFont = ({
  tag: Tag,
  className: ClassName,
  content: Content,
  onClick: onClick }) => {

  return (
    <Tag
      className={ClassName}
      onClick={onClick}
    >
      {Content}
    </Tag>
  );
};

export default CustomFont;
