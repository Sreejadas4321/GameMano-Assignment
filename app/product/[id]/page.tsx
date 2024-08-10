'use client'
import Card from "@/utils/componenet/card/page";
import { Cdata } from "@/utils/componenet/commondata/page";
import Footer from "@/utils/componenet/footer/footer";


import axios from "axios";
import { useEffect, useState } from "react";


  export default function Page({ params }:{params:any}) {
    const [paramData, setParamData] = useState([])
    

    const fetchParamData = async () => {
        try {
          let res = await axios.get(`https://dummyjson.com/products/${params?.id}`);
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
    }, [params?.id]);
    
  
    return (
      <div>
        <Card data={paramData} id={params.id} />
        <Cdata/>
        <Footer/>
      </div>
    );
  }
