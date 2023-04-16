import { useState } from "react";
import { getIcons, servicesData } from "../../data";
import Header from "../Header";
import { Element } from "react-scroll";

const Services = () => {
  const [currentItem, setCurrentItem] = useState(null);

  return (
    <Element id="services" className="bg-primaryBackground pt-10 pb-12  lg:pt[40px] lg:pb[40px]">
      <div className="container mx-auto">
        <Header title={"Our Services"} />
        <div className="flex flex-wrap">
          {servicesData.map((item, index) => (
            <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                onMouseEnter={() => setCurrentItem(index)}
                onMouseLeave={() => setCurrentItem(null)}
                className={`cursor-pointer 
                            ${
                              currentItem === index
                                ? "bg-hoverBg"
                                : "bg-secondaryBackground"
                            }
                            mb-8 rounded-[20px] p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 transform hover:translate-y-2 transitio duration-300n: ;
                            `}
              >
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                    {getIcons(currentItem === index ? "#fff" : "#f9004d")[index]}
                </div>
                <h4 className="text-textColor mb-3 text-xl font-semibold">{item.title}</h4>
                <p className={currentItem === index ? "text-textColor" : "text-textSecondary"}>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Services;
