import { createContext, useState, useEffect } from "react";
import { apiUrl } from "../API"

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    // Shopping Cart Product Amount
    // const [count, setCount]  = useState(0);
    const count = () => cartProducts.reduce((sum, item) => sum + item.amount, 0);

    // ProductDetail open/close
    const [isProductDetailOpen, setProductDetail] = useState(false);
    const openProductDetail = () => {setProductDetail(true)}
    const closeProductDetail = () => {setProductDetail(false)}

    // Product Detail - Product to show
    const [productDetailDisplay, setProductDetailDisplay] = useState({});

    // Product Added in the shopping cart
    const [cartProducts, setCartProducts] = useState([]);

    // Shopping Cart open/close
    const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
    const openShoppingCart = () => {setIsShoppingCartOpen(true)}
    const closeShoppingCart = () => {setIsShoppingCartOpen(false)}

    // Calculates the total price of the array
    const totalToPay = (arr) => arr.reduce((sum, item) => sum + item.price*item.amount, 0);

    // My Orders historic
    const [myOrders, setMyOrders] = useState([]);

    // API
    const [items, setItems]  = useState(null)

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${apiUrl}/products`)
          const data = await response.json()
          setItems(data)
        } catch (error) {
          console.error(`Oh no, an error: ${error}`)
        }
      }
      fetchData()
    },[])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            isProductDetailOpen,
            setProductDetail,
            openProductDetail,
            closeProductDetail,
            productDetailDisplay,
            setProductDetailDisplay,
            isShoppingCartOpen,
            setIsShoppingCartOpen,
            openShoppingCart,
            closeShoppingCart,
            cartProducts,
            setCartProducts,
            totalToPay,
            myOrders,
            setMyOrders,
            items, 
            setItems
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}