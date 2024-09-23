import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/bundle";

import { Autoplay, Navigation, Mousewheel } from "swiper/modules";
import SwiperCore from "swiper";
import ProductCard from "./ProductCard";
import { Axios } from "../../Api/Axios";
import Skeleton from "@mui/material/Skeleton";
import Banner from "./Banner";

SwiperCore.use([Autoplay, Navigation, Mousewheel]);

const ProductsSlider = ({ api, sectionName, banner }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const uniqueId = `swiper-${Math.random().toString(36).substr(2, 9)}`;
  const isBannerRight = banner && banner.position === "right";

  useEffect(() => {
    Axios.get(`${api}`)
      .then((data) => {
        setProducts(data.data);
      })
      .finally(() => setLoading(false));
  }, [api]);

  return (
    <div className="container mx-auto mySwiper products-swiper overflow-hidden relative">
      <div className="flex capitalize justify-between items-end py-3 border-b border-border">
        <h1 className="text-2xl">
          <div className="inline mr-1.5 font-bold relative after:content-[''] after:bg-primary after:h-[3px] after:w-full after:absolute after:bottom-[-14px] after:left-0">
            {sectionName}
          </div>
          Products
        </h1>
      </div>

      <div className="flex gap-5 pt-3 relative h-96">
        {banner && banner.position === "left" && (
          <div className=" h-full">
            <Banner {...banner} className="object-fill h-full" />
          </div>
        )}

        <Swiper
          spaceBetween={30}
          slidesPerView={banner ? 4 : 5}
          loop={true}
          autoplay={{
            delay: 3500,
            reverseDirection: banner ? banner.position === "right" : true,
          }}
          navigation={{
            nextEl: `.${uniqueId}-next`,
            prevEl: `.${uniqueId}-prev`,
          }}
          mousewheel={{ forceToAxis: true }}
          direction={isBannerRight ? "horizontal" : "horizontal"}
          className="swiper-wrapper flex justify-between items-center py-6"
        >
          {loading
            ? [...Array(banner ? 4 : 5)].map((_, index) => (
                <SwiperSlide key={index}>
                  <Skeleton
                    variant="rectangular"
                    width={280}
                    height={400}
                    className="mx-auto"
                  />
                </SwiperSlide>
              ))
            : products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
        </Swiper>

        {banner && banner.position === "right" && (
          <div className="ml-5">
            <Banner {...banner} className="object-fill h-full" />
          </div>
        )}
      </div>

      <div
        className={`${uniqueId}-prev swiper-button-prev !h-[38px] !absolute !top-[30px] !left-[calc(100%-90px)] bg-primary !text-white font-bold after:!text-[22px] rounded-md !px-4 !py-3`}
      ></div>
      <div
        className={`${uniqueId}-next swiper-button-next !h-[38px] !absolute !top-[30px] !right-0 bg-primary !text-white font-bold after:!text-[22px] rounded-md !px-4 !py-3`}
      ></div>
    </div>
  );
};

export default ProductsSlider;
