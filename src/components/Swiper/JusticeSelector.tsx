// Import Swiper React components
import Swiper, { Navigation } from "swiper";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import JusticeProfile from "./JusticeProfile";
import { JUSTICES } from "../../services/Justice";

interface JusticeSelectorProps {
  percievedPartisanIndex: number | null;
  onSlideTransition: (swiper: Swiper) => void;
}

const JusticeSelector = ({
  onSlideTransition,
  percievedPartisanIndex,
}: JusticeSelectorProps) => {
  return (
    <SwiperComponent
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        750: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      centeredSlides
      loop
      modules={[Navigation]}
      navigation
      onSlideNextTransitionStart={onSlideTransition}
    >
      {JUSTICES.map((justice) => {
        return (
          <SwiperSlide key={justice.name}>
            {({ isActive }) => {
              return (
                <JusticeProfile
                  selected={isActive}
                  justice={justice}
                  perceivedPartisanIndex={percievedPartisanIndex}
                />
              );
            }}
          </SwiperSlide>
        );
      })}
      ;
    </SwiperComponent>
  );
};

export default JusticeSelector;
