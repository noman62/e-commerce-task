import { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ProductsData from '../ProductsData/ProductsData'
import { MyContext } from '../CartContext/CartContext'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const { setCart } = useContext(MyContext)

  useEffect(() => setProducts(ProductsData), [])

  const addToCart = medicine => {
    setCart(prevCart => {
      const existingCartItemIndex = prevCart.findIndex(
        item => item.name === medicine.name
      )

      if (existingCartItemIndex !== -1) {
        const updatedCart = [...prevCart]
        updatedCart[existingCartItemIndex].quantity += 1
        return updatedCart
      } else {
        return [...prevCart, { ...medicine, quantity: 1 }]
      }
    })
  }

  return (
    <div className='bg-gray-50'>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='flex flex-wrap justify-around p-2 rounded-lg'>
          <button className='category-button bg-white border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded-lg mb-2 transition duration-300'>
            All Categories
          </button>
          <button className='category-button bg-white border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded-lg mb-2 transition duration-300'>
            Electronics
          </button>
          <button className='category-button bg-white border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded-lg mb-2 transition duration-300'>
            Home & LifeStyle
          </button>
          <button className='category-button bg-white border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded-lg mb-2 transition duration-300'>
            Women Fashions
          </button>
          <button className='category-button bg-white border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded-lg mb-2 transition duration-300'>
            Men Fashions
          </button>
          <button className='category-button text-blue-500 font-bold py-2 px-4 rounded-full mb-2 transition duration-300 flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z'
              />
            </svg>
          </button>
        </div>
        <div className='grid gap-5 lg:grid-cols-5 sm:max-w-sm sm:mx-auto lg:max-w-full'>
          {products.map(medicine => (
            <div
              key={medicine.id}
              className='overflow-hidden rounded bg-white'
              onClick={() => addToCart(medicine)}
            >
              <div className='p-3 flex justify-between items-center '>
                <img
                  src={medicine.Image}
                  className='object-cover w-full h-64 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                  alt=''
                />
              </div>

              <div className='px-3'>
                <p className='text-2xl font-bold leading-5'>{medicine.name}</p>
                <div className=' flex justify-between items-center '>
                  <h5 className=''>${medicine.price}</h5>
                  <div
                    style={{ height: '40px', width: '40px' }}
                    className='rounded-full flex items-center  justify-center hover:bg-blue-500 hover:text-white'
                  >
                    <FontAwesomeIcon className='' icon={faShoppingCart} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
