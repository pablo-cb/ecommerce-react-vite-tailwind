import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"

function MyOrders() {
  const context = useContext(ShoppingCartContext);


  return (
    <Layout>
      <span className="mb-4">My Orders</span>
      <div className='flex flex-col-reverse gap-4'>
        {
          context.myOrders.map( (order, index) => (
              <OrdersCard
                key = { index }
                index = { index }
              />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrders