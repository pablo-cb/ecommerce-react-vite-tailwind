import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    // Shopping Cart Product Amount
    const [count, setCount]  = useState(0);

    // ProductDetail open/close
    const [isProductDetailOpen, setProductDetail] = useState(false);
    const openProductDetail = () => {setProductDetail(true)}
    const closeProductDetail = () => {setProductDetail(false)}

    // Product Detail - Product to show
    const [productDetailDisplay, setProductDetailDisplay] = useState({});

    // Shopping Cart open/close
    const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
    const openShoppingCart = () => {setIsShoppingCartOpen(true)}
    const closeShoppingCart = () => {setIsShoppingCartOpen(false)}

    // Product Added in the shopping cart
    const [cartProducts, setCartProducts] = useState([]);


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
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
            setCartProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}