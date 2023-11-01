import React, { useState } from "react";
import digitalMarketing from "../assets/digitalMarketing.png";
import socialmediamarketing from "../assets/socialmediamarketing.png";
import WebDev from "../assets/WebDev.png";
import creativeDesign from "../assets/creativeDesign.png";
import seo from "../assets/seo.jpg";
import gAds from "../assets/gAds.jpg";
import localMapSearch from "../assets/localMapSearch.jpg";
import navigation from "../assets/navigation.png";
import chatgpt from "../assets/chatgpt.png";
import instaAuto from "../assets/instaAuto.png";

const Services = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div class="text-center p-10 bg-[#d0effc] max-[448px]:w-[107%] ">
      <h1 class=" mb-10 font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl ">
        Services
      </h1>

      {/* card for larger size */}
      <div class="w-fit bg-[#d0effc] p-3    mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {/* card 1 */}
        <div className="  relative flex w-full max-w-[24rem] lg:max-w-[33rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md max-[780px]:flex-col max-[780px]:justify-center max-[780px]:items-center">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <div className="flex justify-center items-center h-full">
              <img
                src="https://pickyassist.com/en/img/facebook-leads/banner-img.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="p-2 ">
            <div className="p-6 rounded-lg text-start ">
              <h6 className="mb-4 block font-sans font-semibold text-2xl leading-relaxed tracking-normal text-start text-pink-500 antialiased">
                Facebook Automation
              </h6>
              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-start text-black antialiased">
                Schedule Your Service in advanced With Us And Get It Done In
                Time.
              </p>
              <div to="/servicing" className="inline-block" href="#">
                <a
                  href="#_"
                  class="relative inline-block text-lg group items-baseline	 "
                  onClick={() => setShowModal(true)}
                >
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative">Book Now</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card */}
        {/* card 1 */}
        <div className="  relative flex w-full max-w-[24rem] lg:max-w-[33rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md max-[780px]:flex-col max-[780px]:justify-center max-[780px]:items-center">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <div className="flex justify-center items-center h-full">
              <img src={instaAuto} alt="" srcset="" />
            </div>
          </div>
          <div className="p-2 ">
            <div className="p-6 rounded-lg text-start ">
              <h6 className="mb-4 block font-sans font-semibold text-2xl leading-relaxed tracking-normal text-start text-pink-500 antialiased">
                Instagram Automation
              </h6>
              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-start text-black antialiased">
                Schedule Your Service in advanced With Us And Get It Done In
                Time.
              </p>
              <div to="/servicing" className="inline-block" href="#">
                <a
                  href="#_"
                  class="relative inline-block text-lg group items-baseline	 "
                  onClick={() => setShowModal(true)}
                >
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative">Book Now</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card */} {/* card 1 */}
        <div className="  relative flex w-full max-w-[24rem] lg:max-w-[33rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md max-[780px]:flex-col max-[780px]:justify-center max-[780px]:items-center">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <div className="flex justify-center items-center h-full">
              <img
                src="https://cdn3d.iconscout.com/3d/free/thumb/free-social-media-marketing-with-whatsapp-4409954-3679262.png?f=webp"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="p-2 ">
            <div className="p-6 rounded-lg text-start ">
              <h6 className="mb-4 block font-sans font-semibold text-2xl leading-relaxed tracking-normal text-start text-pink-500 antialiased">
                Whatsapp Automation
              </h6>
              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-start text-black antialiased">
                Schedule Your Service in advanced With Us And Get It Done In
                Time.
              </p>
              <div to="/servicing" className="inline-block" href="#">
                <a
                  href="#_"
                  class="relative inline-block text-lg group items-baseline	 "
                  onClick={() => setShowModal(true)}
                >
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative">Book Now</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="  relative flex w-full max-w-[24rem] lg:max-w-[33rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md max-[780px]:flex-col max-[780px]:justify-center max-[780px]:items-center  ">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <div className="flex justify-center items-center h-full">
              <img src={digitalMarketing} alt="" srcset="" />
            </div>
          </div>
          <div className="p-2">
            <div className="p-6 rounded-lg text-start ">
              <h6 className="mb-4 block font-sans font-semibold text-2xl leading-relaxed tracking-normal text-pink-500 antialiased">
                Digital marketing
              </h6>
              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-black antialiased">
                Schedule Your Service in advanced With Us And Get It Done In
                Time.
              </p>
              <div to="/servicing" className="inline-block" href="#">
                <a
                  href="#_"
                  class="relative inline-block text-lg group items-baseline	 "
                  onClick={() => setShowModal(true)}
                >
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative">Book Now</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card  */} {/* card */}
        <div className="  relative flex w-full max-w-[24rem] lg:max-w-[33rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md max-[780px]:flex-col max-[780px]:justify-center max-[780px]:items-center  ">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <div className="flex justify-center items-center h-full">
              <img src={chatgpt} alt="" srcset="" />
            </div>
          </div>
          <div className="p-2">
            <div className="p-6 rounded-lg text-start ">
              <h6 className="mb-4 block font-sans font-semibold text-2xl leading-relaxed tracking-normal text-pink-500 antialiased">
                Chat GPT
              </h6>
              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-black antialiased">
                Schedule Your Service in advanced With Us And Get It Done In
                Time.
              </p>
              <div to="/servicing" className="inline-block" href="#">
                <a
                  href="#_"
                  class="relative inline-block text-lg group items-baseline	 "
                  onClick={() => setShowModal(true)}
                >
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative">Book Now</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card  */}
        <div className="  relative flex w-full max-w-[24rem] lg:max-w-[33rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md max-[780px]:flex-col max-[780px]:justify-center max-[780px]:items-center ">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <div className="flex justify-center items-center h-full">
              <img src={socialmediamarketing} alt="" srcset="" />
            </div>
          </div>
          <div className="p-2">
            <div className="p-6 rounded-lg text-start ">
              <h6 className="mb-4 block font-sans font-semibold text-2xl leading-relaxed tracking-normal text-pink-500 antialiased">
                Social media marketing
              </h6>
              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-black antialiased">
                Schedule Your Service in advanced With Us And Get It Done In
                Time.
              </p>
              <div to="/servicing" className="inline-block" href="#">
                <a
                  href="#_"
                  class="relative inline-block text-lg group"
                  onClick={() => setShowModal(true)}
                >
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative">Book Now</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card  */}
        <div className="  relative flex w-full max-w-[24rem] lg:max-w-[33rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md max-[780px]:flex-col max-[780px]:justify-center max-[780px]:items-center ">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <div className="flex justify-center items-center h-full">
              <img src={WebDev} alt="" srcset="" />
            </div>
          </div>
          <div className="p-2">
            <div className="p-6 rounded-lg text-start ">
              <h6 className="mb-4 block font-sans font-semibold text-2xl leading-relaxed tracking-normal text-pink-500 antialiased">
                Website Development
              </h6>
              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-black antialiased">
                Schedule Your Service in advanced With Us And Get It Done In
                Time.
              </p>
              <div to="/servicing" className="inline-block" href="#">
                <a
                  href="#_"
                  class="relative inline-block text-lg group"
                  onClick={() => setShowModal(true)}
                >
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative">Book Now</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card  */}
        <div className="  relative flex w-full max-w-[24rem] lg:max-w-[33rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md max-[780px]:flex-col max-[780px]:justify-center max-[780px]:items-center ">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <div className="flex justify-center items-center h-full">
              <img src={creativeDesign} alt="" srcset="" />
            </div>
          </div>
          <div className="p-2">
            <div className="p-6 rounded-lg text-start ">
              <h6 className="mb-4 block font-sans font-semibold text-2xl leading-relaxed tracking-normal text-pink-500 antialiased">
              Creative design
              </h6>
              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-black antialiased">
                Schedule Your Service in advanced With Us And Get It Done In
                Time.
              </p>
              <div to="/servicing" className="inline-block" href="#">
                <a
                  href="#_"
                  class="relative inline-block text-lg group"
                  onClick={() => setShowModal(true)}
                >
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative">Book Now</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card  */}
        <div className="  relative flex w-full max-w-[24rem] lg:max-w-[33rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md max-[780px]:flex-col max-[780px]:justify-center max-[780px]:items-center ">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <div className="flex justify-center items-center h-full">
              <img src={seo} alt="" srcset="" />
            </div>
          </div>
          <div className="p-2">
            <div className="p-6 rounded-lg text-start ">
              <h6 className="mb-4 block font-sans font-semibold text-2xl leading-relaxed tracking-normal text-pink-500 antialiased">
                SEO Services
              </h6>
              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-black antialiased">
                Schedule Your Service in advanced With Us And Get It Done In
                Time.
              </p>
              <div to="/servicing" className="inline-block" href="#">
                <a
                  href="#_"
                  class="relative inline-block text-lg group"
                  onClick={() => setShowModal(true)}
                >
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative">Book Now</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card  */}
        <div className="  relative flex w-full max-w-[24rem] lg:max-w-[33rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md max-[780px]:flex-col max-[780px]:justify-center max-[780px]:items-center ">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <div className="flex justify-center items-center h-full">
              <img src={gAds} alt="" srcset="" />
            </div>
          </div>
          <div className="p-2">
            <div className="p-6 rounded-lg text-start ">
              <h6 className="mb-4 block font-sans font-semibold text-2xl leading-relaxed tracking-normal text-pink-500 antialiased">
                Google Ads
              </h6>
              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-black antialiased">
                Schedule Your Service in advanced With Us And Get It Done In
                Time.
              </p>
              <div to="/servicing" className="inline-block" href="#">
                <a
                  href="#_"
                  class="relative inline-block text-lg group"
                  onClick={() => setShowModal(true)}
                >
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative">Book Now</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card  */}
        <div className="  relative flex w-full max-w-[24rem] lg:max-w-[33rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md max-[780px]:flex-col max-[780px]:justify-center max-[780px]:items-center ">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <div className="flex justify-center items-center h-full">
              <img src={navigation} alt="" srcset="" />
            </div>
          </div>
          <div className="p-2">
            <div className="p-6 rounded-lg text-start ">
              <h6 className="mb-4 block font-sans font-semibold text-2xl leading-relaxed tracking-normal text-pink-500 antialiased">
                Local Google Map SEO
              </h6>
              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-black antialiased">
                Schedule Your Service in advanced With Us And Get It Done In
                Time.
              </p>
              <div to="/servicing" className="inline-block" href="#">
                <a
                  href="#_"
                  class="relative inline-block text-lg group"
                  onClick={() => setShowModal(true)}
                >
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative">Book Now</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end card for larger size */}

      {/* Modal */}

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
                  <div class="flex justify-center  px-8  text-blueGray-500 text-lg leading-relaxed ">
                    <form class="max-w-2xl">
                      <div class="flex flex-wrap border shadow rounded-lg p-3 dark:bg-gray-600">
                        <div class="flex flex-col gap-2 w-full border-gray-400">
                          <div>
                            <label class="text-gray-600 dark:text-gray-400">
                              Name
                            </label>
                            <input
                              class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                              type="text"
                            />
                          </div>

                          <div>
                            <label class="text-gray-600 dark:text-gray-400">
                              Number
                            </label>
                            <input
                              class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                              type="text"
                            />
                          </div>

                          <div>
                            <label class="text-gray-600 dark:text-gray-400">
                              Email
                            </label>
                            <input
                              class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                              type="text"
                            />
                          </div>

                          <div>
                            <label class="text-gray-600 dark:text-gray-400">
                              Message
                            </label>
                            <textarea
                              class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                              name="bio"
                            ></textarea>
                          </div>
                          <div class="flex justify-end"></div>
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
    </div>
  );
};

export default Services;
