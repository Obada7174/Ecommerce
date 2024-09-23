import { useStateContext } from "../../Contexts/ContextProvider";
import { IoIosClose } from "react-icons/io";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartProductsTotal } = useStateContext();
  const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  return (
    <div
      id="my_cart"
      className={`z-[1001] duration-700 bg-white flex flex-col justify-between gap-6 p-8 fixed top-0 h-full w-[420px] shadow-2xl ${
        isCartOpen ? "right-0" : "right-[-420px]"
      }`}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold capitalize text-xl">
            my cart
            <span className="ml-2 text-sm font-thin normal-case">
              {`( ${cartProducts.length} items in Cart )`}
            </span>
          </h3>
        </div>

        <IoIosClose
          onClick={() => setIsCartOpen(false)}
          className="hover:bg-primary duration-200 w-10 h-10 text-center rounded-full leading-10 cursor-pointer"
        />
      </div>

      <div
        id="productsCart"
        className="flex-grow py-6 border-y border-border space-y-6 overflow-y-scroll custom-scrollbar"
      >
        {cartProducts.map((product, index) => (
          <CartProduct product={product} key={index} />
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p>Cart Subtotal</p>
          <span className="block text-primary">${cartProductsTotal}</span>
        </div>
        <button className="shadow-lg block uppercase w-full bg-primary p-4 rounded-lg border-[3px] border-primary hover:bg-transparent duration-100">
          proceed to checkout
        </button>
        <button className="shadow-lg block uppercase w-full bg-transparent border-[3px] border-primary p-4 rounded-lg hover:bg-primary duration-100">
          shop more
        </button>
      </div>
    </div>
  );
};

export default Cart;
