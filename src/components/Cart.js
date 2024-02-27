import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const cartItems = useSelector((store) => store.cart.items);// efficient way

    // bad way as anything changes in the store our component gets affected. 
    // const store = useSelector((store) => store);
    // const cartItems = store.cart.items;

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-semibold">Cart</h1>
            <div className="text-right">
                <button className="font-semibold bg-black text-white p-2 px-3 rounded-lg"
                    onClick={handleClearCart}>clear cart</button>
            </div>
            <div className="w-1/2 m-auto">
                {cartItems.length === 0 && <h1>Your cart is empty. Please add items!</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart; 