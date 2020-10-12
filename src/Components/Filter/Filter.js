import React, { useState } from 'react'
import './Filter.css'

const Filter = ({ setProductFilter }) => {
    const [productPrice, setProductPrice] = useState('10000')
    const setFormData = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'price') setProductPrice(value)

        setProductFilter({
            [name]: value
        })
    }
    return (
        <section className="filter mt-4">
            <form className="d-flex justify-content-center">
                <select className="mx-3" name="processor" id="" onChange={setFormData}>
                    <option value="" className="d-none">Processor</option>
                    <option value="Intel Core i3">i3</option>
                    <option value="Intel Core i5">i5</option>
                    <option value="Intel Core i7">i7</option>
                </select>

                <select className="mx-3" name="RAM" id="" onChange={setFormData}>
                    <option value="" className="d-none">RAM</option>
                    <option value="4GB">4GB</option>
                    <option value="6GB">6GB</option>
                    <option value="8GB">8GB</option>
                </select>

                <select className="mx-3" name="GPU" id="" onChange={setFormData}>
                    <option value="" className="d-none">GPU</option>
                    <option value="2GB">2GB</option>
                    <option value="4GB">4GB</option>
                    <option value="8GB">8GB</option>
                </select>

                <label>10000-30000 tk &nbsp;</label>
                <input name="price" type="range" min='10000' max='30000' onChange={setFormData} />
                <label> &nbsp;Now:{productPrice}></label>
            </form>
        </section>
    );
};

export default Filter;