import { useContext } from "react";
import DataContext from "./DataContext";
import { IoIosAdd } from "react-icons/io";

const Cart = () => {
    const { state, calculateTotalPrice, handleCart, handleRemove } = useContext(DataContext);


    return (
        <div
            id="cart-container"
            className='flex justify-start flex-col md:flex-row gap-2 items-center'>

            <ul
                id="cart-ul"
                className="flex justify-start p-3 flex-col items-center md:w-[65%] w-[100%]">
                {state.products.map(item => (
                    <li key={item.id} className="flex justify-around flex-row w-[100%] bg-slate-100 gap-4 p-2 rounded-xl mt-4 hover:bg-slate-200">
                        <img src={item.src} alt={item.title.item} style={{ width: 'fit', height: '100px' }} />
                        <div>
                            <p className='text-sm font-bold my-2'>{item.title.item}</p>
                            <p className='text-l font-semibold'>Weight: {item.title.weight}</p>
                            <p className='text-l font-semibold'>Price: {item.title.price} Kshs</p>
                        </div>
                        <div className="flex justify-between flex-row mt-10 gap-4">
                            <div className="flex justify-start gap-3 py-4 px-2 bg-yellow-400 h-[44px] sm:h-[48px] rounded-lg font-semibold items-center cursor-pointer hover:bg-yellow-300"
                                onClick={() => handleCart(item.id)}
                            >
                                <IoIosAdd

                                    className="w-[25px] text-white font-bold bg-blue-400 h-[25px] rounded-full"
                                /><p className="py-2">Add Cart</p>
                            </div>

                        </div>
                    </li>
                ))}
            </ul>

            <div
                id="cart-div"
                className='md:w-[35%] flex flex-col bg-yellow-400 rounded-l h-[100vh] mt-7 w-[100%] mb-5'>
                <h3 className='text-center my-4 font-extrabold font-serif capitalize'>Items in my Cart</h3>
                <div className='grid grid-cols-4 gap-4 w-[100%] px-4'>
                    <p className='font-bold'>Item</p>
                    <p className='font-bold'>Price</p>
                    <p className='font-bold'>Quantity</p>

                </div>
                <div className='w-[100%] flex flex-col mb-5 px-4'>
                    {state.cartItems.length > 0 ? (
                        state.cartItems.map(item => (
                            <div key={item.id} className='grid grid-cols-4 gap-4 w-[100%] items-center mt-3 mb-2'>
                                <img src={item.src} alt={item.title.item} className='w-fit h-[50px] rounded-lg' />
                                <p className='font-semibold'>{item.title.price}/=</p>
                                <p className='font-semibold'>{item.quantity}</p>
                                <button className="p-2 bg-blue-500 rounded-lg text-white hover:bg-blue-400 hover:underline" onClick={() => handleRemove(item.id)}>Remove</button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-black-600 font-bold mt-8">Your cart is empty</p>
                    )}
                </div>
                <hr />
                <div className="px-4">
                    <p className="px-4 mt-5 text-center font-bold">TOTAL PRICE: {calculateTotalPrice()}/= Kshs</p>
                </div>
            </div>

        </div>
    );
};

export default Cart;