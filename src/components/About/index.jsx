import Header from "../Header";
import image1 from "../../images/11.svg";
import { aboutMeData } from "../../data";
import { useCountUp } from "react-countup";
import { counterData } from "../../data";
import { Element } from "react-scroll";

const CounterItem = ({ title, counter, measurement }) => {
  return (
    <div className="mb-20 flex flex-col sm:mb-0">
      <h2 className="text-4xl text-center text-textColor mb-2">
        {counter} {measurement}
      </h2>
      <span className="text-md text-center text-textColor">{title}</span>
    </div>
  );
};

const About = () => {
  useCountUp({ ref: "experienceCounter", end: 20, duration: 2 });
  useCountUp({ ref: "githubStarsCounter", end: 10, duration: 2 });
  useCountUp({ ref: "feedbackCounter", end: 30, duration: 2 });
  useCountUp({ ref: "projectsCounter", end: 18, duration: 2 });

  return (
    <Element id="about" className="bg-secondaryBackground pl-3 pr-3 pt-10 pb-12 lg:pt[40px] lg:pb[40px] ">
      <div className="container mx-auto">
        <Header title={"About Me"} />
        <div className="block sm:flex sm:gap-10">
          <div className="sm:overflow-auto w-full lg:w-3/4 sm:w-2/4 md:w-2/4 text-left">
            <img
              src={image1}
              className="rounded-lg "
              alt="About Me Image"
            />
          </div>
          <div className="sm:overflow-auto mt-10 sm:mt-0 md:mt-0 w-full lg:w-3/4 sm:w-2/4 md:w-2/4 text-left">
            {aboutMeData.map((bioDataItem) => (
              <p
                key={bioDataItem.id}
                className="mb-4 text-textSecondary text-lg"
              >
                {bioDataItem.bio}
              </p>
            ))}
            <div className="mt-10 sm:mt-20 shadow-sm">
              <div className="container mx-auto py-3 block sm:flex sm:justify-between items-center">
                {counterData.map((item) => (
                  <CounterItem
                    title={item.title}
                    counter={<span id={item.id} />}
                    measurement={item.measurement}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
