import React from "react";
import CustomFont from "../../components/CustomFont";
import './error404.scss';

const Error404 = () => {

  return (
    <div className="wrapper__error">
      <div className="container__error">
        <CustomFont tag="h1" className="big__font" content="Error 404" />
      </div>
    </div>
  )
};

export default Error404;