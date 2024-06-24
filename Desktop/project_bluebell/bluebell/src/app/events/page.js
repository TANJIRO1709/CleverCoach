"use client";
import Image from "next/image";
import eventData from "./eventData";
import { useState, use, useEffect } from "react";
import Navbar from "../../components/Navbar.tsx"
const Events = () => {
  const [cardNo, setCard] = useState(1);

  const changeCard = (id) => {
    setCard(id);
  };

  const newEventData = eventData.filter((data) => {
    if (data.id == cardNo) {
      return data;
    }
  });

  return (<>
  <Navbar/>
    <main
      className={`bg-white w-full sm:h-auto px-4 md:px-12 lg:px-20 py-4 md:py-8 lg:py-12`}
    >
      <div
        className={`w-full text-black text-[32px] sm:text-[36px] lg:text-[48px] 2xl:text-[78px] font-semibold px-4 lg:px-8`}
      >
        <h1>Events</h1>
        <div className={`w-full flex items-center`}>
          <div
            className={`min-w-[170px] w-[60%] lg:w-[50%] h-[4px] bg-slate-600  `}
          ></div>

          <div
            className={`w-4 h-4 md:w-6 md:h-6  rounded-[50%] bg-slate-600`}
          ></div>
        </div>
      </div>
      
      <div className={`sm:hidden w-full`}>
        <div className={`h-[90%] px-6 flex flex-col gap-6`}>
          {eventData.map((data) => {
            return (
              <div
                className={` w-full bg-[#D4E2D466] rounded-lg flex flex-col items-center p-4`}
                key={data.id}
              >
                <div
                  className={`w-1/2 min-h-max max-h-1/2 border-[2px] border-black overflow-hidden`}
                >
                  <Image
                    src={data.imgLoc}
                    width={1920}
                    height={1080}
                    alt={data.alt}
                  />
                </div>
                <h1 className={`text-[14px] font-semibold text-black my-2`}>
                  {data.title}
                </h1>

                <div
                  className={`w-full h-[200px] bg-[#ffffff7c] rounded-xl text-black text-[10px] p-4 text-justify overflow-scroll noScrollBar`}
                >
                  {data.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`hidden sm:flex w-full h-screen p-10`}>
        <div className={`w-1/4 h-[90%] p-1`}>
          <div
            className={`w-full p-2 text-black text-center bg-[#D4E2D466] lg:text-[28px] rounded-lg`}
          >
            Events
          </div>

          <div
            className={`w-full lg:h-[80%] max-h-[80vh] sm:mt-2 md:mt-4 lg:mt-8 flex flex-col gap-6 items-center bg-[#D4E2D466] sm:p-1 md:p-2 lg:p-6 xl:p-8 rounded-lg overflow-x-scroll noScrollBar`}
          >
            {eventData.map((data) => {
              return (
                <div
                  key={data.id}
                  className={`w-[80%] sm:h-[100px] xl:h-[160px] flex flex-col justify-between`}
                  onClick={() => {
                    changeCard(data.id);
                  }}
                >
                  <div
                    className={`h-[80%] px-4 md:px-5 lg:px-6 xl:px-8 w-full bg-white overflow-hidden`}
                  >
                    <Image
                      src={data.imgLoc}
                      width={1920}
                      height={1080}
                      alt={data.alt}
                      className={``}
                    />
                  </div>

                  <div
                    className={`h-[18%] w-full bg-white text-black font-semibold text-[7px] lg:text-[8px] xl:text-[12px] flex justify-center items-center`}
                  >
                    <h1>{data.title}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`w-3/4 h-[90%] lg:h-full md:px-10 px-16 lg:px-20`}>
          {newEventData.map((data) => {
            return (
              <div
                key={data.id}
                className={`sm:h-[400px] lg:h-[550px] xl:h-full w-full bg-[#D4E2D466] rounded-lg flex flex-col items-center py-6 px-10`}
              >
                <div
                  className={`w-1/2 min-h-max max-h-1/2 border-[4px] border-black overflow-hidden`}
                >
                  <Image
                    src={data.imgLoc}
                    width={1920}
                    height={1080}
                    alt={data.alt}
                  />
                </div>
                <h1
                  className={`text-[16px] md:text-[20px] xl:text-[32px] 2xl:text-[36px] font-semibold text-black my-2 lg:my-3 `}
                >
                  {data.title}
                </h1>

                <div
                  className={`w-full h-[200px] bg-[#ffffff7c] rounded-xl text-black text-[10px] lg:text-[12px] xl:text-[16px] p-4 text-justify overflow-scroll noScrollBar`}
                >
                  {data.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
    </>
  );
};

export default Events;
