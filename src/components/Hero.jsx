import React from "react";
import { sliderData } from "../assets/data/dummyData";
import { useDispatch, useSelector } from "react-redux";
import { nextSlide, prevSlide } from "../redux/data/Slider";
import { LazyLoadImage } from "react-lazy-load-image-component";

const visibleEl = {
  opacity: "1",
  visibility: "visible",
  height: "600px",
  transition: ".3s",
};
const hiddenEl = {
  opacity: "0",
  visibility: "hidden",
  height: "600px",
  transition: ".3s",
};

const Hero = () => {
  let index = useSelector((state) => state.slider.index);
  let dispatch = useDispatch();
  let fil = sliderData.filter((f)=>{
    return parseInt(f.id) === index;
  })

  return (
    <div className="hero position-relative">
      {fil.map((slide) => {
        return (
          <div
            className={"slide position-relative"}
            style={index === parseInt(slide.id) ? visibleEl : hiddenEl}
            key={slide.id}
          >
            <LazyLoadImage src={slide.img} alt="slider" width={"100%"} height={"100%"} />
            <div
              className="w-100 h-100"
              style={{
                background: "rgb(0 0 0 / 35%)",
                position: "absolute",
                top: "0",
                left: "0",
              }}
            ></div>
            <div
              className="text position-absolute"
              style={{
                zIndex: "3",
                top: "25%",
                left: "50%",
                color: "#fff",
                transform: "translateX(-50%)",
                width: "70%",
              }}
            >
              <h1 style={{ fontSize: "calc(2rem + 2vw)" }}>{slide.text}</h1>
            </div>
          </div>
        );
      })}
      <div
        className="btns position-absolute d-flex justify-content-center w-100 px-3 "
        style={{ top: "90%" }}
      >
        <button
          style={{
            width: "40px",
            background: "rgb(238 236 238 / 60%)",
            border: "none",
          }}
          className="me-3"
          onClick={()=> dispatch(prevSlide())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          style={{
            width: "40px",
            background: "rgb(238 236 238 / 60%)",
            border: "none",
          }}
          onClick={()=> dispatch(nextSlide())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
