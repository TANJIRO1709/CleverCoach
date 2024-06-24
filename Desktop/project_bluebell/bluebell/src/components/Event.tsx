"use client"
import React, { useState, useEffect, useCallback } from 'react'
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
  DotButton,
  PrevButton,
  NextButton
} from './EmblaCarouselArrowsDotsButtons'
import Image from 'next/image';
import Image1 from '../../public/Images/Vector 1.png'
import './Event.css';


type PropType = {
  
  options?: EmblaOptionsType
}

// const OPTIONS: EmblaOptionsType = {}

const Event: React.FC<PropType> = (props) => {
  const {options}=props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const slides= [
    {
      name: 'Mental health Week',
      img: '/Images/image 1.png',
    },
    {
      name: 'Alumni Guidance Program',
      img: '/Images/image 2.png',
    },
    {
      name: 'LEAD',
      img: '/Images/image 3.png',
    },
    {
      name: 'Mental health Week',
      img: '/Images/image 1.png',
    },
    {
      name: 'Alumni Guidance Program',
      img: '/Images/image 2.png',
    },
    {
      name: 'LEAD',
      img: '/Images/image 3.png',
    },
  ];

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <>
   <div className='mt-4 ml-14 sm:ml-16 md:ml-20 lg:ml-24 xl:ml-28'>
  <h1 className='font-medium text-5xl md:text-6xl xl:text-7xl max-w-6xl mx-auto'>Event</h1>
  <Image src={Image1} alt="Image" className='w-2/3' />
</div>

      <div className="embla_superContainer truncate mt-2 max-w-6xl mx-auto">
        <div className="embla__buttons">
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} ></PrevButton>
        </div>
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((item, index) => (<>
                <div className="embla__slide " key={index}>
                  
                <div className="card-wrapper flex flex-col h-auto truncate   " style={{ border: '1px solid #CDCDCD', borderRadius: '8px' }}>
                 <Image src={item.img} alt={item.name} width="410" height="410"className='min-[px] mx-auto' />
                 <h2 className='font-normal text-sm sm:text-xl mx-auto uppercase my-4 w-10/12  text-wrap text-center '>{item.name}</h2>
                 <button className='font-normal sm:text-[11px] md:text-[12px ] lg:text-[14px] xl:text-[16px] my-2 mx-auto p-2 border-2 rounded-lg hover:bg-slate-500'>Know More</button>
                </div>
                </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="embla__buttons">
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} ></NextButton>
        </div>
      </div>
      <div className="embla__dots mt-0 mx-auto">
  {scrollSnaps.map((_, index) => (
    <DotButton
      key={index}
      onClick={() => scrollTo(index)}
      className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}>
     {index === selectedIndex ? <GoDotFill /> : <GoDot />}
    </DotButton>
  ))}
</div>

    </>
  )
}

export default Event