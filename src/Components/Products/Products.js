import React, { useEffect, useState } from 'react'
import fakeData from '../../Database/FakeData';
import Filter from '../Filter/Filter';
import './Products.css'

const Products = () => {
    const [productInfo, setProductInfo] = useState(fakeData)
    const [productFilter, setProductFilter] = useState({})

    const [[key], [value]] = [Object.keys(productFilter), Object.values(productFilter)]

    useEffect(() => {
        const productArray = fakeData.filter(data => data.[key] === value || data.[key] >= value)
        setProductInfo(productArray)
    }, [key, value])

    return (
        <>
            <Filter setProductFilter={setProductFilter} />
            <section className="products container">
                <div className="row">
                    {
                        productInfo.map((product) => {
                            const { id, name, image, processor, RAM, GPU, price } = product
                            return (
                                <div key={id} className="col-md-4 my-4">
                                    <div className="card mx-3">
                                        <img src={image} className="card-img-top" alt="Product Img" />
                                        <div className="card-body">
                                            <h5 className="card-title">{name}</h5>
                                            <ul>
                                                <li>Processor: {processor}</li>
                                                <li>RAM: {RAM}</li>
                                                <li>GPU: {GPU}</li>
                                            </ul>
                                            <p className="card-text">{price} taka</p>
                                            <button className="btn btn-primary">View Detail</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="background"></div>
            </section>
        </>
    );
};

export default Products;