import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../OrderCard"
import './index.css'

function ShoppingCart() {
    const context = useContext(ShoppingCartContext);
    
    const myOrdersCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: context.totalToPay(context.cartProducts)
          }
        context.setMyOrders([...context.myOrders, orderToAdd])
        context.setCartProducts([]);
        context.closeShoppingCart();
    }

    return (
        <aside className= {`${ context.isShoppingCartOpen ? 'flex' : 'hidden'} flex-col shopping-cart fixed right-0 m-8 p-4 border bg-white border-black rounded-lg`}>
            <div className='flex justify-between mb-4'>
                <span className='text-lg'>Shopping Cart</span>
                <XMarkIcon onClick={context.closeShoppingCart} className='h-6 w-6 cursor-pointer'></XMarkIcon>
            </div>
            <div className='overflow-y-scroll'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                        amount={product.amount}
                        handleDelete={true}
                        />
                    ))
                }
            </div>
            <div className='pt-1'>
                <div className='flex justify-between'>
                    <span>Total</span>
                    <span className='text-lg font-bold'>${context.totalToPay(context.cartProducts)}</span>
                </div>
                <Link to="/my-order">                
                    <button
                        onClick={myOrdersCheckout}
                        className='w-full bg-black rounded-md text-white p-2'
                    >Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default ShoppingCart
