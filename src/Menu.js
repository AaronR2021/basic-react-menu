import React from 'react';

const Menu = ({id,title,category,price,img,desc}) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={img} className="img" />
      </div>
      <div className="content-card">
        <div className="flex-row">
          <h5>{title}</h5>
          <h6>${price}</h6>
        </div>
        <hr className='hr' />
        <p className="food-desc">
          {
            desc
          }
        </p>
      </div>
    </div>
  );
};

export default Menu;
