import { IoBagHandle } from "react-icons/io5";
import { SwitchMode } from "../../export";
import { useStateContext } from "../../../Contexts/ContextProvider";
const Cart = () => {
  const { setIsCartOpen, cartProductsTotal } = useStateContext();
  const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  const cartProductsCount = cartProducts.length;

  return (
    <div className="flex gap-8 items-center">
      <SwitchMode />
      <div className="flex justify-between gap-6 items-center">
        <div
          onClick={() => setIsCartOpen(true)}
          className="relative items-center p-2.5 border border-gray-200 hover:bg-primary rounded-full w-12 h-12 flex justify-center duration-150 cursor-pointer"
        >
          {<IoBagHandle size={50} />}

          <span className="absolute bg-primary w-5 h-5 rounded-full text-center translate-x-4 translate-y-[-20px] text-[13px] leading-[22px]">
            {cartProductsCount}
          </span>
        </div>
        <div>
          <p>My cart :</p>
          <p>${cartProductsTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
