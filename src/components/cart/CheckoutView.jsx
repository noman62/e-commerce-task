import { Link } from 'react-router-dom';

const CheckoutView = () => {
  return (
    <div id='summary' className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 sm:px-8 py-10 bg-white m-2 sm:m-4'>
      <h1 className='font-semibold text-2xl border-b pb-8'>Order Summary</h1>
      <div className='flex justify-between mt-10 mb-5'>
        <span className='font-semibold text-sm uppercase'>Items 3</span>
        <span className='font-semibold text-sm'>$135</span>
      </div>
      <div>
        <label className='font-medium inline-block mb-3 text-sm uppercase'>
          Shipping
        </label>
        <select className='block p-2 text-gray-600 w-full text-sm'>
          <option>Standard shipping - $10.00</option>
        </select>
      </div>
      <div className='py-6'>
        <label
          htmlFor='promo'
          className='font-semibold inline-block mb-3 text-sm uppercase'
        >
          Promo Code
        </label>
        <input
          type='text'
          id='promo'
          placeholder='Enter your code'
          className='p-2 text-sm w-full'
        />
      </div>
      <button className='bg-red-500 hover:bg-red-600 px-4 py-2 text-sm text-white uppercase w-full'>
        Apply
      </button>
      <div className='border-t mt-8'>
        <div className='flex font-semibold justify-between py-6 text-sm uppercase'>
          <span>Total cost</span>
          <span>$135</span>
        </div>

        <Link to='/paymentGateway'>
          <button className='bg-indigo-500 font-bold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full'>
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutView;
