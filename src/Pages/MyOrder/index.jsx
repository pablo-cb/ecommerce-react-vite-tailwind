import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"
import Layout from "../../Components/Layout"


function MyOrder() {

  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (index === 'last') index = context.myOrders?.length - 1;

  return (
    <Layout>
      <div>
        <div className='flex mb-4'>
          <Link to="/my-orders">
            <ChevronLeftIcon className='h-6 w-6 cursor-pointer' ></ChevronLeftIcon>
          </Link>
          <span className='flex-1 text-center'>My Order</span>
        </div>
        <div className='flex flex-col w-80'>
            {
              // Takes the last entered order in the array
              context.myOrders?.[index]?.products.map(product => (
                  <OrderCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  imageUrl={product.images}
                  price={product.price}
                  amount={product.amount}
                  />
              ))
            }
        </div>
      </div>
    </Layout>
  )
}

export default MyOrder