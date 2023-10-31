import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Testimonial.css";
// import Test1 from "../assets/VideoTest/Test1.mp4"

const testimonialData = [
  // {
  //   name: "Happy Customers",
  //   // image: "http://themes.audemedia.com/html/goodgrowth/images/testimonial1.jpg",
  //   content: "Your testimonial content goes here.",
  //   videoLink: Test1,
  // },
];

const Testimonials = () => {
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
  };

  return (
    <div className="flex-col justify-center p-6 text-center">
      <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
        {" "}
        Our Client Testimonials
      </h1>
      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <OwlCarousel
                className="owl-theme  "
                id="customers-testimonials"
                {...options}
              >
                {/* Testimonial 1 */}
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="rounded-full"
                      src="http://themes.audemedia.com/html/goodgrowth/images/testimonial1.jpg"
                      alt=""
                    />
                    <p>
                      Working with MBG Card India Pvt Ltd for our digital
                      marketing needs has been an absolute pleasure and a
                      game-changer for our business. Their expertise and
                      dedication have taken our online presence to new heights,
                      resulting in significant growth and success. From the
                      moment we engaged with MBG Card India Pvt Ltd, it was
                      clear that they were committed to understanding our
                      business and our goals. They took the time to listen,
                      analyze our market, and develop a comprehensive digital
                      marketing strategy that perfectly aligned with our vision.
                    </p>
                  </div>
                  <div className="testimonial-name">Raj koshta</div>
                </div>

                {/* Testimonial 2 */}
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="rounded-full"
                      src="http://themes.audemedia.com/html/goodgrowth/images/testimonial2.jpg"
                      alt=""
                    />
                    <p>
                      The team at MBG Card India Pvt Ltd is a group of highly
                      skilled professionals who excel in their respective
                      fields. They possess an in-depth knowledge of the latest
                      digital marketing trends, and their creativity and
                      attention to detail are truly commendable. They have
                      successfully managed every aspect of our digital marketing
                      campaign, including search engine optimization (SEO),
                      social media marketing, content creation, and
                      pay-per-click (PPC) advertising. Thanks to their efforts,
                      our website's organic traffic has increased substantially,
                      and we have seen a remarkable improvement in our search
                      engine rankings.
                    </p>
                  </div>
                  <div className="testimonial-name">Namo Soni</div>
                </div>

                {/* Testimonial 3 */}
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="rounded-full"
                      src="http://themes.audemedia.com/html/goodgrowth/images/testimonial2.jpg"
                      alt=""
                    />
                    <p>
                      Their strategic social media campaigns have significantly
                      expanded our online reach and engagement, resulting in a
                      larger and more active customer base. Moreover, their
                      compelling content has effectively communicated our
                      brand's message and values to our target audience. What
                      sets MBG Card India Pvt Ltd apart is their unwavering
                      commitment to delivering results. They constantly monitor
                      and analyze our campaign's performance, making data-driven
                      adjustments to optimize our ROI. Their transparent
                      reporting and regular updates have provided us with
                      valuable insights, allowing us to make informed decisions
                      about our digital marketing strategies.
                    </p>
                  </div>
                  <div className="testimonial-name">Sahil ss</div>
                </div>

                {/* video */}

                {testimonialData.map((testimonial, index) => (
                  // 1

                  <div className="item">
                    <div className="shadow-effect">
                      <video controls>
                        <source src={testimonial.videoLink} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="testimonial-name">Raj koshta</div>
                  </div>
                ))}

                {/* Add more testimonial items as needed */}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
