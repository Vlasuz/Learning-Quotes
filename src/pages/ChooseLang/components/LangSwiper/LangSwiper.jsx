import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules";
import { SwiperContainerStyle } from './components/SwipeContainer.styled';
import 'swiper/css';
import { LangSlide } from './components/LangSlide/LangSlide';
import { LangSlideStyle } from './components/LangSlide/LangSlide.styled';
import { LangNavigationStyle } from './components/LangNavigation/LangNavigation.styled';

import ArrowNext from '../../../../assets/img/icons/arrow-next.svg'
import ArrowPrev from '../../../../assets/img/icons/arrow-prev.svg'
import SlidePh_1 from '../../../../assets/img/img-slide.png'
import SlidePh_2 from '../../../../assets/img/img-slide2.png'
import SlidePh_3 from '../../../../assets/img/img-slide3.png'
import SlideBgd_1 from '../../../../assets/img/img-slide.svg'
import SlideBgd_2 from '../../../../assets/img/icons/Background-sw-2.svg'
import SlideBgd_3 from '../../../../assets/img/icons/Background-sw-3.svg'


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
                    <LangSlide 
                        slidePh={SlidePh_1}
                        slideBgd={SlideBgd_1}
                        title={'Something About Arabic'} 
                        txt={'Some Text will be here'} 
                        description={'Arabic'} 
                    />
                    <LangNavigationStyle>
                        <button className='arrow-prev'>
                            <img src={ArrowPrev} alt="arrow ic" />
                        </button>
                        <button className='arrow-next'>
                            <img src={ArrowNext} alt="arrow ic" />                            
                        </button>
                    </LangNavigationStyle>
                </LangSlideStyle>
            </SwiperSlide>
            <SwiperSlide>
                <LangSlideStyle>
                    <LangSlide
                        slidePh={SlidePh_2}
                        slideBgd={SlideBgd_2}
                        title={'Something About Chinese'} 
                        txt={'Some Text will be here'} 
                        description={'Chinese'} 
                    />
                    <LangNavigationStyle>
                        <button className='arrow-prev'>
                            <img src={ArrowPrev} alt="arrow ic" />
                        </button>
                        <button className='arrow-next'>
                            <img src={ArrowNext} alt="arrow ic" />                            
                        </button>
                    </LangNavigationStyle>
                </LangSlideStyle>
            </SwiperSlide>
            <SwiperSlide>
                <LangSlideStyle>
                    <LangSlide
                        slidePh={SlidePh_3}
                        slideBgd={SlideBgd_3}
                        title={'Something About Rusian'} 
                        txt={'Some Text will be here'} 
                        description={'Rusian'} 
                    />
                    <LangNavigationStyle>
                        <button className='arrow-prev'>
                            <img src={ArrowPrev} alt="arrow ic" />
                        </button>
                        <button className='arrow-next'>
                            <img src={ArrowNext} alt="arrow ic" />                            
                        </button>
                    </LangNavigationStyle>
                </LangSlideStyle>
            </SwiperSlide>
        </Swiper>
    </SwiperContainerStyle>
  )
}
