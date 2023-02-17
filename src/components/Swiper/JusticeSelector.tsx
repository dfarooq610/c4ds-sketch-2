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
  percievedPartisanIndex: number;
  onSlideTransition: (swiper: SwiperType) => void;
}

// useRef for navigation sourced from https://stackoverflow.com/questions/64099383/swiper-react-how-to-create-custom-navigation-pagination-components-using-react
const JusticeSelector = ({
  onSlideTransition: onSlideChange,
  percievedPartisanIndex,
}: JusticeSelectorProps) => {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="flex flex-row space-between justify-center">
      <button
        type="button"
        className="text-white bg-stone-600 font-medium m-auto rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 w-fit h-fit"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 320px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1040px
          1024: {
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
        type="button"
        className="text-white bg-stone-600 font-medium m-auto rounded-full text-sm p-2.5 text-center inline-flex items-center ml-2 w-fit h-fit"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default JusticeSelector;
