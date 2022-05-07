import React, { useEffect, useState } from 'react';
import AllSingleItem from './AllSingleItem/AllSingleItem';
import './ManageInventories.css'
const ManageInventories = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{

        const getItem=async()=>{
         const url=`https://fierce-citadel-13028.herokuapp.com/additem/`
 
         fetch(url)
         .then(res=>res.json())
         .then(data=> setProducts(data))
        }
        getItem()
     },[])
     const handelManegDeleteItem=( id)=>{
        const sure= window.confirm('Are you Sure')
        if(sure){
          const url=`https://fierce-citadel-13028.herokuapp.com/additem/${id}`
          fetch(url,{
          method:"delete"
      })
      .then(rea=>rea.json())
      .then(data=>{
          if(data.deletedCount>0){
              const remaining= products.filter(pt=>pt._id!==id)
              setProducts(remaining)
          }
      })
      } 
        }
console.log(products)
    return (

        <div className='mannageItem'>
           <div className='container' >
          <div className="mannageIte-collection">
          <h1>My All Item</h1>  
          <div className='mannageIte-itemSection'> 
          {
              products.map(item=><AllSingleItem key={item._id} item={item} handelManegDeleteItem={handelManegDeleteItem}></AllSingleItem>)
          }
        </div>
          </div>
        </div>
        </div>
    );
};

export default ManageInventories;