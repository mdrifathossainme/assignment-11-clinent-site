import React, { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        const url=`https://fierce-citadel-13028.herokuapp.com/service/`

        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
    return[products ,setProducts]
    
};

export default UseProducts;