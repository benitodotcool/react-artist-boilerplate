import React from 'react';
import CustomFont from '../../components/CustomFont';
import './about.scss';

const About = () => {

  return (
    <>
      <CustomFont tag="h1" className="big__font" content="Model×Studio" />
      <CustomFont tag="h3" className="medium__font" content="MpeldqxaOS" />
      <CustomFont tag="p" className="small__font" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti repellendus impedit maxime accusamus? Quam veritatis officiis ullam sequi voluptatem ipsa, beatae recusandae minima placeat perferendis dolor in esse, ratione eos." />
    </>
  );
};

export default About;
