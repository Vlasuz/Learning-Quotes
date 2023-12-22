import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules";
import { SwiperContainerStyle } from './components/SwipeContainer.styled';
import 'swiper/css';
import { LangSlide } from './components/LangSlide/LangSlide';
import { LangSlideStyle } from './components/LangSlide/LangSlide.styled';
import ArrowNext from '../../../../assets/img/icons/arrow-next.svg'
import ArrowPrev from '../../../../assets/img/icons/arrow-prev.svg'

export const LangSwiper = () => {
  return (
    <SwiperContainerStyle>
        <Swiper
            navigation={{
                prevEl: '.arrow-prev',
                nextEl: '.arrow-next',
            }}
            modules={[Pagination, Navigation]}
            spaceBetween={15}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <LangSlideStyle>
                    <LangSlide/>
                    <div>
                        <button className='arrow-prev'>
                            <img src={ArrowPrev} alt="arrow ic" />
                        </button>
                        <button className='arrow-next'>
                            <img src={ArrowNext} alt="arrow ic" />                            
                        </button>
                    </div>
                </LangSlideStyle>
            </SwiperSlide>
            <SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
                <h1>slide 3</h1>
            </SwiperSlide>
            
        </Swiper>
    </SwiperContainerStyle>
  )
}
