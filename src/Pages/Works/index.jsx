import React, { useContext } from 'react';
import DataContext from '../../config/dataContext';
import { v4 as uuidv4 } from 'uuid';

const Index = () => {
  const data = useContext(DataContext);
  const works = data.works

  return (
    <div className="container">
      <h1>WORKS—INDEX</h1>
        {
          works
          .map((work) => (
            <div
              key={uuidv4()}
            >
              {work.strMeal}
            </div>
          ))
        }
        <ul>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
        </ul>
    </div>
  );
};

export default Index;
