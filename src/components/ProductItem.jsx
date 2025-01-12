// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);
  return (
      <Link className='text-gray-700 cursor-pointer'to={`/product/${id}`}>
          <div className='overflow-hidden'>
              <img className='w-80 h-96 rounded-md hover:scale-125 transition ease-in-out' src={image} alt='Product' />
          </div>
          <p className='pt-3 pb-1 text-sm'>{name}</p>
          <p className='text-sm font-semibold'>{currency}{price}</p>
      </Link>
  )
}

// Add PropTypes to validate props
ProductItem.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default ProductItem