import React, { useContext } from 'react';
import DataContext from '../../config/dataContext';
import { v4 as uuidv4 } from 'uuid';
import './works.scss';

const Index = () => {
  const data = useContext(DataContext);
  // const works = data.works

  return (
    <div className="container">
      <h1>WORKS—INDEX</h1>
        {/* {
          works
          .map((work) => (
            <div
              key={uuidv4()}
            >
              {work.strMeal}
            </div>
          ))
        } */}
    </div>
  );
};

export default Index;
