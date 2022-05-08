import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import {plus} from 'react-icons-kit/fa/plus'
import {minus} from 'react-icons-kit/fa/minus'
import './Inventory.css'


const Inventory = () => {
    const{id}=useParams();
    const [inventoryIem,setInventoryItem]=useState('')
    const[quantityUpdateBtn,seTQuantityUpdate]=useState(false);
    const[setTure,setSetture]=useState(false);
    const [quantity,setQuantity]=useState();
    const [upQuantity,setUpQuantity]=useState(quantity);
   

    const url=`http://localhost:5000/service/${id}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setInventoryItem(data))
    },[])
  
  const plushQuantity=()=>{
  
   const set=inventoryIem.quantity+=1
     setQuantity(set)
     setSetture(true)
     handleupdateQuantity()
     handleInputItem()
  }
  const minushQuantity=()=>{
    handleupdateQuantity()
    const set=inventoryIem.quantity-=1
    setQuantity(set)
    setSetture(true)

  }
  const handlecustomQuantity=(e)=>{
    e.preventDefault();
      const customQuantity=parseInt(e.target.number.value);
      const set=inventoryIem.quantity+=customQuantity||0;
      console.log(customQuantity, set)
     setQuantity(set)
    e.target.reset()
    handleupdateQuantity()
  }
const handleInputItem=(e)=>{
    const newQuantity=parseInt(e.target.value)
    setUpQuantity(newQuantity)
}
console.log(upQuantity)

const handleOnchange=(e)=>{
const customValue=parseInt(e.target.value);
const ctv=upQuantity+customValue;
setUpQuantity(ctv)
}
const handleupdateQuantity=()=>{
            fetch(url,{
                method:"PUT",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({quantity:upQuantity})
               
            })
            .then(rea=>rea.json())
            .then(data=>{
                console.log(data)
        
            })
        }
    return (
        <div className='inventtory-page container'>
            <div className="inventtory-item ">
                <div className="inventory-img">
                    <img src={inventoryIem.img} alt="" />
                </div>
                <div className="inventory-detailes">
                    <h4> {inventoryIem.name}</h4>
                    <p>{inventoryIem.description}</p>
                    <p>Supplier Brand: {inventoryIem.supplier}</p>
                    <h6>Price: ${inventoryIem.price}</h6>
                    <div className="qunantity">
                        <p>Quantity:  <span>
                        <label htmlFor='ide' ><Icon   onClick={minushQuantity} size={30} icon={minus} className="quantity-icon" /> </label>
                        <input type="number" id='ide'  onBlur={handleInputItem} value= {setTure===true?quantity: inventoryIem.quantity }/>
                        
                       <label htmlFor="ide">  <Icon size={30}  onClick={plushQuantity} className="quantity-icon" icon={plus} /></label> </span> </p>
                       <div className={quantityUpdateBtn===true? 'd-block':"d-none"}>
                       <div className='quantity-form'>
                       <form onSubmit={handlecustomQuantity} >
                                <input  onChange={handleOnchange} type="number" name="number" id="" />
                               <label > <input type="submit" value="Update" /></label>
                         </form>
                       </div>
                  
                   </div>
                    </div>
                 
                    <button onClick={()=>seTQuantityUpdate(!quantityUpdateBtn)} className='quantity-btn'>{quantityUpdateBtn===true? "Don't need Custom Quantiy":"Update Custom Quantity"} </button>
                </div>
            </div>

           <div className="mangeBtn">
            <Link to="/manageinventories"> <button className='mabage-btn'>Manage Inventories</button></Link>

           </div>
        </div>
    );
};
// Update Custom Quantit
export default Inventory;