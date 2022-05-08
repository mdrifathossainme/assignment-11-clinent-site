import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import AllSingleItem from './AllSingleItem/AllSingleItem';
import './ManageInventories.css'
const ManageInventories = () => {
    const [ItemCount,setItemCount]=useState(0)
    const [page,setPage]=useState(0);
    const [size,setSize]=useState(5)
    const [item, setItem] = useState([]);

 

    useEffect(()=>{
        fetch('https://fierce-citadel-13028.herokuapp.com/itemCount')
        .then(res=>res.json())
        .then(data=>{
            const count= data.count;
            const page= Math.ceil(count/5)
            setItemCount(page)
        })
    },[])


    if(item.length<=0){
        <Loading/>
    }
    useEffect(()=>{

        const getItem=async()=>{
         const url=`https://fierce-citadel-13028.herokuapp.com/alladditem/?page=${page}&size=${size}`
 
         fetch(url)
         .then(res=>res.json())
         .then(data=> setItem(data))
         
        }
        getItem()
     },[item,size])
     const handelManegDeleteItem=( id)=>{
        const sure= window.confirm('Are you Sure')
        if(sure){
          const url=`https://fierce-citadel-13028.herokuapp.com/alladditem/${id}`
          fetch(url,{
          method:"delete"
      })
      .then(rea=>rea.json())
      .then(data=>{
          if(data.deletedCount>0){
              const remaining= item.filter(pt=>pt._id!==id)
              setItem(remaining)
          }
      })
      } 
     
        }
        
    return (
<>
<div className='mannageItem'>
           <div className='container' >
          <div className="mannageIte-collection">
          <h1>My All Item</h1>  
          <div className='mannageIte-itemSection'> 
         

          {
              item.map(item=><AllSingleItem key={item._id} item={item} handelManegDeleteItem={handelManegDeleteItem}></AllSingleItem>)
          }
        </div>
          </div>
        </div>
        </div>
            <div className='pagenation'>
                {
                    [...Array(ItemCount).keys()].map(number=><button
                  className={page===number? "selected":""}
                    onClick={()=>setPage(number)}
                    >{number+1}</button>)
                }
            <select onChange={e=>setSize(e.target.value)}>
                <option value="5" selected>5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
            </div>
</>
       
    );
};

export default ManageInventories;