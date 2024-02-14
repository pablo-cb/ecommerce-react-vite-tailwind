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
    const [productDetailDisplay, setProductDetailDisplay] = useState({
        images: [],
        title: '',
        description: ''
    });

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            setProductDetail,
            openProductDetail,
            closeProductDetail,
            productDetailDisplay,
            setProductDetailDisplay
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}