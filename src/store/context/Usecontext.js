import { useContext,createContext,useState } from "react";


const useContent = createContext()

export const Cartdata =({children}) =>{
      const [data,setData] =useState([])

      const addData = (item) =>{
        setData([...data,item])
      }

      const removeData =(item) =>{
        setData(data.filter((x)=> x!==item))
      }

   return(
      
       <useContent.Provider value={{data,addData,removeData}}>
           {children}
       </useContent.Provider>
   )

}

export const useCart = ()=>{
    return useContext(useContent)
}