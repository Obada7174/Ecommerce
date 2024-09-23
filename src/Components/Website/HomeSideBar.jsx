import { TiThMenu } from "react-icons/ti";

const SidebarItem = ({ label, href }) => (
  <div className="capitalize font-[500] text-[15px] bg-white px-4 py-3 rounded-sm">
    <a className="hover:text-primary duration-150" href={href}>
      {label}
    </a>
  </div>
);

const HomeSidebar = () => {
  const items = [
    { label: "all categories", href: "#" },
    { label: "best seller products", href: "#" },
    { label: "new arrivals", href: "#" },
    { label: "top 10 offers", href: "#" },
    { label: "phones & tablets", href: "#" },
    { label: "electronics & digital", href: "#" },
    { label: "fashion & clothings", href: "#" },
    { label: "jewelry & watches", href: "#" },
    { label: "tv & audio", href: "#" },
  ];

  return (
    <div id="sidebar" className="space-y-1.5 w-[300px]">
      <div className="flex justify-start items-center p-4 bg-white rounded-s gap-3">
        <TiThMenu />
        <h1 className="uppercase font-bold text-[17px]">shop by department</h1>
      </div>
      {items.map((item, index) => (
        <SidebarItem key={index} label={item.label} href={item.href} />
      ))}
    </div>
  );
};

export default HomeSidebar;
