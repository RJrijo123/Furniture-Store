import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='item'>
        <div className="item-image-wrapper">
          <Link to={`/product/${props.id}`}>
            <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt="" />
          </Link>
          {props.discount && (
            <div className="item-discount-badge">
              -{props.discount}%
            </div>
          )}
        </div>
        <div className="item-info">
          <p className="item-name">{props.name}</p>
          <div className="item-prices">
              <div className="item-price-new">
                ₹{props.new_price}
              </div>
              <div className="item-price-old">
                ₹{props.old_price}
              </div>
          </div>
        </div>
    </div>
  );
};

export default Item;
