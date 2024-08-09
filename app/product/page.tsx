import React from 'react'

import ProductLayout from './filter/productLayout/page'
import { Cdata } from '@/utils/componenet/commondata/page'


const Product = () => {
  return (
    <div>
       {/* <Navbar/>
       <Sidebar/>  */}
       <ProductLayout/>
       <Cdata/>
    </div>
  )
}

export default Product