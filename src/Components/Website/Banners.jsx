import Banner from "./Banner";

const Banners = ({ banners }) => {
  return (
    <div className="flex justify-between items-center container mx-auto my-12 gap-4">
      {banners.map((banner, index) => (
        <Banner key={index} {...banner} />
      ))}
    </div>
  );
};

export default Banners;
