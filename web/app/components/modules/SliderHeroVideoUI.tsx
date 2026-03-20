import React, { useState } from "react";
import { _localizeField } from "@/app/sanity-api/utils";
import Slider from "../ui/slick-slider";
import { HeroVideo, SliderHeroVideoUI } from "@/app/types/sanity.types";
import HeroVideoComponent from "../ui/HeroVideo";

type Props = {
  input: SliderHeroVideoUI;
};

const SliderItem = ({
  item,
  isCurrent,
}: {
  item: HeroVideo;
  isCurrent: boolean;
}) => {
  return (
    <div className='slide px-sm'>
      <div className='text-red absolute top-1/2 left-1/2  z-10'>
        {isCurrent && "isCurrent"}
        {!isCurrent && "not isCurrent"}
      </div>
      <HeroVideoComponent input={item} paused={!isCurrent} />
    </div>
  );
};

const ModuleSliderHeroVideoUI = ({ input }: Props) => {
  const { items } = input;
  const [index, setIndex] = useState<number>(0);

  const _beforeChange = (oldIndex: number, newIndex: number) => {
    console.log(oldIndex, newIndex);
    setIndex(newIndex);
  };

  return (
    <section className='module module--slider-hero-video-ui'>
      <div className='overlay'>
        <svg
          width='85'
          height='85'
          viewBox='0 0 85 85'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M0 0V85H42.5046C42.5046 29.2763 23.4723 0 0 0Z'
            fill='white'
          />
          <path
            d='M42.5046 0C42.5046 55.7237 61.5369 85 85.0092 85V0H42.5046Z'
            fill='white'
          />
        </svg>
      </div>
      <div className='slider-container -px-sm'>
        <Slider
          settingsOverride={{
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            // slidesToShow: gridSize || 3,
            // slidesToScroll: gridSize || 3,
            dots: false,
            beforeChange: _beforeChange,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  // infinite: true,
                  // dots: true
                },
              },
            ],
          }}>
          {items?.map((item, i) => (
            // <div className='slide px-sm' key={i}>
            //   <HeroVideoComponent input={item} />
            // </div>
            <SliderItem key={i} item={item} isCurrent={i === index} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ModuleSliderHeroVideoUI;
