'use client'
import Card from "@/utils/componenet/card/page";


import axios from "axios";
import { useEffect, useState } from "react";


  export default function Page({ params }) {
    const [paramData, setParamData] = useState([])
    //  const { data } = useFetch(`https://dummyjson.com/products/${params.id}`);

    const fetchParamData = async () => {
        try {
          let res = await axios.get('https://dummyjson.com/products/categories');
          let fetchedData =  await res.data;
    
          if (fetchedData) {
            setParamData(fetchedData);
          
          }
        } catch (error) {
          console.log("error", error);
        
      };
    }
      useEffect (() => {
        fetchParamData();
    }, [params.id]);
    
  
    return (
      <div>
        <Card data={paramData} id={params.id} />
        
        <div>okay</div>
      </div>
    );
  }
