// Import Swiper React components
import { Swiper as SwiperType, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import JusticeProfile from "./JusticeProfile";
import { JUSTICES } from "../../services/Justice";
import { useRef } from "react";

interface JusticeSelectorProps {
  percievedPartisanIndex: number | null;
  onSlideTransition: (swiper: SwiperType) => void;
}

// useRef for navigation sourced from https://stackoverflow.com/questions/64099383/swiper-react-how-to-create-custom-navigation-pagination-components-using-react
const JusticeSelector = ({
  onSlideTransition: onSlideChange,
  percievedPartisanIndex,
}: JusticeSelectorProps) => {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="flex flex-row space-between justify-center align-middle">
      <button
        className="my-auto mx-4 font-josefin-sans text-7xl bg-stone-400 rounded-full h-fit w-fit"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        {"<"}
      </button>
      <Swiper
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
        onSlideChange={onSlideChange}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
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
      </Swiper>
      <button
        className="my-auto mx-4 font-josefin-sans text-7xl bg-stone-400 rounded-full h-fit w-fit"
        onClick={() => swiperRef.current?.slideNext()}
      >
        {">"}
      </button>
    </div>
  );
};

export default JusticeSelector;
