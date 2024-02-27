import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"

const OrderCard = (props) => {
  const { id, title, imageUrl, price, amount, handleDelete } = props;
  const context = useContext(ShoppingCartContext);


  // if the product amount is more than 1, reduces the number, else, remove the product from the shopping Cart
  const removeItemById = (id) => {
    
    const updatedCartProducts = context.cartProducts.map(item => {
      if (item.id === id) {
        if (item.amount > 1) {
          // Reduces the amount in 1
          return { ...item, amount: item.amount - 1 };
        } else {
          return null;
        }
      }
      return item;
    }).filter(Boolean); // Filter out null values (items with amount 1)
  
    context.setCartProducts(updatedCartProducts);
  };

  // Toggle the X icon in order to able/disable the delete action
  let renderXMarkIcon
  if (handleDelete) {
    renderXMarkIcon = <XMarkIcon
      onClick={()=>removeItemById(id)}
      className='h-6 w-6 text-black cursor-pointer'
    ></XMarkIcon>
  }

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
        {renderXMarkIcon}
      </div>
    </div>
  )
}

export default OrderCard