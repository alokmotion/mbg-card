import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import digitalMarketing from "../assets/digitalMarketing.png";
import Award1 from "../assets/Award/Award1.jpeg";
import Award2 from "../assets/Award/Award2.jpeg";
import Award3 from "../assets/Award/Award3.jpeg";
import Award4 from "../assets/Award/Award4.jpeg";
import Award5 from "../assets/Award/Award5.jpeg";
import Award6 from "../assets/Award/Award6.jpeg";
import Award7 from "../assets/Award/Award7.jpeg";
import Award8 from "../assets/Award/Award8.jpeg";

const WrapperContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // background-color: #ccc;
`;

const Wrapper = ({ children }) => {
  return <WrapperContainer>{children}</WrapperContainer>;
};

const moveLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MarqueeContainer = styled.div`
  position: relative;
  width: 100vw;
  margin-top: 20px;
  padding: 10px 0;
  background-color: white;
  overflow: hidden;
  &:hover {
    // animation-play-state: paused;
  }
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    // background-image: linear-gradient(
    //   to right,
    //   #ccc,
    //   transparent 20%,
    //   transparent 80%,
    //   #ccc
    );
  }
`;

const MarqueeArea = styled.div`
  display: inline-block;
  white-space: nowrap;
  transform: translateX(-${(props) => props.move}px);
  animation: ${moveLeft} ${(props) => props.time}s linear infinite
    ${(props) => (props.toRight ? " reverse" : "")};
  animation-play-state: running;
`;

const MarqueeItem = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 2em;
`;

const getFillList = (list, copyTimes = 1) => {
  let newlist = [];
  for (let i = 0; i < copyTimes; i++) {
    newlist.push(...list);
  }
  return newlist;
};

const Marquee = ({ images, time, toRight, ...props }) => {
  const marqueeContainer = useRef(null);
  const marqueeArea = useRef(null);
  const [moveLeft, setMoveLeft] = React.useState(0);
  const [showImages, setShowImages] = React.useState(images);
  const [realTime, setRealTime] = React.useState(time);

  useEffect(() => {
    const containerWidth = Math.floor(marqueeContainer.current.offsetWidth);
    const areaWidth = Math.floor(marqueeArea.current.scrollWidth);
    const copyTimes = Math.max(2, Math.ceil((containerWidth * 2) / areaWidth));
    const newMoveLeft = areaWidth * Math.floor(copyTimes / 2);
    const newRealTime =
      time * parseFloat((newMoveLeft / containerWidth).toFixed(2));
    setShowImages(getFillList(images, copyTimes));
    setMoveLeft(newMoveLeft);
    setRealTime(newRealTime);
  }, [images]);

  return (
    <MarqueeContainer ref={marqueeContainer} {...props}>
      <MarqueeArea
        ref={marqueeArea}
        move={moveLeft}
        time={realTime}
        toRight={toRight}
      >
        {showImages.map((image, index) => {
          return (
            <MarqueeItem key={index}>
              <article class="w-[400px] h-[450px] relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-20">
                <img
                  src={image}
                  alt="University of Southern California"
                  class="absolute inset-0 h-full w-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 class="z-10 mt-3 text-3xl font-bold text-white">MBG</h3>
              </article>
            </MarqueeItem>
          );
        })}
      </MarqueeArea>
    </MarqueeContainer>
  );
};

Marquee.propTypes = {
  images: PropTypes.array,
  time: PropTypes.number,
  toRight: PropTypes.bool,
};

Marquee.defaultProps = {
  images: [],
  time: 10,
};

function Awards() {
  // Example image URLs
  const IMAGE_LIST = [
    Award1,
    Award2,
    Award3,
    Award4,
    Award5,
    Award6,
    Award7,
    Award8,
    Award1,
    Award2,
    Award3,
    Award4,
    Award5,
    Award6,
    Award7,
    Award8,
    Award1,
    Award2,
    Award3,
    Award4,
    Award5,
    Award6,
    Award7,
    Award8,
    Award1,
    Award2,
    Award3,
    Award4,
    Award5,
    Award6,
    Award7,
    Award8,
  ];

  return (
    <div className="flex-col justify-center p-6 text-center ">
      <h1 className=" underline  mb-3 font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl ">
        {" "}
        Awards{" "}
      </h1>
      <Wrapper>
        <Marquee images={IMAGE_LIST} time={20} />
      </Wrapper>
    </div>
  );
}

export default Awards;
