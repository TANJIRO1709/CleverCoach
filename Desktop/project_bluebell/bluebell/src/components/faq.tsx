import React, { useState } from 'react'

const Faq = ({question,answer}: {question: string, answer: string}) => {
    const [open, setOpen] = useState(false);
  return <>
    <div className={`bg-[#FFFFFF] p-2 sm:p-4 rounded-md ${open ? 'open' : ''}`}>
      <div className="w-full text-left  text-lg" onClick={() => setOpen(!open)}>
        <div className="flex justify-between items-center gap-2">
          <div className='max-[470px]:text-base'>{question}</div>
          <div className=" text-2xl sm:text-4xl p-1 sm:p-3">{open ? '-' : '+'}</div>
        </div>
      </div>
      <div className={`max-[470px]:text-base transition-max-height ease-in-out duration-300 overflow-hidden ${open ? 'max-h-[500px]' : 'max-h-0'}`}>
        <hr className="my-2" />
        <p className="mt-2 leading-5 lg:text-lg text-slate-800">{answer}</p>
      </div>
    </div>
  </>
    
  
}

export default Faq