import { Element, scroller } from "react-scroll";
import ParticlesComponent from "../Particles";

export default function Home() {
  function handleNavigate(id) {
    scroller.scrollTo(id, {
      smooth: true,
      duration: 1000,
    });
  }
  return (
    <Element id="home" className="bg-white relative h-height648">
      {/* particles js component */}
      <ParticlesComponent />
      {/* particles js component */}

      <div className="absolute w-full">
        <div className="relative isolate">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-textColor sm:text-6xl">
                Hi, I am Sangam. Front End Developer.
              </h1>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  onClick={() => handleNavigate("portfolio")}
                  className="uppercase text-xl py-4 pr-5 pl-5 font-bold tracking-wide bg-bgRed text-gray-100  rounded-lg  focus:outline-none focus:shadow-outline"
                >
                  See My Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
