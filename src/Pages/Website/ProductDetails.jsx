import { useParams } from "react-router-dom";
import { Axios } from "../../Api/Axios";
import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { FaCartPlus, FaHeart, FaShare } from "react-icons/fa";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [selectedImg, setSelectedImg] = useState(null);
  useEffect(() => {
    Axios.get(`product/${id}`).then((data) => {
      setProduct(data.data[0]);
      setSelectedImg(data.data[0].images[0].image);
      console.log(data.data);
    });
    //  .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {product && (
        <div>
          <div className="bg-white">
            <div className="container mx-auto flex justify-between">
              <div className=" w-2/5">
                <div className=" flex justify-center ">
                  <img
                    src={selectedImg}
                    alt="Product"
                    width={500}
                    className=""
                  />
                </div>
                <div className="flex justify-center gap-4  ">
                  {product &&
                    product.images.map((image, index) => (
                      <img
                        onClick={() => setSelectedImg(image.image)}
                        width={200}
                        src={image.image}
                        alt="product"
                        className="cursor-pointer"
                        key={index}
                      />
                    ))}
                </div>
              </div>
              <div className=" w-3/5 pr-36 flex flex-col justify-center items-start gap-4">
                <p className="text-2xl font-extrabold text-dark mb-1">
                  {product.title}
                </p>
                <div className="flex gap-3">
                  <Rating
                    className="-translate-x-0.5 "
                    value={Number(product.rating)}
                    precision={0.5}
                    readOnly
                  />
                  <span className="font-bold translate-y-[3px] text-dark">
                    {product.rating}
                  </span>
                </div>
                <div className="text-xl text-center text-parg space-x-3">
                  <span className="font-bold text-primary">
                    ${product.price - product.discount}
                  </span>
                  {product.discount && (
                    <span className="text-sm line-through">
                      ${product.price}
                    </span>
                  )}
                </div>
                <div className="font-semibold capitalize text-lg">
                  <span className="text-dark">availibility: </span>
                  <span className="text-primary">in stack</span>
                </div>
                <div className="font-semibold  text-lg">
                  <span className="text-dark">About: </span>
                  <span className="text-primary">{product.About}</span>
                </div>
                <p className="text-parg text-wrap">{product.description}</p>
                <p className="text-xl font-extrabold text-dark">
                  Hurry Up! Limited Quantity
                </p>
                <button className="rounded font-bold flex items-center gap-1 py-2 px-4 bg-primary text-lg text-dark uppercase hover:scale-105 duration-300 hover:text-white cursor-pointer">
                  add to cart
                  <FaCartPlus />
                </button>
                <div className="flex gap-2">
                  <div className="relative p-5 bg-gray-200 hover:bg-primary rounded-full w-12 h-12 duration-200 cursor-pointer">
                    <FaHeart className="fa-solid fa-heart text-xl self-center absolute top-[14px] left-[14.5px]" />
                  </div>
                  <div className="relative p-5 bg-gray-200 hover:bg-primary rounded-full w-12 h-12 duration-200 cursor-pointer">
                    <FaShare className="fa-solid fa-share text-xl self-center absolute top-[14px] left-[16px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
