import React from 'react';
import Image from 'next/image'; 
import Map from './map';
const Contact = () => {
    return (
        <div className='h-screen'>
                <div className='w-[90%] m-auto my-7 py-7'>
                    <div className='font-medium text-4xl md:text-5xl lg:text-6xl leading-8 text-center min-[464px]:text-right max-w-6xl mx-auto'>Contact us</div>
                    <div className='hidden min-[464px]:block max-w-6xl mx-auto'><svg className="top-0 left-0 w-full h-14 pl-20">
            <line className="" x1="40%" y1="70%" x2="100%" y2="70%" stroke="#D4E2D4" strokeWidth="7.5" />
            <circle className="" cx="40%" cy="70%" r="15" fill="#D4E2D4" />
          </svg></div>
                    </div>
                <div className='flex sm:flex-row flex-col md:flex-row w-[70%] m-auto gap-5 max-w-6xl mx-auto h-[45%]' >
                        <div className='sm:w-[45%] md:w-[35%] relative hidden min-[705px]:block '>
                        <Image src="/gif.gif" alt="hello" layout='fill'></Image>

                                {/* <Image src="https://lottiefiles.com/animations/contact-us-PP91pFBOLS" alt="Contact Animation" width={200} height={200}/> */}
                        </div>
                        <div className='w-full min-[705px]:w-[55%]  md:w-[60%]  flex flex-col p-4 gap-7'>
                            <div className='flex flex-[0.8] flex-col-reverse sm:flex-row  m-auto gap-5 p-4 justify-between'>
                                <div className='flex flex-col gap-4 justify-evenly flex-[0.5]'>
                                    <a href='mailto: ics@nitrkl.ac.in'><div className='bg-[#FFCACC] p-4 rounded-[13px] lg:text-[1.5rem]'>ics@nitrkl.ac.in</div></a>
                                    <div className='h-5'></div>
                                    <a href='tel: 6612462726'> <div className='bg-[#DBC4F0] p-4 rounded-[13px] lg:text-[1.25rem]'>+91 6612462726</div></a>
                                </div>
                                <div className='flex-[0.5] h-full w-full rounded-sm flex items-center'>
                                    {/* <Image src="/map.png" alt="hello" height={250} width={250}></Image> */}
                                    <Map/>
                                </div>
                            </div>
                            <div className='flex flex-[0.2] flex-row min-[705px]:flex-col md:flex-row bg-white justify-evenly gap-3'>
                                
                                <div className='bg-[#D4E2D4] rounded-[5px] px-4 py-3 lg:text-[1.5rem] mt-14 mr-20'>CONTACT US</div>
                                
                                <div className='bg-[#D4E2D4] rounded-[5px] px-4 py-3 lg:text-[1.5rem] mt-14'>DOWNLOAD OUR APP</div>
                            </div>
                        </div>
                </div>
        </div>
    );
}

export default Contact;