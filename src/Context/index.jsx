import { createContext, useState } from "react";

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

    // My Orders

    const [myOrders, setMyOrders] = useState([]);

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
            setMyOrders
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}