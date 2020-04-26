import React from 'react';
import { dummyProducts } from '../resources/DummyProducts';
import Product from './Product';


const Products = () => {
    return (
        <section className="products-container">
            <h1>Products Section</h1>
            <div className="row" aria-label="Products List">
                {
                    dummyProducts.map((item, i) => (
                        <Product key={i} item={item} id={i + 1} />
                    ))
                }
            </div>
        </section>
    )
}

export default Products;
