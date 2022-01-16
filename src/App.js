import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import data from './data';

function App() {
  const [dataItems, setDataItems] = useState(data);

  //function to get All
  const getAll=()=>{
    console.log('all')
    setDataItems(data)
  }
  //function to filter Breakfast
    const breakfastItems = () => {
    console.log("breakfast");

      setDataItems(
        data.filter(
          (categoryItem) => categoryItem.category == "breakfast"
        )
      );
    };
  //function to filter Lunch
      const lunchItems = () => {
    console.log('lunch')

      setDataItems(
        data.filter((categoryItem) => categoryItem.category == "lunch")
      );
    };
  //function to filter Dinner
        const shakeItems = () => {
    console.log("shake");

      setDataItems(
        data.filter((categoryItem) => categoryItem.category == "shakes")
      );
    };

  return (
    <div className="body">
      <div className="outline-title">
        <h1 className="title">Our Menu</h1>
        <div className="hr"></div>
      </div>
      <Categories
        getAll={getAll}
        breakfastItems={breakfastItems}
        lunchItems={lunchItems}
        shakeItems={shakeItems}
      />
      <div className="foodList">
        {console.log(dataItems)}
        {dataItems.map((item) => (
          <Menu {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
