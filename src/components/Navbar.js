import React, { useState } from "react";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className=" max-[398px]:w-[max-content]  max-[398px]:gap-[15px]  flex flex-wrap items-center justify-between p-3 px-12 bg-[white] first-line:bg-white bg-opacity-5  shadow-lg ">
      <a href="" class="flex items-center justify-center">
        <img
          class="h-16"
          src="https://mbgcard.in/wp-content/uploads/2021/02/cropped-cropped-cropped-cropped-favicon-1.png"
          alt=""
        />
      </a>

      <div className="flex md:hidden"></div>
      <div className="w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none max-[768px]:hidden ">
        <a
          href="#"
          className="block md:inline-block text-black-900 text-xl  font-serif hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          Home
        </a>
        <a
          href="https://mbgcard.in/career/"
          className="block md:inline-block text-black-900 text-xl  font-serif hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          About
        </a>
        <a
          href="https://mbgcard.in/about-us/ "
          className="block md:inline-block text-black-900 text-xl  font-serif hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          Services
        </a>
        <a
          href="https://mbgcard.in/career/"
          className="block md:inline-block text-black-900 text-xl  font-serif hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          Career
        </a>
        <a
          href="./contact"
          className="block md:inline-block text-black-900 text-xl  font-serif hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          Contact Us
        </a>
      </div>
      <button
        class="group relative h-12 w-48 overflow-hidden rounded-lg bg-[#2563eb] text-lg shadow"
        onClick={() => setShowModal(true)}
      >
        <div class="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span class="relative text-[white] group-hover:text-white   ">
          Demo
        </span>
      </button>

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
    </nav>
  );
}

export default Navbar;
