import { useContext, useEffect, useState } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { MyContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'

const Header = () => {
  const { cart } = useContext(MyContext)
  const [cartQuantity, setCartQuantity] = useState(0);
  useEffect(() => {
    // Calculate the total quantity of items in the cart
    const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);
    setCartQuantity(totalItemsInCart);
  }, [cart]);
  let Links = [
    { name: 'HOME', link: '/' },
    { name: 'Product', link: '/product' }
  ]
  let [open, setOpen] = useState(false)

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          {/* <BookOpenIcon className='w-7 h-7 text-blue-600' /> */}
          <span>ShopNet</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-12' : 'top-[-490px]'
          }`}
        >
          {Links.map((link, key) => (
            <li key={key} className='md:ml-8 md:my-0 my-7 font-semibold'>
              <a
                href={link.link}
                className='text-gray-800 hover:text-blue-400 duration-500'
              >
                {link.name}
              </a>
            </li>
          ))}
      
          <div className='flex justify-center ml-8 md:block'>
            <a
              className='relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300'
              href='#'
            >
              <svg
                className='w-5 h-5'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <Link to='/cartview'>
                <span className='absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full'>
                  {cartQuantity}
                </span>
              </Link>
            </a>
          </div>
        </ul>
        {/* button */}
      </div>
    </div>
  )
}

export default Header
