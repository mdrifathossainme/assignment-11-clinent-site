import React from 'react';
import { Icon } from 'react-icons-kit'
import {trash} from 'react-icons-kit/fa/trash'
const SinglrItem = ({item , handelDeleteItem}) => {
    console.log(item)
    const{_id,name,price,quantity,supplier,img,description}=item;


    return (
        <div className='item-box'>
            <div className="item-img">
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
                     <Icon onClick={()=>handelDeleteItem(_id)} className='delete-icon' icon={trash} size="30"  />

            </div>
        </div>
    );
};

export default SinglrItem;