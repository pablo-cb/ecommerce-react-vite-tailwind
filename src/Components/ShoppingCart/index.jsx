import React from 'react'
import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import ItemsShoppingCart from "../ItemsShoppingCart"
import './index.css'

function ShoppingCart() {
    const context = useContext(ShoppingCartContext);

    return (
        <aside className= {`${ context.isShoppingCartOpen ? 'block' : 'hidden'} product-detail fixed right-0 m-8 p-4 border bg-white border-black rounded-lg`}>
            <div className='flex justify-between mb-4'>
                <span className='text-lg'>Shopping Cart</span>
                <XMarkIcon onClick={context.closeShoppingCart} className='h-6 w-6 cursor-pointer'></XMarkIcon>
            </div>
            <div>
                {
                    context.cartProducts.map(product => (
                        <ItemsShoppingCart
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
        </aside>
    )
}

export default ShoppingCart
