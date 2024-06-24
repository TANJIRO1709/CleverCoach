import React from 'react'
import Image from 'next/image';
import Image1 from '../../public/Images/Vector 2.png'
import './Services'
const Counselling = () => {
    const slides= [
        {
          name: 'Seek Online Counselling with YourDost',
          img: '/Images/image 4.png',
          butName:'YOURDOST WEBSITE'
        },
        {
          name: 'Book slots for ONLINE and OFFLINE sessions with Counsellor.',
          img: '/Images/image 5.png',
          butName:'SLOT BOOKING FORM'
        },
        {
          name: 'Tele MANAS is a govt. initiative that provides free mental health service all over India.',
          img: '/Images/image 6.png',
          butName:'TELE MANAS WEBSITE'
        },
      ];
    return (
    <>
    <div className='flex w-full justify-end my-4'>
    <div className=' w-2/3 flex flex-col items-end mr-14 sm:mr-16 md:mr-20 lg:mr-24 xl:mr-36'>
    <h1 className='font-medium text-4xl md:text-6xl xl:text-7xl w-auto'>Counselling</h1>
    <Image src={Image1} alt="Image"  className='w-2/3' />
    </div>
    </div>
    <div className="flex flex-wrap justify-around w-10/12 m-auto mt-5 box-border ">
  {slides.map((item, index) => (
    <>
    <a href='./'>
    <div className=" truncate box-border" key={index}>
      <div className=" flex flex-col justify-between h-auto xl:h-[600px] truncate  lg:w-[350px] xl:mx-2 xl:w-[380px] my-3" style={{ border: '1px solid #CDCDCD', borderRadius: '8px' }}>
        <Image src={item.img} alt={item.name} width="410" height="410" className='' />
        <div className='max-w-sm'><p className='font-normal text-sm sm:text-xl  mx-auto my-4 text-wrap text-center px-4  py-2' style={{ maxWidth: '90%' }}>{item.name}</p></div>
        <button className='font-normal sm:text-[11px] md:text-[12px] lg:text-[14px] xl:text-[16px] mx-auto p-2 border-2 hover:bg-slate-500 rounded-lg my-3'>{item.butName}</button>
      </div>
    </div>
    </a>
    </>
  ))}
</div>

    
    </>
  )
}

export default Counselling
