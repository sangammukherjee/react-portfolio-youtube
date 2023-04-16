import Header from "../Header";
import { teamData, teamSocialIcons } from "../../data";
import { Element } from "react-scroll";

const Team = () => {
  return (
    <Element id="team" className="bg-primaryBackground pt-10 pb-12  lg:pt[40px] lg:pb[40px]">
      <div className="container mx-auto">
        <Header title={"Our Team"} />
        <div className="flex flex-wrap">
          {teamData.map((item) => (
            <div className="cursor-pointer w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
              <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                <div className="shadow-md bg-white overflow-hidden">
                  <div className="w-full flex justify-center">
                    <div className="h-96">
                      <img
                        className="object-cover h-full w-full shadow-md"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <label className="font-bold text-3xl text-center pb-1">{item.name}</label>
                    <p className="text-gray-800 text-sm ">{item.position}</p>
                    <p className=" text-gray-600 pt-3 font-normal">{item.role}</p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      {teamSocialIcons.map((iconItem, index) => (
                        <a className="mx-5" href="javascript:void(0)" key={index}>{iconItem}</a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Team;
