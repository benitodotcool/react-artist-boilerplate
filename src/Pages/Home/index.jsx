import React from "react";
import CustomFont from "../../components/CustomFont";
import './home.scss';

const Home = () => {

  return (
    <div className="wrapper__home">
      <div className="container__home">
        <CustomFont tag="h1" className="big__font" content="Home" />
      </div>
    </div>
  )
};

export default Home;