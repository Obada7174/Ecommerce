import { BsCurrencyDollar } from "react-icons/bs";

import { GoDotFill } from "react-icons/go";
import { DashButton } from "../../Components/export";
// import { earningData, SparklineAreaData, ecomPieChartDat } from "../../data/dummy";
import { useDashboardContext } from "../../Contexts/DashboardContext";
import heroPhoto from "../../data/heroPhoto.png";
// import Calendar from "./Calendar";

export default function Ecommerce() {
  const { currentColor } = useDashboardContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3  bg-no-repeat bg-right bg-contain"
          style={{ backgroundImage: `url(${heroPhoto})` }}
        >
          <div className="flex justify-between items-center ">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl"> $8783.342</p>
            </div>
          </div>
          <div className="mt-6">
            <DashButton
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap gap-1 justify-center items-center">
          {/* {earningData.map((item) => {
            return (
              <div
                className=" bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl "
                key={item.title}
              >
                <button
                  style={{
                    backgroundColor: item.iconBg,
                    color: item.iconColor,
                  }}
                  className="opacity-[0.9] p-4 text-2xl rounded-full hover:drop-shadow-lg "
                >
                  {item.icon}
                </button>

                <p className="items-end mt-3">
                  <span className="font-semibold text-lg ">{item.amount}</span>
                  <span
                    className={` ${
                      item.percentage[0] === "-"
                        ? "text-red-600 "
                        : "text-green-600"
                    } text-sm ml-2`}
                  >
                    {item.percentage}
                  </span>
                </p>

                <p className="text-sm text-gray-400 mt-1">{item.title}</p>
              </div>
            );
          })} */}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                {/* <SparkLine
                  currentColor={currentColor}
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  // data={SparklineAreaData}
                  color={currentColor}
                /> */}
              </div>
              <div className="mt-10">
                <DashButton
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>{/* <Stacked width="320px" height="360px" /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
