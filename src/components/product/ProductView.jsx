import ProductCard from './ProdcutCard'
import ProductDetails from './ProductDetails'
import ProductNav from './ProductNav'

const ProductView = () => {
  return (
    <div className='mt-16'>
      <ProductNav />
      <div className='grid grid-cols-12 bg-gray-50'>
        <div className='col-span-9'>
          <ProductCard />
          <ProductDetails />
        </div>
        <div className='col-span-3 '></div>
      </div>
    </div>
  )
}

export default ProductView
