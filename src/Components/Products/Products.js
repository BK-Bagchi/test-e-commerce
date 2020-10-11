import React from 'react'
import './Products.css'

const Products = () => {
    return (
        <section className="products container">
            <div className="row">
                <div className="col-md-4 my-4">
                    <div className="card mx-3">
                        <img src="https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb.jpg" className="card-img-top" alt="Product Img" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <ul>
                                <li>Hi</li>
                            </ul>
                            <p className="card-text">1000 taka</p>
                            <button className="btn btn-primary">View Detail</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-4">
                    <div className="card mx-3">
                        <img src="https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb.jpg" className="card-img-top" alt="Product Img" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <ul>
                                <li>Hi</li>
                            </ul>
                            <p className="card-text">1000 taka</p>
                            <button className="btn btn-primary">View Detail</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-4">
                    <div className="card mx-3">
                        <img src="https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb.jpg" className="card-img-top" alt="Product Img" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <ul>
                                <li>Hi</li>
                            </ul>
                            <p className="card-text">1000 taka</p>
                            <button className="btn btn-primary">View Detail</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;