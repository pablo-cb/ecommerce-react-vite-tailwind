import { useRoutes,BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from "../../Context"

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import ProductDetail from '../../Components/ProductDetail'
import ShoppingCart from '../../Components/ShoppingCart'
import './App.css'


// AppRoutes send the information of each page depending where am I
const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/all', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> }, // * = any other
  ])

  return routes
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <ProductDetail />
        <ShoppingCart/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App