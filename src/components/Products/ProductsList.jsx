import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/products/productsAction';

const ProductsList = () => {
  const { products } = useSelector((state) => state.products)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProducts());
  }, [])
  
  console.log(products)

  return (
    <div>
      <h2>Products List</h2>
    </div>
  );
};

export default ProductsList;