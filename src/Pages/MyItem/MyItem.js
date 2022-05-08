import React, { useEffect, useState } from 'react';
import './MyItem.css'
import SinglrItem from './SinglrItem';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
  const [products, setProducts]=useState([])
const [user]=useAuthState(auth)
const email= user?.email

    useEffect(()=>{

       const getItem=async()=>{
        const url=`https://fierce-citadel-13028.herokuapp.com/additem?email=${email}`

        fetch(url)
        .then(res=>res.json())
        .then(data=> setProducts(data))
       }
       getItem()
    },[user])
   
    const handelDeleteItem=( id)=>{
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


    return (
        <>
        {
          products.length>0? <>
          <div className='myitem'>
          <div className="item-collection">
          <h4>MyItem {products.length} </h4>  
          <div className='container itemSection'> 
         
          {
            products.map(item=><SinglrItem key={item._id} handelDeleteItem={handelDeleteItem} item={item}></SinglrItem>)
          }
        </div>
          </div>
        </div>
          </>:<>
          <div className="notfounditem">
            <h1>Please add some items.</h1>
            <h2>Now you don't have any item add</h2>
          </div>
          
          </>
        }
        </>
    );
};

export default MyItem;