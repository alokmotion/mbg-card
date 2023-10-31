import React from "react";

const Featured = () => {
  return (
    <section className="  px-4 space-y-6 bg-slate-50 py-4 dark:bg-transparent md:py-12 lg:py-[3rem]">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          We Featured In
        </h2>
      </div>

      <div className="mx-auto  grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4">
        {/* Card 1 */}

        <div className="relative overflow-hidden h-[7rem] flex items-center justify-center  place-content-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <img
            className="h-[100%] "
            src="https://mbgcard.in/wp-content/uploads/2021/09/mbglogogoo.png"
          />
        </div>


       

        {/* Card 2 */}

        <div className="relative overflow-hidden h-[7rem] flex items-center justify-center  place-content-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <img
            className="h-[100%] "
            src="https://mbgcard.in/wp-content/uploads/6a00d8341bfae553ef01b8d1594773970c-800wi-removebg-preview.png"
          />
        </div>

        {/* Card 3 */}

        <div className="relative overflow-hidden h-[7rem] flex items-center justify-center place-content-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <img
            className="h-[100%] "
            src="https://mbgcard.in/wp-content/uploads/2022/05/dd-bb-1536x603.png"
          />
        </div>

        {/* Card 4 */}

        <div className="relative overflow-hidden h-[7rem] flex items-center justify-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <img
            className="h-[100%]"
            src="https://mbgcard.in/wp-content/uploads/Razorpay-Partner-Light-1024x489-1.webp"
          />
        </div>

        {/* Card 5 */}

        <div className="relative overflow-hidden h-[7rem] flex items-center justify-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <img
            className="h-[100%]"
            src="https://mbgcard.in/wp-content/uploads/BNIProudMember400-e1688054145904.jpg"
          />
        </div>

         {/* Card 6 */}

         <div className="relative overflow-hidden h-[7rem] flex items-center justify-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <img
            className="h-[100%]"
            src="https://mbgcard.in/wp-content/uploads/GoDaddy_Pro_OH-partner-removebg-preview.png"
          />
        </div>

         {/* Card 7 */}

         <div className="relative overflow-hidden h-[7rem] flex items-center justify-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <img
            className="h-[100%]"
            src="https://mbgcard.in/wp-content/uploads/2021/09/logo-2.png"
          />
        </div>

         {/* Card 8 */}

         <div className="relative overflow-hidden h-[7rem] flex items-center justify-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <img
            className="h-[100%]"
            src="https://mbgcard.in/wp-content/uploads/2022/05/y-1536x768.png"
          />
        </div>

      </div>
    </section>
    

  );
};

export default Featured;


// Awards
