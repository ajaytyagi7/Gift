import { enqueueSnackbar } from "notistack";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')));

    const addItem = (item) => {
        const existingItem = cartItems.find((cartItem) => cartItem._id === item._id);
        if (existingItem) {
            const updatedCartItems = cartItems.map((cartItem) =>
                cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
            setCartItems(updatedCartItems);
            enqueueSnackbar('Item quantity updated', { variant: 'success' });
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
            enqueueSnackbar('Item added to cart', { variant: 'success' });
        }
        // console.log(cartItems);
        // localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    const addQty = (id) => {
        const updatedCartItems = cartItems.map((cartItem) =>
            cartItem._id === id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        setCartItems(updatedCartItems);
        enqueueSnackbar('Item quantity updated', { variant: 'success' });
    }

    const checkItemExists = (id) => {
        return cartItems.some((cartItem) => cartItem._id === id);
    }

    useEffect(() => {
        const first = localStorage.getItem('cart');
        if (first) {
            setCartItems(JSON.parse(first));
        }
    }, [])

    useEffect(() => {
        console.log(cartItems);
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    const removeItem = (id) => {
        const updatedCartItems = cartItems.filter((cartItem) => cartItem._id !== id);
        setCartItems(updatedCartItems);
        enqueueSnackbar('Item removed from cart', { variant: 'success' });
    };

    const getcartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }




    console.log(cartItems);

    return <CartContext.Provider value={{ cartItems, setCartItems, addItem, addQty, checkItemExists,removeItem,getcartTotal}}>
        {children}
    </CartContext.Provider>
};

const useCartContext = () => useContext(CartContext);

export default useCartContext;