import React, { useState, useEffect } from 'react';
import { fetchData } from '../../config/fetchData';

const Index = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetchData(setWorks)
  }, []);

  return (
    <div className="container">
      <h2>WORKS—INDEX</h2>
      {works.map((meal) => (<div key={meal.idMeal}>{meal.strMeal}</div>))}
    </div>
  );
};

export default Index;
