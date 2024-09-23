import { FaTrashCan } from "react-icons/fa6";
import { useStateContext } from "../../Contexts/ContextProvider";

export default function CartProduct({ product }) {
  const { setUpdate } = useStateContext();
  function removeFromCart(product) {
    const products = JSON.parse(localStorage.getItem("cartProducts"));
    localStorage.setItem(
      "cartProducts",
      JSON.stringify(products.filter((item) => item.id !== product.id)),
    );
    setUpdate((prev) => !prev);
  }
  return (
    <div className="flex justify-between items-center gap-4 ">
      <img
        src={product.images && product.images[0].image}
        width="100px"
        height="100px"
        alt="product"
      />
      <p className="font-bold ">
        ${product.title}
        <span className="block font-thin my-1.5">${product.price}</span>
      </p>

      <FaTrashCan
        onClick={() => removeFromCart(product)}
        className="hover:scale-110 fa-solid fa-trash-can text-2xl hover:text-dark_red duration-150 mr-3 cursor-pointer"
      />
    </div>
  );
}
