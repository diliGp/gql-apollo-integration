import React from 'react';

const Product = ({ item, id }) => {
    const { imgUrl, name, price } = item;
    return (
        <div className={`col item-${id}`}>
            <div className="img-warpper">
                <img src={imgUrl} alt={name} />
            </div>
            <div className="item-info">
                <h3 className="title">{name}</h3>
                <div className="meta-info">
                    <span className="price">₹{price && parseFloat(price).toFixed(1)}</span>
                    <button className="atc-btn">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product;
