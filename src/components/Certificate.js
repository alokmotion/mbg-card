import React from "react";
import certificate1 from "../assets/certificate1.jpg";
import certificate2 from "../assets/certificate2.jpg";

const Certificate = () => {
  return (
    <>
      <div class="container h-screen relative flex flex-col   max-w-6xl px-10 mx-auto xl:px-0 mt-12">
        <h2 class="mb-12  text-center  text-gray-900 font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl ">
          Government Funded Certificate
        </h2>
        <p class="mb-3 text-lg  flex justify-between text-gray-500">
          MBG CARD proudly showcases its Government of India-funded
          certificates, exemplifying our commitment to India's digital
          transformation. The first certificate, backed by a substantial
          ₹10,65,000 grant, recognizes our exceptional contributions to Central
          India's digital evolution. The second certificate, valued at ₹41,000,
          underscores our mission to provide accessible digital solutions to
          businesses of all sizes. These certificates represent the trust,
          recognition, and support bestowed upon us by the Government of India.
          We are determined to utilize these resources to advance our mission,
          empowering businesses with innovative digital marketing and automation
          solutions. Join us in this transformative journey and elevate your
          business in the digital age.
        </p>
        <div class="w-full mt-10  ">
          <div class="flex flex-col w-full mb-10 sm:flex-row">
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div class="relative h-full ml-0 mr-0 sm:mr-10">
                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                  <figure class="max-w-lg">
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src={certificate1}
                      alt="image description"
                    />
                    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                      verified by govt of india
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div class="w-full  sm:w-1/2">
              <div class="relative h-full ml-0 md:mr-10">
                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                <div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                  <figure class="max-w-lg">
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src={certificate2}
                      alt="image description"
                    />
                    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                      verified by govt of india
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="flex flex-col w-full mb-5 sm:flex-row">
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div class="relative h-full ml-0 mr-0 sm:mr-10">
                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                  <div class="flex items-center -mt-1">
                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                      Project Audit
                    </h3>
                  </div>
                  <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                    ------------
                  </p>
                  <p class="mb-2 text-gray-600">
                    A Project Audit is a formal review of a project, which is
                    intended to assess the extent up to which project management
                    standards are being upheld.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div class="relative h-full ml-0 mr-0 sm:mr-10">
                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                  <div class="flex items-center -mt-1">
                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                      Hacking / RE
                    </h3>
                  </div>
                  <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                    ------------
                  </p>
                  <p class="mb-2 text-gray-600">
                    A security hacker is someone who explores methods for
                    breaching defenses and exploiting weaknesses in a computer
                    system or network.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-1/2">
              <div class="relative h-full ml-0 md:mr-10">
                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                  <div class="flex items-center -mt-1">
                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                      Bot/Script Development
                    </h3>
                  </div>
                  <p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                    ------------
                  </p>
                  <p class="mb-2 text-gray-600">
                    Bot development frameworks were created as advanced software
                    tools that eliminate a large amount of manual work and
                    accelerate the development process.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Certificate;
