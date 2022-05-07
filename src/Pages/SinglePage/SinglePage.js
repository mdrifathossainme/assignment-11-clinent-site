import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SinglePage.css'

const SinglePage = ({product}) => {
    const{_id,name,img,description,price,quantity,supplier}=product;
    const navigate=useNavigate()
    const handleUpdatebtn=(id)=>{
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='productItem' >
            <img src={img} alt="productimg" />
            <div className="details">
                <h4> {name}</h4>
                <p>{description.slice(0,60)}</p>
                <div className="sub-deatils">
                <p>Quantity: {quantity} </p>
                <p>Supplier : {supplier}</p>
                </div>
                <h4>Price : ${price}</h4>
                <button onClick={()=>handleUpdatebtn(_id)}>stock update</button>
            </div>
        </div>
    );
};

export default SinglePage;