import React from 'react'
// import ProductLayout from './filter/productLayout/page'

import { Cdata } from '@/utils/componenet/commondata/page'
import { Filter } from './filter/page'
import Page from './[id]/page'


const Product = () => {
  return (
    <div>
       {/* <Navbar/>
       <Sidebar/>  */}
       {/* <ProductLayout/> */}
       <Filter/>
       <Page/>
       <Cdata/>
    </div>
  )
}

export default Product