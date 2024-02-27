const ProductDetails = () => {
  return (
    <div className='mt-5 mr-5 mb-5 ml-14 '>
      <div className='p-10  bg-white rounded shadow-sm  card text-grey-darkest'>
        <h1 className='text-2xl pb-3'>Product Details</h1>
        <hr />
        <h3 className='text-lg py-3'>Description</h3>
        <div className='grid grid-cols-3'>
          <p className='col-span-2'>
            {' '}
            Safi syrup is best for purifying the blood. As it contains herbal
            extracts it can cure indigestion, constipation, nose bleeds and acne
            boils. It helps in the removal of the toxins from the blood. It
            improves the complexion and gives you a healthy life
          </p>
        </div>
        <h3 className='text-lg py-3'>Highlights</h3>
        <div>
          <div className='flex justify-start '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='25'
              fill='currentColor'
              className='bi bi-dot '
              viewBox='0 0 16 16'
            >
              <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
            </svg>
            <p className='flex items-end'>
              Safi syrup is known for its best purifying syrup for blood.
            </p>
          </div>
          <div className='flex justify-start '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='25'
              fill='currentColor'
              className='bi bi-dot'
              viewBox='0 0 16 16'
            >
              <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
            </svg>
            <p>It helps in eliminating the toxins from the bloodstream.</p>
          </div>
          <div className='flex justify-start '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='25'
              fill='currentColor'
              className='bi bi-dot'
              viewBox='0 0 16 16'
            >
              <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
            </svg>
            <p>It improves digestion.</p>
          </div>
          <div className='flex justify-start '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='25'
              fill='currentColor'
              className='bi bi-dot'
              viewBox='0 0 16 16'
            >
              <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
            </svg>
            <p>It also helps in indigestion and constipation.</p>
          </div>
        </div>
        <h3 className='text-lg py-3'>Directions for use</h3>
        <div className='grid grid-cols-3'>
          <p className='col-span-2'>
            Adults: Take 2 tablespoons once a day in a glass full of water.
          </p>
        </div>
        <h3 className='text-lg py-3'>Storage</h3>
        <div className='grid grid-cols-3'>
          <p className='col-span-2'>
            Store this syrup at room temperature protected from sunlight, heat,
            and moisture. Keep away from reaching out of children and pets.
            Ensure that the unused medicine is disposed of properly.
          </p>
        </div>
        <h3 className='text-lg py-3'>Administration Instructions</h3>
        <div className='grid grid-cols-3'>
          <p className='col-span-2'>
            Shake the bottle before its use. This syrup can be taken with or
            without food. The quantity consumed should not be lesser or greater
            than the prescribed one.
          </p>
        </div>

        <h3 className='text-lg py-3'>Warning</h3>
        <div className='grid grid-cols-3'>
          <p className='col-span-2'>
            This is not recommended for the pregnant women and lactating
            mothers.
          </p>
        </div>

        <h3 className='text-lg py-3'>Precaution</h3>
        <div className='grid grid-cols-3'>
          <p className='col-span-2'>
            Syrup has to be disposed of properly after 3 years from manufactured
            date and it is not recommended to use after the date.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
