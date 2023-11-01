import React, { useState } from "react";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="min[768px]:p-0 px-10 max-[398px]:w-[min-content]">
      <div className="container flex flex-col-reverse	 justify-center p-6 max-[450px]:p-[0.5rem] mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
            Grow Your Business With{" "}
            <span className="text-violet-400">Chat Automation</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Drive sales, loyalty, and customer satisfaction through chatbot.
            <br className="" />
            Automate your business across all channels.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
        

            <a
              href="#_"
              className="relative px-5 py-3 overflow-hidden  font-medium w-[220px] flex justify-center  text-gray-600 bg-white border border-b-4 border-indigo-500  border-gray-100 rounded-lg shadow-inner group"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                Call Now
              </span>
            </a>

            <a
              href="#_"
              className="relative inline-block px-4 py-2 font-medium group"
              onClick={() => setShowModal(true)}
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Enquire Now
              </span>
            </a>
          </div>
        </div>
        <div className="flex items-center max-[450px]:mt-0  overflow-hidden justify-center p-6 mt-8 lg:mt-0 h-72 max-[413px]:h-[13rem] sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
         

          <a href="#">
            <video
              // width="320"
              // height="240"
              autoPlay
              controls
              className="object-contain h-[fit-content] sm:h-80 lg:h-96 xl:h-112 2xl:h-128 border-10 rounded-lg "
            >
              <source
                // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                src="https://mbgcard.in/wp-content/uploads/Kiku-Sharda-MBGs-Brand-Ambassador-_-Grow-your-Business-with-Digital-Marketing-Growth-Plan.mp4"
                type="video/mp4"
              />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </a>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Please fill The Form
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-red-900 opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex justify-center  px-8  text-blueGray-500 text-lg leading-relaxed ">
                    <form className="max-w-2xl">
                      <div className="flex flex-wrap border shadow rounded-lg p-3 dark:bg-gray-600">
                        <div className="flex flex-col gap-2 w-full border-gray-400">
                          <div>
                            <label className="text-gray-600 dark:text-gray-400">
                              Name
                            </label>
                            <input
                              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                              type="text"
                            />
                          </div>

                          <div>
                            <label className="text-gray-600 dark:text-gray-400">
                              Number
                            </label>
                            <input
                              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                              type="text"
                            />
                          </div>

                          <div>
                            <label className="text-gray-600 dark:text-gray-400">
                              Email
                            </label>
                            <input
                              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                              type="text"
                            />
                          </div>

                          <div>
                            <label className="text-gray-600 dark:text-gray-400">
                              Message
                            </label>
                            <textarea
                              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                              name="bio"
                            ></textarea>
                          </div>
                          <div className="flex justify-end"></div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </section>
  );
};

export default Hero;
