'use client'

import Card from "@/utils/componenet/card/page";
import ProductDetailsCard from "@/utils/componenet/card/productdetails";

import { Cdata } from "@/utils/componenet/commondata/page";
import Footer from "@/utils/componenet/footer/footer";


import axios from "axios";
import { useEffect, useState } from "react";


  export default function Page({ params }:{params:any}) {
    const [paramData, setParamData] = useState<any>([])
    const[loading, setLoading] = useState<boolean>(false)
    

    const fetchParamData = async () => {
      setLoading(true);
        try {
          let res = await axios.get(`https://dummyjson.com/products/${params?.id}`);
          let fetchedData =  await res.data;
    
          if (fetchedData) {
            setParamData(fetchedData);
          
          }
        } catch (error) {
          console.log("error", error);
        
      }finally{
        setLoading(false);
      }
      ;
    }
      useEffect (() => {
        fetchParamData();
    }, [params?.id]);
    
    return (
      <div>
        
        {/* <Card data={paramData} id={params.id} /> */}
        <ProductDetailsCard
          imgSrc={paramData?.images?.[0]}
          loading={loading}
          title={paramData?.title}
          discription={paramData?.description}
          rating={paramData?.rating}
          price={paramData?.price}
        />
        <Cdata/>
        <Footer/>
      </div>
    );
  }