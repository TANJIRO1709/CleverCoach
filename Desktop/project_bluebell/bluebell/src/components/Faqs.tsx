"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Faq from './faq';
const Faqs = () => {
  const [current, setCurrent] = useState("academics");
  const Academics = [
    {
      question: 'What is the application process?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc vel tempor dignissim, urna libero bibendum massa, ac vestibulum leo est quis augue. Nulla facilisi. Sed ac urna eget diam aliquet aliquam. Integer ac magna id nisl placerat ultricies.'
    },
    {
      question: 'What is the application What is the difference between a backlog, debar and deregistration?process?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc vel tempor dignissim, urna libero bibendum massa, ac vestibulum leo est quis augue. Nulla facilisi. Sed ac urna eget diam aliquet aliquam. Integer ac magna id nisl placerat ultricies.'
    },
    {
      question: 'What is the appliCan one change into a single degree program from a dual degree program after 1st year on the basis of a good CGPA?cation process?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc vel tempor dignissim, urna libero bibendum massa, ac vestibulum leo est quis augue. Nulla facilisi. Sed ac urna eget diam aliquet aliquam. Integer ac magna id nisl placerat ultricies.'
    },
    {
      question: 'What is the How does a backlog, debar, de-registration and grade back affect ones SGPA'
      ,
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc vel tempor dignissim, urna libero bibendum massa, ac vestibulum leo est quis augue. Nulla facilisi. Sed ac urna eget diam aliquet aliquam. Integer ac magna id nisl placerat ultricies.'
    },
    {
      question: 'What is the Is there any bound agreement signed by Ph.D. scholars for authorship before working on a project?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc vel tempor dignissim, urna libero bibendum massa, ac vestibulum leo est quis augue. Nulla facilisi. Sed ac urna eget diam aliquet aliquam. Integer ac magna id nisl placerat ultricies.'
    },
    {
      question: 'What is What are the various rules pertaining to deregistration? application process?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc vel tempor dignissim, urna libero bibendum massa, ac vestibulum leo est quis augue. Nulla facilisi. Sed ac urna eget diam aliquet aliquam. Integer ac magna id nisl placerat ultricies.'
    },
  ]
  const Financial = [
    {
      question: 'What is the application process?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc vel tempor dignissim, urna libero bibendum massa, ac vestibulum leo est quis augue. Nulla facilisi. Sed ac urna eget diam aliquet aliquam. Integer ac magna id nisl placerat ultricies.'
    },
    {
      question: 'What is the application process?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc vel tempor dignissim, urna libero bibendum massa, ac vestibulum leo est quis augue. Nulla facilisi. Sed ac urna eget diam aliquet aliquam. Integer ac magna id nisl placerat ultricies.'
    },
    {
      question: 'What is the application process?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc vel tempor dignissim, urna libero bibendum massa, ac vestibulum leo est quis augue. Nulla facilisi. Sed ac urna eget diam aliquet aliquam. Integer ac magna id nisl placerat ultricies.'
    },
    {
      question: 'What is the application process?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc vel tempor dignissim, urna libero bibendum massa, ac vestibulum leo est quis augue. Nulla facilisi. Sed ac urna eget diam aliquet aliquam. Integer ac magna id nisl placerat ultricies.'
    },
    {
      question: 'What is the application process?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc vel tempor dignissim, urna libero bibendum massa, ac vestibulum leo est quis augue. Nulla facilisi. Sed ac urna eget diam aliquet aliquam. Integer ac magna id nisl placerat ultricies.'
    },
    {
      question: 'What is the application process?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc vel tempor dignissim, urna libero bibendum massa, ac vestibulum leo est quis augue. Nulla facilisi. Sed ac urna eget diam aliquet aliquam. Integer ac magna id nisl placerat ultricies.'
    },
  ]
  const Miscellaneous = [
    {
      question: 'What is the application process?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc vel tempor dignissim, urna libero bibendum massa, ac vestibulum leo est quis augue. Nulla facilisi. Sed ac urna eget diam aliquet aliquam. Integer ac magna id nisl placerat ultricies.'
    },
    {
      question: 'What is the application process?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc vel tempor dignissim, urna libero bibendum massa, ac vestibulum leo est quis augue. Nulla facilisi. Sed ac urna eget diam aliquet aliquam. Integer ac magna id nisl placerat ultricies.'
    },
    {
      question: 'What is the application process?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc vel tempor dignissim, urna libero bibendum massa, ac vestibulum leo est quis augue. Nulla facilisi. Sed ac urna eget diam aliquet aliquam. Integer ac magna id nisl placerat ultricies.'
    },
    {
      question: 'What is the application process?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc vel tempor dignissim, urna libero bibendum massa, ac vestibulum leo est quis augue. Nulla facilisi. Sed ac urna eget diam aliquet aliquam. Integer ac magna id nisl placerat ultricies.'
    },
    {
      question: 'What is the application process?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc vel tempor dignissim, urna libero bibendum massa, ac vestibulum leo est quis augue. Nulla facilisi. Sed ac urna eget diam aliquet aliquam. Integer ac magna id nisl placerat ultricies.'
    },
    {
      question: 'What is the application process?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc vel tempor dignissim, urna libero bibendum massa, ac vestibulum leo est quis augue. Nulla facilisi. Sed ac urna eget diam aliquet aliquam. Integer ac magna id nisl placerat ultricies.'
    },
  ]
  return <>
    <div className='w-[90%] m-auto p-5 flex flex-col gap-6 sm:gap-3 max-w-6xl mx-auto mt-9'>
      <div className=' font-medium max-[470px]:text-3xl text-4xl md:text-5xl lg:text-6xl leading-8 '>FAQS</div>
      <svg className="top-0 left-0 w-full h-[2.3rem] lg:pl-20 max-[470px]:-m-7 -m-4 sm:-m-2">
        <line className="" x1="0%" y1="50%" x2="50%" y2="50%" stroke="#D4E2D4" strokeWidth="7.5" />
        <circle className="" cx="50%" cy="50%" r="15" fill="#D4E2D4" />
      </svg>
      <div className=''>
        <div className='flex flex-col mt-4 ml-14 sm:ml-16 md:ml-20 lg:ml-24 xl:ml-28'>
          <div className='absolute hidden font-medium max-[470px]:text-3xl text-4xl md:text-5xl lg:text-6xl leading-8 '><Image src="/left.png" alt="" width={120} height={120} />
          </div>
          <div className='max-[470px]:text-xl text-[2rem]  md:text-[2.5rem] md:leading-7 font-normal lg:text-[3.15rem] lg:leading-10 text-center py-1 md:py-3 lg:py-6'>DO YOU HAVE ANY QUESTION?</div>
          <div className='max-[470px]:text-xl font-normal leading-7 lg:leading-10 lg:text-[2.70rem] text-[1.8rem] text-center text-[#617D61]'>We have answers (well, most of the time!)</div>
          <div className='min-[470px]:-mt-2 font-normal min-[470px]:text-[1.3rem] md:text-[1.7rem] lg:text-[2rem] max-[470px]:leading-5 leading-6 md:leading-7 lg:leading-10 text-[#636262] '>Below you will find answers to the most common you may have on academics,financial and on other topics.</div>
        </div>
      </div>
      <div className='w-full sm:w-[80%] lg:w-[74%] m-auto min-[455px]:bg-[#D4E2D4] flex justify-evenly items-center h-auto p-2 rounded-[31.5px]'>
        <div
          onClick={() => setCurrent("academics")}
          className={`max-[470px]:text-lg text-xl min-[850px]:text-2xl lg:text-2xl rounded-[26px] lg:px-12 cursor-pointer ${current === "academics" ? 'bg-[#D4E2D4] min-[455px]:bg-[#FFFFFF]' : 'text-[#4C4B4B]'} text-center py-1 px-2 lg:py-3 lg:px-5 md:py-2 md:px-3`}>
          Academics
        </div>
        <div
          onClick={() => setCurrent("financial")}
          className={`max-[470px]:text-lg text-xl min-[850px]:text-2xl lg:text-2xl  rounded-[26px] lg:px-12 cursor-pointer ${current === "financial" ? 'bg-[#D4E2D4] min-[455px]:bg-[#FFFFFF]' : 'text-[#4C4B4B]'} text-center py-1 px-2  lg:py-3 lg:px-5 md:py-2 md:px-3`}>
          Financial</div>
        <div
          onClick={() => setCurrent("miscellaneous")}
          className={`max-[470px]:text-lg text-xl min-[850px]:text-2xl lg:text-2xl rounded-[26px] lg:px-12 cursor-pointer ${current === "miscellaneous" ? 'bg-[#D4E2D4] min-[455px]:bg-[#FFFFFF]' : 'text-[#4C4B4B]'} text-center py-1 px-2 lg:py-3 lg:px-5 md:py-2 md:px-3`}>
          Miscellaneous</div>
      </div>
      <div className='flex flex-col w-full min-[455px]:w-[85%] m-auto bg-[#DBC4F059] p-3 sm:p-8 gap-2 sm:gap-4 rounded-lg '>
        {current === "academics" && Academics.slice(0, 5).map((item, index) => {
          return <Faq question={item.question} answer={item.answer} key={index} />
        })}
        {current === "miscellaneous" && Academics.slice(0, 5).map((item, index) => {
          return <Faq question={item.question} answer={item.answer} key={index} />
        })}
        {
          current === "financial" && Financial.slice(0, 5).map((item, index) => {
            return <Faq question={item.question} answer={item.answer} key={index} />
          })
        }
        <div className='flex justify-end '>
          <button className='bg-slate-900 rounded max-[500px]:text-sm text-white py-1 px-2 uppercase'>view more</button>
        </div>
      </div>
    </div>
  </>


}

export default Faqs;