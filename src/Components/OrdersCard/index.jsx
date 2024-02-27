import { useContext } from "react"
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from "../../Context"

const OrdersCard = (props) => {
  const { index } = props;
  const context = useContext(ShoppingCartContext);

  return (

    <Link to={`/my-orders/${index}`}>
        <div className="flex justify-between items-center w-96 p-5 border border-black rounded-lg cursor-pointer">
            <div className="flex flex-col">
                <p>{context.myOrders[index].date} - 10:00pm</p>
                <p className="text-base font-semibold">{context.myOrders[index].totalProducts} Product(s)</p>
            </div>
            <div className="flex items-center gap-1">
                <p className="text-xl font-bold">${context.myOrders[index].totalPrice}</p>
                <ChevronRightIcon className='h-6 w-6 cursor-pointer' ></ChevronRightIcon>
            </div>

        </div>
    </Link>
  )
}

export default OrdersCard