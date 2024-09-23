import { Link } from "react-router-dom";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FooterData } from "../../data/dummy";
export default function MainFooter() {
  return (
    <footer className="bg-[#36404e] pt-8 pb-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="space-y-6">
            <img
              src={require("../../images/logo-white.png")}
              alt="Logo"
              className="h-12 mr-4 object-contain"
              width={200}
            />
            <div className="flex gap-3 items-center">
              <TfiHeadphoneAlt className="text-[4rem] text-primary " />
              <div className="font-bold text-lg">
                <p className="text-white">Hotline Free : 24/24</p>
                <p className="text-primary">(+100) 123 456 789</p>
              </div>
            </div>
          </div>
          {/* FAQs & Help */}
          {FooterData.map((data, index) => (
            <div key={index}>
              <h4 className="font-bold text-white mb-3">{data.title}</h4>
              <ul>
                {data.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={`${link.url}`}
                      className="text-[#87919d] hover:text-white duration-150"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center border-t border-[#87919d] pt-4">
          <p className="text-[#87919d]">
            &copy; 2024 TOPICO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
