import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"

const ItemsShoppingCart = (props) => {
  const { id, title, imageUrl, price, amount } = props;
  const context = useContext(ShoppingCartContext);


  const removeItemById = (id) => {

    // if the product amount is more than 1, reduces the number, else, remove the product from the shopping Cart
    const updatedCartProducts = context.cartProducts.map(item => {
      if (item.id === id) {
        if (item.amount > 1) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return null;
        }
      }
      return item;
    }).filter(Boolean); // Filter out null values (items with amount 1)
  
    context.setCartProducts(updatedCartProducts);
  };

  return (
    <div className="flex justify-between items-center mb-3">
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-large'>(x{amount})</p>
        <p className='text-lg font-medium'>{price}</p>
        <XMarkIcon
          onClick={()=>removeItemById(id)}
          className='h-6 w-6 text-black cursor-pointer'
        ></XMarkIcon>
      </div>
    </div>
  )
}

export default ItemsShoppingCart