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
  const [activeIndex, setActiveIndex] = useState(images.length > 2 ? 1 : 0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(2);

  const result = [];
  result.push(images[start]);
  result.push(images[activeIndex]);
  result.push(images[end]);

  const max = images.length - 1;

  useEffect(() => {
    setStart(activeIndex === 0 ? max : activeIndex - 1);
    setEnd(activeIndex === max ? 0 : activeIndex + 1);

    console.log(start);
    console.log(activeIndex);
    console.log(end);
  }, [activeIndex]);

  return (
    <div className="c">
      <div className="c-main">
        <img src={images[activeIndex].img} className="c-main-img" alt="" />
      </div>
      <div className="c-footer">
        {result
          .map((item, index) => (
            <img
              className={index === 1 ? "c-footer-img-active" : "c-footer-img"}
              alt=""
              key={index}
              src={item.img}
              onClick={() => setActiveIndex(item.ind)}
            />
          ))}
      </div>
    </div>
  );
};

export default Carousel;
