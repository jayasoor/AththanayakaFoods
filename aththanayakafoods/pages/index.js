import { getData } from '../utils/fetchData'
import { useState, useContext, useEffect } from 'react'
import Head from 'next/head'
import ProductItem from '../components/product/ProductItem'
import HeroSection from '../components/HeroSection'

const Home=(props)=>{
   const [products, setProducts] = useState(props.products)
   console.log(products)
return(
  <>
  <HeroSection/>
<div className="products">
      <Head>
        <title>Home Page</title>
      </Head>
      {
          products.length === 0 
          ? <h2>No Products</h2>

          : products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
      }
</div>
</>
)
}
export async function getServerSideProps() {
  
 
   const res = await getData('product')
 
   
   return {
     props: {
      products: res.products,
      result: res.result
     
     }, // will be passed to the page component as props
   }
 }
export default Home