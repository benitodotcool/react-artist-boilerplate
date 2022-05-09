import React from 'react';
import CustomFont from '../../components/CustomFont';
import './contact.scss';

const Contact = () => {

  return (
    <>
    <div className="wrapper__contact">
      <div className="container__contact">
        <CustomFont tag="h1" className="big__font" content="Title" />
        <CustomFont tag="h3" className="medium__font" content="Subtitle subtitle subtitle" />
        <CustomFont tag="p" className="small__font" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti repellendus impedit maxime accusamus? Quam veritatis officiis ullam sequi voluptatem ipsa, beatae recusandae minima placeat perferendis dolor in esse, ratione eos." />
      </div>
    </div>
    </>
  );
};

export default Contact;
