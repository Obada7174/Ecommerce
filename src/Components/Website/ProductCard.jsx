import { Link } from "react-router-dom";
import { FaCartPlus, FaHeart, FaShare } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import { useStateContext } from "../../Contexts/ContextProvider";

const ProductCard = ({ product }) => {
  const { setUpdate } = useStateContext();
  const percentDiscount =
    product.discount && product.discount > 0
      ? Math.floor((product.discount / product.price) * 100)
      : null;

  function addToCart(product) {
    const products = JSON.parse(localStorage.getItem("cartProducts")) || [];
    products.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(products));
    setUpdate((prev) => !prev);
  }
  return (
    <div className="product swiper-slide w-[280px] bg-white shadow-lg !relative p-3 !flex !flex-col !justify-center !items-center gap-4 overflow-hidden !h-full">
      <div className="product-icons !absolute h-full w-[25%] top-0 right-[-25%] duration-300 my-auto flex flex-col justify-center gap-4 z-20 px-3">
        <div
          onClick={() => addToCart(product)}
          id="plus-product"
          className="relative p-5 shadow-md bg-white hover:bg-primary rounded-full w-12 h-12 duration-200 cursor-pointer"
        >
          <FaCartPlus className="fa-solid fa-cart-plus text-xl self-center absolute top-[15px] left-[13px]" />
        </div>
        <div className="relative p-5 shadow-md bg-white hover:bg-primary rounded-full w-12 h-12 duration-200 cursor-pointer">
          <FaHeart className="fa-solid fa-heart text-xl self-center absolute top-[14px] left-[14.5px]" />
        </div>
        <div className="relative p-5 shadow-md bg-white hover:bg-primary rounded-full w-12 h-12 duration-200 cursor-pointer">
          <FaShare className="fa-solid fa-share text-xl self-center absolute top-[15px] left-[16px]" />
        </div>
      </div>

      {percentDiscount && (
        <div className="top-[15px] !self-end z-10 !bg-dark_red text-white text-[13px] px-2 py-1 absolute">
          {percentDiscount}%
        </div>
      )}

      <div className="relative w-64 h-64">
        {product.images && product.images.length > 0 && (
          <>
            <img
              className=" img-main opacity-100 w-full max-h-[16rem]"
              src={product.images[0].image}
              alt="product"
            />
            {product.images.length > 1 && (
              <img
                className="duration-300 img-hover opacity-0 absolute scale-[0.1] w-full top-0 left-0 max-h-[16rem]"
                src={product.images[1].image}
                alt="product-hover"
              />
            )}
          </>
        )}
      </div>

      <p className="text-item_name text-[15px] hover:underline text-center px-3 font-bold capitalize">
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      </p>

      <Rating
        className=""
        value={Number(product.rating)}
        precision={0.5}
        readOnly
      />

      <div className="text-center text-parg space-x-3">
        <span className="font-bold text-primary">
          ${product.price - product.discount}
        </span>
        {product.discount && (
          <span className="text-sm line-through">${product.price}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
