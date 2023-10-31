import React from "react";

const Stats = () => {
  return (
    <>
      <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center justify-center ">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg> */}

                <svg
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  enable-background="new 0 0 32 32"
                  viewBox="0 0 32 32"
                  id="smile"
                >
                  <circle cx="16" cy="16" r="13.5" fill="#FFF176"></circle>
                  <path
                    fill="#FFF5A2"
                    d="M4.038,22.244C3.694,21.054,3.5,19.801,3.5,18.5C3.5,11.044,9.544,5,17,5c5.201,0,9.708,2.946,11.963,7.256
		C27.338,6.624,22.155,2.5,16,2.5C8.544,2.5,2.5,8.544,2.5,16C2.5,18.255,3.06,20.375,4.038,22.244z"
                  ></path>
                  <path
                    fill="#E6D96A"
                    d="M29,14.5C29,21.956,22.956,28,15.5,28c-5.664,0-10.505-3.491-12.509-8.436C4.557,25.288,9.78,29.5,16,29.5
		c7.456,0,13.5-6.044,13.5-13.5c0-1.792-0.357-3.5-0.991-5.064C28.82,12.073,29,13.265,29,14.5z"
                  ></path>
                  <path
                    fill="#455A64"
                    d="M16,30C8.28,30,2,23.72,2,16S8.28,2,16,2s14,6.28,14,14S23.72,30,16,30z M16,3
		C8.832,3,3,8.832,3,16s5.832,13,13,13s13-5.832,13-13S23.168,3,16,3z"
                  ></path>
                  <path
                    fill="#455A64"
                    d="M16,25c-5.269,0-6.893-3.647-6.959-3.803c-0.109-0.254,0.009-0.548,0.263-0.657
		c0.251-0.108,0.546,0.008,0.656,0.261l0,0C10.016,20.932,11.414,24,16,24s5.984-3.068,6.041-3.199
		c0.111-0.252,0.406-0.364,0.657-0.259c0.253,0.109,0.37,0.402,0.261,0.655C22.893,21.353,21.269,25,16,25z"
                  ></path>
                  <path
                    fill="#455A64"
                    d="M8.001 22c-.276 0-.5-.224-.5-.5s.224-.5.5-.5c.947 0 1.6-.8 1.606-.809.17-.218.483-.256.702-.085.217.17.256.484.085.702C10.357 20.856 9.446 22 8.001 22zM24.001 22c-1.444 0-2.355-1.144-2.394-1.191-.17-.218-.132-.532.085-.702.217-.169.53-.132.7.084.01.012.661.81 1.608.81.276 0 .5.224.5.5S24.278 22 24.001 22zM23.5 10.999c-.104 0-.208-.032-.297-.098C23.191 10.893 21.957 10 20.001 10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5c2.305 0 3.74 1.055 3.8 1.1.22.165.265.477.101.698C23.804 10.93 23.653 10.999 23.5 10.999zM8.5 11c-.155 0-.307-.071-.405-.206-.163-.223-.113-.536.11-.698C8.268 10.051 9.738 9 12 9c.276 0 .5.224.5.5S12.276 10 12 10c-1.94 0-3.193.896-3.206.904C8.706 10.969 8.603 11 8.5 11z"
                  ></path>
                  <ellipse
                    cx="25"
                    cy="18"
                    fill="#FF8A80"
                    rx="3"
                    ry="2"
                  ></ellipse>
                  <ellipse
                    cx="7"
                    cy="18"
                    fill="#FF8A80"
                    rx="3"
                    ry="2"
                  ></ellipse>
                  <path
                    fill="#455A64"
                    d="M23.5 15.5c-.276 0-.5-.224-.5-.5 0-1.057-.897-1.917-2-1.917s-2 .86-2 1.917c0 .276-.224.5-.5.5S18 15.276 18 15c0-1.608 1.346-2.917 3-2.917s3 1.309 3 2.917C24 15.276 23.776 15.5 23.5 15.5zM13.5 15.5c-.276 0-.5-.224-.5-.5 0-1.057-.897-1.917-2-1.917S9 13.943 9 15c0 .276-.224.5-.5.5S8 15.276 8 15c0-1.608 1.346-2.917 3-2.917s3 1.309 3 2.917C14 15.276 13.776 15.5 13.5 15.5z"
                  ></path>
                </svg>

                <h2 class="title-font font-medium text-3xl text-gray-900">
                  3 Lakh+ Customer
                </h2>
                <p class="leading-relaxed">Happy Listed Clients</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg> */}

                <svg
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.5 47.5"
                  id="city"
                >
                  <defs>
                    <clipPath id="a">
                      <path d="M5 37a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H5z"></path>
                    </clipPath>
                  </defs>
                  <g
                    clip-path="url(#a)"
                    transform="matrix(1.25 0 0 -1.25 0 47.5)"
                  >
                    <path fill="#f4900c" d="M38 0H0v38h38V0Z"></path>
                    <path
                      fill="#485359"
                      d="M11 1v29l4 4h2l4-4V1H11ZM34 26c0 1-1 1-1 1h-7s-1 0-1-1V1h9v25z"
                    ></path>
                    <path
                      fill="#292f33"
                      d="M29 20c0 1-1 1-1 1h-8c-1 0-1-1-1-1V1h10v19zM7 23s0 1-1 1H1V1h6v22z"
                    ></path>
                    <path
                      fill="#292f33"
                      d="M13 17s0 1-1 1H6s-1 .001-1-1V1h8v16zM32 11s0 1 1 1h4V1h-5v10Z"
                    ></path>
                    <path
                      fill="#ffcc4d"
                      d="M11 6H9v2h2V6zm0 8H9v2h2v-2zm-2-4H7v2h2v-2zm10 16h-2v2h2v-2zm0-4h-2v2h2v-2zm-2-4h-2v2h2v-2zm10-1h-2v2h2v-2zm-2-4h-2v2h2v-2zm-2-6h-2v2h2V7zm9 16h-2v2h2v-2zm0-4h-2v2h2v-2z"
                    ></path>
                  </g>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  150+ City
                </h2>
                <p class="leading-relaxed">Served</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 w-[max-content] border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg> */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 290.627 290.627"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                >
                  <g>
                    <g>
                      <rect
                        x="42.188"
                        y="56.25"
                        style={{ fill: "#F9BA48" }}
                        width="159.375"
                        height="206.25"
                      />
                      <path
                        style={{ fill: "#333333" }}
                        d="M215.626,28.125h-38.363c-1.941-5.442-7.097-9.375-13.2-9.375h-14.062v-4.688 C150.001,6.309,143.692,0,135.938,0h-28.125c-7.753,0-14.062,6.309-14.062,14.063v4.688H79.688c-6.103,0-11.259,3.933-13.2,9.375 H28.126c-7.753,0-14.063,6.309-14.063,14.063v234.375c0,7.753,6.309,14.063,14.063,14.063h187.5 c7.753,0,14.063-6.309,14.063-14.063V42.188C229.689,34.434,223.379,28.125,215.626,28.125z M75.001,32.813 c0-2.583,2.105-4.688,4.688-4.688h23.438V14.063c0-2.583,2.105-4.688,4.688-4.688h28.125c-2.583,0,4.688,2.105,4.688,4.688v14.063 h23.438c2.583,0,4.688,2.105,4.688,4.688v14.063c0-2.583,2.105-4.688,4.688-4.688H79.688c-2.583,0-4.688-2.105-4.688-4.688 V32.813H75.001z M220.314,276.563c0,2.587-2.105,4.688-4.688,4.688h-187.5c-2.583,0-4.688-2.1-4.688-4.688V42.188 c0-2.583,2.105-4.688,4.688-4.688h37.5v9.375c0,7.753,6.309,14.063,14.063,14.063h84.375c7.753,0,14.063-6.309,14.063-14.063 V37.5h37.5c2.583,0,4.688,2.105,4.688,4.688v234.375H220.314z"
                      />
                      <path
                        style={{ fill: "#333333" }}
                        d="M173.439,112.5h-46.875v-9.375h14.063V70.313h-37.5v32.813h14.063v9.375H70.313v18.75H56.251 v32.813h37.5V131.25H79.688v-9.375h37.5v9.375h-14.063v32.813h37.5V131.25h-14.063v-9.375h37.5v9.375h-14.061v32.813h14.063v9.375 h-46.875v18.75h-14.063V225h37.5v-32.813h-14.063v-9.375h46.875v-18.75h14.063V131.25h-14.063V112.5H173.439z M112.501,79.688 h18.75V93.75h-18.75V79.688z M84.376,154.688h-18.75v-14.063h18.75V154.688z M131.251,154.688h-18.75v-14.063h18.75V154.688z M131.251,215.625h-18.75v-14.063h18.75V215.625z M178.126,154.688h-18.75v-14.063h18.75V154.688z"
                      />
                      <path
                        style={{ fill: "#333333" }}
                        d="M262.501,32.813c-7.753,0-14.063,6.309-14.063,14.063v9.375v9.375V75v9.375v160.134l14.063,42.188 l14.063-42.188V84.375V75v-9.375V56.25v-9.375C276.564,39.122,270.254,32.813,262.501,32.813z M259.628,248.438h5.742 l-2.869,8.616L259.628,248.438z M267.189,239.063h-9.375V84.375h9.375V239.063z M267.189,75h-9.375v-9.375h9.375V75z M257.814,56.25 v-9.375c0-2.583,2.105-4.688,4.688-4.688c2.583,0,4.688,2.105,4.688,4.688v9.375H257.814z"
                      />
                    </g>
                  </g>
                </svg>

                <h2 class="title-font font-medium text-3xl text-gray-900 " >
                  650+ Business Category
                </h2>
                <p class="leading-relaxed">Listed</p>
              </div>
            </div>

            {/* <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  46
                </h2>
                <p class="leading-relaxed">Places</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
