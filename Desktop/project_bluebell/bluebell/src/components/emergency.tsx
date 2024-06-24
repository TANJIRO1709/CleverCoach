import React from 'react'

const Emergency = () => {
  return (
    <div className='mt-8 px-2'>
        <div className='flex flex-col mb-6 max-w-6xl mx-auto'>
             <div className='font-medium max-[470px]:text-3xl text-[2.25rem] lg:text-[3.25rem] text-center text-[#C00000]'>Emergency</div>
             <div className='font-light max-[470px]:text-2xl text-[2.05rem] lg:text-[2.8rem] text-center text-[#2C2C2C]'>Incase you are in troble,we are here</div>
        </div>
        <div className='w-[90%] grid min-[824px]:grid-cols-3 min-[590px]:grid-cols-2 grid-cols-1   m-auto gap-10 lg:gap-20 max-w-6xl mx-auto'>
            <div className='relative'>
                <div className='bg-[#F84444] rounded-[50px] w-max px-3 py-1 text-center absolute left-4 -top-3 text-[#FFFFFF] '>Hou,ICS</div>
                <div className='rounded-[15px] bg-[#D4E2D4] pt-8 lg:py-[33px] text-center h-36'> Prof Pawan Kumar <br />
              <a href='tel: 9338717846'> +91 9338717846</a> 
                </div>
            </div>
            <div className='relative'>
                <div className='bg-[#F84444] rounded-[50px] w-max px-3 py-1 text-center absolute left-4 -top-3 text-[#FFFFFF]'>Head of health center</div>
                <div className='rounded-[15px] bg-[#D4E2D4] pt-8 lg:py-[33px] text-center h-36'> Dr Champak Bhattacharyya
 <br />
 <a href='tel: 8895298094'> +91 8895298094 </a>
                </div>
            </div>
            <div className='relative'>
                <div className='bg-[#F84444] rounded-[50px] w-max px-3 py-1 text-center absolute left-4 -top-3 text-[#FFFFFF] '>Medical officer</div>
                <div className='rounded-[15px] bg-[#D4E2D4] pt-8 lg:py-[33px] text-center h-36'> Dr. Soumya Ranjan Behera
 <br />
 <a href='tel: 7904996232'> +91 7904996232</a>
                </div>
            </div>
            <div className='relative'>
                <div className='bg-[#F84444] rounded-[50px] w-max px-3 py-1 text-center absolute left-4 -top-3 text-[#FFFFFF] '>Psychologist</div>
                <div className='rounded-[15px] bg-[#D4E2D4] pt-8 lg:py-[33px] text-center h-36'>  Dr. Ekta sanghi
 <br />
  <a href='tel: 9337403927'>+91 9337403927</a>
                </div>
            </div>
            <div className='flex flex-col gap-5 '>
            <div className='relative'>
                <div className='bg-[#F84444] rounded-[50px] w-max px-3 py-1  text-center absolute left-4 -top-3 text-[#FFFFFF] '>Doctor on Emergency</div>
                <div className='rounded-[15px] bg-[#D4E2D4] py-[18px] text-center'>
             <a href='tel: 8280468607'>  +91 8280468607 </a> 
                </div>
            </div>
            <div className='relative'>
                <div className='bg-[#F84444] rounded-[50px] w-max px-3 py-1 text-center absolute left-4 -top-3 text-[#FFFFFF]'>Security control room</div>
                <div className='rounded-[15px] bg-[#D4E2D4] py-[18px] text-center'>
               <a href='tel: 8280468607'> +91 8280468607</a>
                </div>
            </div>
            
            </div>
            <div className='relative'>
                <div className='bg-[#F84444] rounded-[50px] w-max px-3 py-1 text-center absolute left-4 -top-3 text-[#FFFFFF]'>Psychologist</div>
                <div className='rounded-[15px] bg-[#D4E2D4]  pt-8 lg:py-[33px] text-center h-36'> Dr. P.K. Nanda
 <br />
   <a href='tel: 9437390633'>+91 9437390633</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Emergency