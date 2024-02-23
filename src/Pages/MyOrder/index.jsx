import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"
import Layout from "../../Components/Layout"


function MyOrder() {

  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      My Order
      <div className='overflow-y-scroll'>
          {
            context.myOrders.slice(-1)[0]?.products.map(product => (
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
    </Layout>
  )
}

export default MyOrder