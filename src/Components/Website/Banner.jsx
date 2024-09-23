import { Link } from "react-router-dom";

export default function Banner({ imgSrc, href, className }) {
  return (
    <div className="relative glass_hover_parent h-full">
      <div className="glass_hover"></div>
      <Link
        className={`z-20 absolute h-full w-full top-0 left-0 opacity-0`}
        href={href}
      ></Link>
      <img className={className} src={imgSrc} alt="" />
    </div>
  );
}
