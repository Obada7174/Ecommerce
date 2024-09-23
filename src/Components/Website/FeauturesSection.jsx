import React from "react";

const FeatureItem = ({ imgSrc, title, description }) => (
  <div className="flex gap-4 items-center justify-center flex-grow">
    <img className="w-[3.5rem]" src={imgSrc} alt={title} />
    <div className="capitalize space-y-1">
      <h3 className="font-bold text-[17px]">{title}</h3>
      <p className="text-[13px]">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      imgSrc: require("../../images/features1.png"),
      title: "free shipping",
      description: "free shipping on all order",
    },
    {
      imgSrc: require("../../images/features2.png"),
      title: "money guarantee",
      description: "30 day money back guarantee",
    },
    {
      imgSrc: require("../../images/features3.png"),
      title: "online support 24/7",
      description: "technical support stand by",
    },
    {
      imgSrc: require("../../images/features4.png"),
      title: "secure payment",
      description: "all payment method are accepted",
    },
    {
      imgSrc: require("../../images/features5.png"),
      title: "member discount",
      description: "upto 40% discount all products",
    },
  ];

  return (
    <section className="container mx-auto bg-white flex justify-between items-center my-6 px-6 py-[18px] gap-10 rounded-sm flex-wrap lg:flex-nowrap">
      {features.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </section>
  );
};

export default FeaturesSection;
