import React from 'react';
import './AddItem.css'
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const AddItem = () => {
const { register, handleSubmit } = useForm();
const [user, loading, error] = useAuthState(auth);

console.log(user)

const onSubmit =( data )=> {
   const email= user.email;
   const allService={...data,email};

   const url=`https://fierce-citadel-13028.herokuapp.com/additem`
   fetch(url,{
       method:"POST",
       headers:{
           "content-type":"application/json"
       },body:JSON.stringify(allService)
   })
   .then(rea=>rea.json())
   .then(data=>{
       console.log(data)
   })
toast('Item Add Successful')
};
return (
<div className='addItem '>
   <div className="bg-overlap">
   <div className="container">
      <div className="additem-container ">
         <h4>Additem</h4>
         <div className="addform">
            <form onSubmit={handleSubmit(onSubmit)}>
               <input placeholder='Item Name' {...register("name", { required: true, maxLength: 20 })} />
               <input placeholder='Image URl' {...register("img")} />
               <input placeholder='Supplier Brand' {...register("supplier")} />
               <input placeholder='Quantity' type="number" {...register("quantity")} />
               <input placeholder='Price' type="number"  {...register("price")} />
               <textarea placeholder='Description' type="text" {...register("description", { min: 18, max: 99 })} />
               <input  type="submit" />
            </form>
         </div>
      </div>
   </div>
   </div>
</div>
);
};
export default AddItem;