import { Latest, LatestSale, TopRated } from "../../Api/Api";
import {
  BackToTop,
  Banners,
  FeaturesSection,
  HomeSidebar,
  MainSlider,
  ProductsSlider,
} from "../../Components/export";

export default function Home() {
  const banners = [
    { imgSrc: require("../../images/banner/banner-1.jpg"), href: "#" },
    { imgSrc: require("../../images/banner/banner-2.jpg"), href: "#" },
    { imgSrc: require("../../images/banner/banner-3.jpg"), href: "#" },
  ];

  const banners2 = [
    { imgSrc: require("../../images/banner/banner-4.jpg"), href: "#" },
    { imgSrc: require("../../images/banner/banner-5.jpg"), href: "#" },
  ];

  const banners3 = [
    { imgSrc: require("../../images/banner/banner-6.jpg"), href: "#" },
    { imgSrc: require("../../images/banner/banner-7.jpg"), href: "#" },
    { imgSrc: require("../../images/banner/banner-8.jpg"), href: "#" },
  ];

  return (
    <div className="">
      <div className="slider container mx-auto flex items-center justify-between pt-5">
        <HomeSidebar />
        <MainSlider />
      </div>
      <FeaturesSection />
      <Banners banners={banners} />
      <ProductsSlider api={Latest} sectionName="Latest" />
      <Banners banners={banners2} />
      <ProductsSlider
        api={LatestSale}
        sectionName="Latest Sale"
        banner={{
          imgSrc: require("../../images/banner/banner-sm-1.jpg"),
          href: "#",
          position: "left",
        }}
      />
      <ProductsSlider
        api={TopRated}
        sectionName="Top Rated"
        banner={{
          imgSrc: require("../../images/banner/banner-sm-2.jpg"),
          href: "#",
          position: "right",
        }}
      />
      <Banners banners={banners3} />
      <BackToTop />
    </div>
  );
}
