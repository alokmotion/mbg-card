import React from "react";
import NewsVid1 from "../assets/News/NewsVid1.mp4";
import NewsVid2 from "../assets/News/NewsVid2.mp4";
import NewsVid3 from "../assets/News/NewsVid3.mp4";

const News = () => {
  return (
    <div className="min-[1024px]:h-[100vh] w-screen flex-col justify-center p- text-center  max-[398px]:w-[100%]  ] ">
      <h1 className="  underline font-sans	 	 mb-10 w-screen text-[#1d1d1d] font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl  ">
        {" "}
        We are in news{" "}
      </h1>

      <div className="p-10  max-[469px]:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {/* Card 1 */}
        <div className="rounded overflow-hidden shadow-lg">
          {/* <img className="w-full" src="/mountain.jpg" alt="Mountain" /> */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-10 ">India News</div>
            <video
              autoPlay
              loop
              muted
              controls
              className="object-contain h-[fit-content] sm:h-80 lg:h-[fit-content] xl:h-112 2xl:h-128 border-10 rounded-lg "
            >
              <source src={NewsVid1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
        {/* Card 2 */}
        <div className="rounded overflow-hidden shadow-lg">
          {/* <img className="w-full" src="/river.jpg" alt="River" /> */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-10 ">News Nation</div>
            <video
              autoPlay
              loop
              muted
              controls
              className="object-contain h-[fit-content] sm:h-80 lg:h-[fit-content] xl:h-112 2xl:h-128 border-10 rounded-lg "
            >
              <source src={NewsVid2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #summer
            </span>
          </div>
        </div>
        {/* Card 3 */}
        <div className="rounded overflow-hidden shadow-lg">
          {/* <img className="w-full" src="/forest.jpg" alt="Forest" /> */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-10 ">Times Now</div>
            <video autoPlay loop muted controls>
              <source src={NewsVid3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #fall
            </span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default News;
