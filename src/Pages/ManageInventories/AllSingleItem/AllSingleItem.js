import React from 'react';
import './AllSingleItem.css'
import { Icon } from 'react-icons-kit'
import {trash} from 'react-icons-kit/fa/trash'
const AllSingleItem = ({item,handelManegDeleteItem}) => {
    const{_id,name,price,quantity,supplier,img,description}=item;
    console.log(_id, name,)
    return (
        <div className='item-box'>
            <div className="mitem-img">
                <img src={img} alt="" />
            </div>
            <div className="item-details">
                <h4>{name}</h4>
                <p>{description.slice(0,150)}</p>
                <div className='quantiy-supplier'>
                <p>Quantity : {quantity}</p>
                <p>Supplier : {supplier}</p>
                </div>
                <h6>Price: ${price}</h6>
            </div>
            <div className="delet-btn">
            <Icon onClick={()=>handelManegDeleteItem(_id)} className='delete-icon' icon={trash} size="40" />

            </div>
        </div>
    );
};

export default AllSingleItem;