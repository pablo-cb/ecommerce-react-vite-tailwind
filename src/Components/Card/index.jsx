import { useContext } from "react"
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"


const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  // Adding Product to Cart when needed
  const addProductsToCart = (event, productData) => {
    //stopProgration helps to avoid that the product detail opens up when the user clicks the plus icon
    event.stopPropagation()
    context.openShoppingCart()
    context.setCount(context.count + 1);

    // Looking if the product already exists in the Shopping Cart

    const searchValue = productData.id;
    const doesExist = context.cartProducts.some(item => item.id === searchValue);
    
    if (doesExist) {
      // If the item already exists, update its amount
      const updatedCartProducts = context.cartProducts.map(item => {
        if (item.id === searchValue) {
          // Update the amount property
          return { ...item, amount: item.amount + 1 };
        }
        return item; // Return other items unchanged
      });

      context.setCartProducts(updatedCartProducts);
    } else {
      // If the item doesn't exist, add it with amount: 1
      context.setCartProducts([...context.cartProducts, {...productData, amount: 1}]);
    }

    context.closeProductDetail()
  }

  return (
    <div
      onClick={ () => {
        context.closeShoppingCart()
        context.setProductDetail(context.openProductDetail)
        context.setProductDetailDisplay(data.data)
      }}
      className="bg-gray-100 cursor-pointer w-56 h-60 rounded-lg"
      >
        {/* Figure contains the image, label and add button */}
        {/* Figure need to be relative because their elements are going to be positioned in an absolute position */}
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category.name}</span>
            <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt={data.data.title} />
            <div
              className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
              onClick={(event) => addProductsToCart(event, data.data)}>
              <PlusIcon className='h-6 w-6 cursor-pointer'></PlusIcon>
            </div>
        </figure>
        {/* P contains Name and Price tag */}
        <p className="flex justify-between p-1 items-center">
            <span className="text-sm font-light">{data.data.title}</span>
            <span className="text-lg font-medium">${data.data.price}</span>
        </p>
    </div>
  )
}

export default Card