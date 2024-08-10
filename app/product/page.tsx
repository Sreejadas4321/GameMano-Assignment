import React from 'react'
// import ProductLayout from './filter/productLayout/page'

import { Cdata } from '@/utils/componenet/commondata/page'
import { Filter } from './filter/page'
import Page from './[id]/page'
import Footer from '@/utils/componenet/footer/footer'


const Product = () => {
  return (
    <div>
       {/* <Navbar/>
       <Sidebar/>  */}
       {/* <ProductLayout/> */}
       <Filter/>
       {/* <Page/> */}
       <Cdata/>
       <Footer/>
    </div>
  )
}

export default Product