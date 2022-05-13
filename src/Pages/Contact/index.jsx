import React from 'react';
import CustomFont from '../../components/CustomFont';
import './contact.scss';

const Contact = () => {

  return (
    <>
    <div className="wrapper__contact">
      <div className="container__contact">
        <CustomFont tag="h1" className="big__font" content="Contact" />
      </div>
    </div>
    </>
  );
};

export default Contact;
