import PropTypes from 'prop-types'

const CartView = ({ cart, onQuantityChange }) => {
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const tax = 4
  const shipping = 56
  const discount = -6
  let total = 0
  if (subtotal > 0) {
    total = subtotal + tax + shipping + discount
  }

  return (
    <div className='w-full md:w-3/4 bg-white px-4 md:px-10 py-10 mx-auto'>
      <div className='flex flex-col md:flex-row justify-between border-b pb-8'>
        <h1 className='font-semibold text-2xl mb-4 md:mb-0'>Shopping Cart</h1>
        <h2 className='font-semibold text-2xl'>{cart.length} Items</h2>
      </div>
      <div className='flex flex-col mt-4 md:flex-row md:items-center mb-5'>
        <h3 className='font-semibold text-gray-600 text-xs uppercase mb-2 md:mb-0 md:w-2/5'>
          Product Details
        </h3>
        <h3 className='font-semibold text-gray-600 text-xs uppercase text-center md:w-1/5'>
          Quantity
        </h3>
        <h3 className='font-semibold text-center text-gray-600 text-xs uppercase md:w-1/5'>
          Total
        </h3>
      </div>
      {cart.map(item => (
        <div
          key={item.name}
          className='flex flex-col md:flex-row items-center hover:bg-gray-100 -mx-4 px-6 py-5 mb-4'
        >
          <div className='flex w-2/5'>
            <div className=''>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                />
              </svg>
            </div>
            <div className='flex flex-col justify-between ml-4 flex-grow'>
              <span className='font-bold text-sm'>{item.name}</span>
            </div>
          </div>
          <div className='flex justify-center w-1/5'>
            <svg
              className='fill-current text-gray-600 w-3 cursor-pointer'
              viewBox='0 0 448 512'
              onClick={() => onQuantityChange(item.name, item.quantity - 1)}
            >
              <path d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' />
            </svg>
            <input
              className='mx-2 border text-center w-8'
              type='text'
              value={item.quantity}
              readOnly
            />
            <svg
              className='fill-current text-gray-600 w-3 cursor-pointer'
              viewBox='0 0 448 512'
              onClick={() => onQuantityChange(item.name, item.quantity + 1)}
            >
              <path d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' />
            </svg>
          </div>
          <span className='text-center w-1/5 font-semibold text-sm'>
            {(item.price * item.quantity).toFixed(2)}
          </span>
          <div className='text-red-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
              />
            </svg>
          </div>
        </div>
      ))}
      <div className='text-right pr-4 md:pr-40 mt-5'>
        <div className='mb-2'>
          <span className='font-semibold'>Subtotal:</span>
          <span className='ml-2'>${subtotal.toFixed(2)}</span>
        </div>
        <div className='mb-2'>
          <span className='font-semibold'>Tax:</span>
          <span className='ml-2'>${tax.toFixed(2)}</span>
        </div>
        <div className='mb-2'>
          <span className='font-semibold'>Shipping:</span>
          <span className='ml-2'>${shipping.toFixed(2)}</span>
        </div>
        <div className='mb-2'>
          <span className='font-semibold'>Discount on Total:</span>
          <span className='ml-2'>${discount.toFixed(2)}</span>
        </div>
        <div className='mb-2 bg-blue-300 py-2'>
          <span className='font-semibold'>Total:</span>
          <span className='ml-2'>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

CartView.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      Image: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired
}

export default CartView
