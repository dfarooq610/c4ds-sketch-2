// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { JUSTICES } from "../services/Justice";
import { useState } from "react";
import JusticeProfile from "./Swiper/JusticeProfile";

const Article = () => {
  const [currentJustice, setCurrentJustice] = useState<string | null>();
  const [partisanIndex, setPartisanIndex] = useState<number | null>(null);
  const [showResults, setShowResults] = useState<boolean>(false);

  return (
    <div>
      <Swiper
        centeredSlides
        className="flex flex-row justify-center"
        grabCursor
        loop
        modules={[Navigation]}
        navigation
        onSlideChange={(swiper) => {
          console.log(swiper.realIndex);
        }}
        initialSlide={0}
        // onSwiper={(swiper) => console.log(swiper.realIndex)}
        // pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={5}
      >
        {JUSTICES.map((justice) => {
          return (
            <SwiperSlide key={justice.name} className="flex flex-row justify-center">
              {({ isActive }) => {
                setCurrentJustice(justice.name);
                return (
                  <JusticeProfile
                    selected={isActive}
                    imageLink={justice.imageLink}
                  />
                );
              }}
            </SwiperSlide>
          );
        })}
        ;
      </Swiper>
    </div>
  );
};

export default Article;
