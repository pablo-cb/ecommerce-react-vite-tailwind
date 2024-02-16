import React from 'react'
import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import './index.css'

function ProductDetail() {
    const context = useContext(ShoppingCartContext);

    return (
        <aside className= {`${ context.isProductDetailOpen ? 'block' : 'hidden'} product-detail fixed right-0 m-8 p-4 border bg-white border-black rounded-lg`}>
            <div className='flex justify-between'>
                <span className='text-lg'>Detail</span>
                <XMarkIcon onClick={context.closeProductDetail} className='h-6 w-6 cursor-pointer'></XMarkIcon>
            </div>
            <div className='flex flex-col gap-2'>
                <figure>
                    <img src={context.productDetailDisplay.images?.[0]}
                        alt={context.productDetailDisplay.title}
                        className='rounded-lg'
                    /> 
                </figure>
                <span className="text-lg font-medium">{context.productDetailDisplay.title}</span>
                <span className="text-md font-medium">${context.productDetailDisplay.price}</span>
                <span className="text-sm font-light">{context.productDetailDisplay.description}</span>
            </div>
        </aside>
    )
}

export default ProductDetail