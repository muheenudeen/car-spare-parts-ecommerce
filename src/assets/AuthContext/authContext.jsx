import { createContext, useEffect, useState } from "react";
import axios from "axios";



export const MyContext=createContext()
export const AuthProvider = ({Children})=>{
    const [products,setProducts]=useState([])


    useEffect(()=>{
        axios.get(`http://localhost:8000/products`)
        .then(res=>setProducts(res.data))
        .catch(error=>console.log(error))
    },[])



return(
    <MyContext.Provider value={{
        products,
       

    }}>
        {Children}
        </MyContext.Provider>
)
}