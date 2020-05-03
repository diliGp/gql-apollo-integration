import React from 'react';
import './Home.scss';
import Products from './Products';

const Home = () => {
    return (
        <>
            <section className="text-center home-container">
                <h1>Flex Section</h1>
                <div className="row">
                    <div className="col box-1">
                        <h3 className="title">Title 1</h3>
                        <p className="description">
                            A TypeError exception if the propertiesObject parameter is null or a non-primitive-wrapper object.
                            A TypeError exception if the propertiesObject parameter is null or a non-primitive-wrapper object.
                    </p>
                    </div>
                    <div className="col box-2">
                        <h3 className="title">Title 2</h3>
                        <p className="description">A TypeError exception if the propertiesObject parameter is null or a non-primitive-wrapper object.</p>
                    </div>
                    <div className="col box-3">
                        <h3 className="title">Title 3</h3>
                        <p className="description">A TypeError exception if the propertiesObject parameter is null or a non-primitive-wrapper object.</p>
                    </div>
                    <div className="col box-4">
                        <h3 className="title">Title 3</h3>
                        <p className="description">A TypeError exception if the propertiesObject parameter is null or a non-primitive-wrapper object.</p>
                    </div>
                </div>
            </section>
            <Products />
        </>
    )
}

export default Home;
