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
import './Services.css';


type PropType = {
  
  options?: EmblaOptionsType
}

// const OPTIONS: EmblaOptionsType = {}

const Services: React.FC<PropType> = (props) => {
  const {options}=props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const slides= [
    {
      name: 'Offline Counselling Services',
      title:'ICS provides Free Consultation from Psychiatrists, Counsellors & Neuropsychiatrists to seek professional mental health advice.',
      img: '/Images/Servises-1.png',
    },
    {
      name: 'YourDost, Online Counselling',
      title:'ICS avails the services of YourDost to provides 24X7 free counselling services.',
      img: '/Images/Servises-2.png',
    },
    {
      name: 'Mentorship Program',
      title:'First-year students are paired with a designated ICS mentor, providing an unwavering pillar of support.',
      img: '/Images/Servises-3.png',
    },
    {
      name: 'Acadvault',
      title:'The Acadvault is a compilation of academic resources including textbooks, notes, and other useful resources.',
      img: '/Images/Servises-4.png',
    },
    {
      name: 'ICS App',
      title:'The official ICS app can be downloaded from Google Play Store. It comes up with facilities to that include Counsellor ',
      img: '/Images/Servises-5.png',
    },
    {
      name: 'Support Forum',
      title:'ICS facilitates a Telegram support forum that offers instantaneous solutions to student queries. The forum has over 1800 students. LINK',
      img: '/Images/Servises-6.png',
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
    <h1 className='font-medium text-5xl md:text-6xl xl:text-7xl '>Services</h1>
    <Image src={Image1} alt="Image"  className='w-2/3 ' />
    </div>
      <div className="embla2_superContainer truncate mt-3 mx-auto sm:w-10/12 w-[311px]">
        <div className="embla2">
          <div className="embla2__viewport" ref={emblaRef}>
            <div className="embla2__container">
              {slides.map((item, index) => (
                <div className="embla2__slide sm:w-3/4 mx-auto" key={index}>
                <div className=" card-wrapper mx-auto  truncate sm:w-3/4 h-[365px] " style={{ backgroundColor:'#F5F5F5',borderRadius: '8px' }}>
                 <Image src={item.img} alt={item.name} width={715} height={400} className='object-contain w-[450px] sm:w-[650px] md:w-[800px] lg:w-[1000px] h-[200px] md:h-[350px] mx-auto' />
                 <h2 className='sm:text-3xl md:text-4xl xl:text-5xl sm:px-2 md:px-4 xl:px-6 py-2 w-10/12 mx-auto  my-4 text-wrap text-center '>{item.name}</h2>
                 <p className='text-wrap text-sm sm:text-xl md:text-2xl sm:px-2 md:px-4 xl:px-6py-2 w-10/12 mx-auto  mt-4 mb-6 sm:text-left'>{item.title}</p>
               <button className='font-normal sm:text-[11px] md:text-[12px ] lg:text-[14px] xl:text-[16px] my-2 mx-auto p-2 border-2 rounded-lg'>Learn More</button>
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
<div className="embla2__dots flex justify-center items-center w-3/4 mx-auto my-2">
  <div className="embla2__buttons mr-4 sm:mr-6">
    <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled}></PrevButton>
  </div>
  <div className="flex space-x-2">
    {scrollSnaps.map((item, index) => (
      <DotButton
        key={index}
        onClick={() => scrollTo(index)}
        className={'embla2__dot'.concat(
          index === selectedIndex ? ' embla2__dot--selected' : ''
        )}
      >
        {index === selectedIndex ? <GoDotFill /> : <GoDot />}
      </DotButton>
    ))}
  </div>
  <div className="embla2__buttons ml-4 sm:ml-6">
    <NextButton onClick={scrollNext} disabled={nextBtnDisabled}></NextButton>
  </div>
</div>

    </>
  )
}

export default Services