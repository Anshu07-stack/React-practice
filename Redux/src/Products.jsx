
import { useSelector } from 'react-redux'

const Products = () => {
  const products = useSelector(state => state.productReducer.products)
  console.log(products)
  
   
  return (  
    <div>
      {/* {JSON.stringify(products)} */}
    </div>
  )
}

export default Products
