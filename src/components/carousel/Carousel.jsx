import React, { useEffect, useState } from "react";
import "./carousel.css";

const Carousel = () => {
  const images = [
    {
      ind: 0,
      img: "https://media.dolcemaster.co.il/products/20220711094122.jpg",
    },
    {
        ind: 1,
        img: "https://media.dolcemaster.co.il/products/20220704134718.jpg",
      },
      {
        ind: 2,
        img: "https://media.dolcemaster.co.il/products/20220713081207.png",
      },
      {
        ind: 3,
        img: "https://media.dolcemaster.co.il/products/20220705122947.jpg",
      },
      {
        ind: 4,
        img: "https://media.dolcemaster.co.il/products/20210106132524.jpg",
      },

  ];
  const max = images.length - 1;
  const [activeIndex, setActiveIndex] = useState(1);
  /* const [activeIndex, setActiveIndex] = useState(images.length > 2 ? 1 : 0); */
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(2);
  const [image, setImage] = useState(images[1].img);
  /* const [images, setImages] = useState(data); */

  console.log(start);
  console.log("activeIndex = " + activeIndex);
  console.log(end);
  console.log(
    images.filter(
      (el) =>
        el === images[start] || el === images[activeIndex] || el === images[end]
    )
  );

  useEffect(() => {
    setStart(activeIndex - 1);
    setEnd(activeIndex + 1);
  }, [activeIndex]);

  return (
    <div className="c">
      <div className="c-main">
        <img src={images[activeIndex].img} className="c-main-img" alt="" />
      </div>
      <div className="c-footer">
        {images
          .filter(
            (el) =>
              el === images[start] ||
              el === images[activeIndex] ||
              el === images[end]
          )
          .map((item, index) => (
            <img
              className={index === activeIndex ? "c-footer-img-active" : "c-footer-img"}
              alt=""
              key={index}
              src={item.img}
              onClick={() => {
                setActiveIndex(item.ind);
              }}
            />
          ))}
      </div>
      <div className="c-footer">
        {images.map((item, index) => (
          <img
            className={index === 1 ? "c-footer-img-active" : "c-footer-img"}
            alt=""
            key={index}
            src={item.img}
            onClick={() => {
              setImage(item);
              setActiveIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
