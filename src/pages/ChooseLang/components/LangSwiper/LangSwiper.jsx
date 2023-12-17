import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules";
import { SwiperContainerStyle } from './components/SwipeContainer.styled';
import 'swiper/css';
import { LangSlide } from './components/LangSlide/LangSlide';
import { LangSlideStyle } from './components/LangSlide/LangSlide.styled';

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
                            prev
                        </button>
                        <button className='arrow-next'>
                            next
                        </button>
                    </div>
                </LangSlideStyle>
            </SwiperSlide>
            <SwiperSlide>
                <h1>slide 2</h1>
                <div>
                <button className='arrow-prev'>
                    prev
                </button>
                <button className='arrow-next'>
                    next
                </button>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <h1>slide 3</h1>
            </SwiperSlide>
            
        </Swiper>
    </SwiperContainerStyle>
  )
}
