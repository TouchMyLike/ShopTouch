import { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import styles from './styles.module.scss'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

export default function MainSwiper(): JSX.Element {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mainSwiper drop-shadow-lg rounded-lg'
      >
        {[...Array(15).keys()].map((i) => (
          <SwiperSlide key={i}>
            <img src={`../../../../images/pro1.png`} alt='' />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
