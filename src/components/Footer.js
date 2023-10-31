import React from "react";
import { TypeAnimation } from "react-type-animation";

const Footer = () => {
  return (
    <footer class="font-sans bg-[#213343] py-8 px-10 ">
      <div className="relative">
        <div className="mb-20 flex flex-col gap-4 max-[768px]:hidden ">
          <div className="flex gap-4 items-baseline	  align-baseline">
            <h1 className="mt-0   text-white text-[5em] font-bold  tracking-tight md:text-[5em] xl:text-[5em">
              Start
            </h1>

            <span className="	align-baseline	  ">
              {" "}
              <TypeAnimation
                className=" text-primary  text-[yellow] 	"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Automation",
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Business",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "5em", display: "inline-block" }}
                repeat={Infinity}
              />{" "}
            </span>
          </div>

          <span className=" text-4xl text-white ml-5 ">
            {" "}
            With{" "}
            <span className=" text-[yellow] text-5xl font-bold ">
              MBG Card
            </span>{" "}
          </span>
        </div>

        <div className="absolute  top-4 right-[1rem] max-[768px]:hidden">
          <button
            type="button"
            class="text-white bg-gradient-to-r h-[150px] w-[300px] from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-[16rem] rounded-lg text-4xl px-5 py-2.5 text-center mr-2 mb-2"
          >
            Contact Now
          </button>
        </div>
      </div>

      <div class="grid mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 class="text-[#FFA726] font-semibold text-lg mb-4">Quick Links</h4>
          <ul class="space-y-3">
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-[#FFA726] text-white text-sm"
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-[#FFA726] text-white text-sm"
              >
                Newsroom
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-[#FFA726] text-white text-sm"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-[#FFA726] text-white text-sm"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-[#FFA726] font-semibold text-lg mb-4">Services</h4>
          <ul class="space-y-3">
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-[#FFA726] text-white text-sm"
              >
                Web Development
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-[#FFA726] text-white text-sm"
              >
                Testing Automation
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-[#FFA726] text-white text-sm"
              >
                AWS Development Services
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-[#FFA726] text-white text-sm"
              >
                Mobile App Development
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-[#FFA726] font-semibold text-lg mb-4">Platforms</h4>
          <ul class="space-y-3">
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-[#FFA726] text-white text-sm"
              >
                Hubspot
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-[#FFA726] text-white text-sm"
              >
                Marketo Integration Services
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-[#FFA726] text-white text-sm"
              >
                Marketing Glossary
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-[#FFA726] text-white text-sm"
              >
                UIPath
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-[#FFA726] font-semibold text-lg mb-4">Company</h4>
          <ul class="space-y-3">
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-[#FFA726] text-white text-sm"
              >
                Accessibility
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-[#FFA726] text-white text-sm"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-[#FFA726] text-white text-sm"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="hover:text-[#FFA726] text-white text-sm"
              >
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t text-center border-[#6b5f5f] pt-8 mt-12">
        <p class="text-white text-sm">
          Copyright © 2023
          <a
            href="https://mbgcard.in/"
            target="_blank"
            class="hover:underline mx-1"
          >
            MBGCard
          </a>
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
