import React from 'react';

const Categories = ({ getAll ,breakfastItems, lunchItems,shakeItems}) => {
  return (
    <div className="buttons">
      <button onClick={getAll}>All</button>
      <button onClick={breakfastItems}>Breakfast</button>
      <button onClick={lunchItems}>Lunch</button>
      <button onClick={shakeItems}>Shakes</button>
    </div>
  );
};

export default Categories;
