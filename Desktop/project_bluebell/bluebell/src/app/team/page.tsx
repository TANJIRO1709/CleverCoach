import {data, data3, data4, data5, data6, data7, data8} from "../Data.js"
import {dataa} from "../Data.js"
import Navbar from "../../components/Navbar.tsx"

export default function Home() {
  return (<>
<Navbar/>
    <div className="z-0 w-full relative mx-auto font-bold bg-white overflow-hidden">

<img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
                <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426012/ICS/Vector-5_sdnri1.png" className="-z-10 absolute left-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute right-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute right-0 top-20" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426012/ICS/Vector-5_sdnri1.png" className="-z-10 absolute right-0 top-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute left-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
    <div className=""></div>
    <h1 className="text-5xl font-bold ml-[5rem]   text-[#3A8190] mb-4 mt-4">Meet Our Team</h1>
    <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710425215/ICS/Vector_3_2_fb0uog.png" className=" ml-[4.8rem] w-[50%] " />
    <div className="flex justify-center mb-5">
        <div className="flex justify-center text-white font-bold bg-[#3A8190] my-4 p-1 text-2xl uppercase text-center rounded-lg">Core Team</div>
    </div>
    <div className="">
        <div className="flex flex-wrap justify-center">
            {data.map(item => (
            <div key={item.id} className="bg-yellow-100 flex-col justify-center rounded-md m-6 rounded-tl-2xl rounded-br-2xl">
                <div><img src={item.imageUrl} alt={item.name} className="object-cover rounded-md" /></div>
                
                <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
                <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426012/ICS/Vector-5_sdnri1.png" className="-z-10 absolute left-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute right-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute left-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
                <div><p className="font-medium text-black text-center text-xl">{item.name}</p></div>
                <div><p className="font-medium text-black text-center text-sm">{item.name}</p></div>
                <div className="h-3"></div>
            </div>
            ))}
        </div>
    </div>
    <div className="">
        <div className="flex flex-wrap justify-center">
            {data.map(item => (
            <div key={item.id} className="bg-blue-100 flex-col justify-center rounded-md m-6 rounded-tl-3xl rounded-br-3xl">
                <div><img src={item.imageUrl} alt={item.name} className="object-cover rounded-md" /></div>
                <div><p className="font-medium text-black text-center text-xl">{item.name}</p></div>
                
                <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
                <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426012/ICS/Vector-5_sdnri1.png" className="-z-10 absolute left-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute right-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute left-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
                <div><p className="font-medium text-black text-center text-sm">{item.name}</p></div>
                <div className="h-3"></div>
            </div>
            ))}
        </div>
        
    </div>
    <div className="h-14"></div>
    <div className="flex justify-center mb-5">
    <div className="flex justify-center text-white font-bold bg-[#3A8190]  p-1 text-2xl uppercase  text-center rounded-lg mt-2">Coordinators</div>
    </div>
    <div className="">
    <div className="flex  flex-wrap justify-center">
    {data3.map(item => (
       <div key={item.id} >
      <div className="bg-yellow-100  flex-col justify-center m-4 ml-3 mr-3 w-56 border-solid border-2 border-[#3A8190]" style={{WebkitBorderRadius:"100%"}}> 
      <img src={item.imageUrl} alt={item.name} className="mb-[2rem] object-cover rounded-md ml-3 " /></div>
     
        
        <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426012/ICS/Vector-5_sdnri1.png" className="-z-10 absolute left-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute right-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute left-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
      <div className="  flex flex-col  "> <div> <p className=" font-medium text-black text-center text-xl">{item.name}</p></div>
        <div> <p className=" font-medium text-black text-center text-sm">{item.name}</p></div></div>
      </div>
      
     
      ))}
      
    </div>
  
    <div className="flex flex-wrap justify-center">
    {data4.map(item => (
       <div key={item.id} >
      <div className="bg-blue-100  flex-col justify-center m-4 ml-3 mr-3 w-56  border-solid border-2 border-[#3A8190]" style={{WebkitBorderRadius:"100%"}}>
         <img src={item.imageUrl} alt={item.name} className="mb-[2rem] object-cover rounded-md ml-3  " /></div>
      
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426012/ICS/Vector-5_sdnri1.png" className="-z-10 absolute left-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute right-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute left-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
      
       
      <div className="h-3 mb-6  "><div> <p className=" font-medium text-black text-center text-xl  ">{item.name}</p></div> 
      <div> <p className=" font-medium text-black text-center text-sm">{item.name}</p></div></div>
      </div>
      
     
      ))}
      
    </div>
  
    <div className="flex flex-wrap justify-center">
    {data5.map(item => (
       <div key={item.id} >
      <div className="bg-yellow-100  flex-col justify-center m-4 ml-3 mr-3 w-56 mt-[3rem] border-solid border-2 border-[#3A8190]" style={{WebkitBorderRadius:"100%"}}> <img src={item.imageUrl} alt={item.name} className="mb-[2rem] object-cover rounded-md ml-3 " /></div>
     
      
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426012/ICS/Vector-5_sdnri1.png" className="-z-10 absolute left-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute right-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute left-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
       
      <div className="h-3"> <div> <p className=" font-medium text-black text-center text-xl">{item.name}</p></div> 
      <div> <p className=" font-medium text-black text-center text-sm">{item.name}</p></div></div>
      </div>
      
     
      ))}
      
    </div>

    </div>
    <div className="h-14"></div>
    <div className="flex justify-center ">
    <div className=" text-white text-2xl bg-[#3A8190] my-4 p-2  text-center uppercase rounded-lg">Prefects</div>
    </div>
    <div className="">
    <div className="flex flex-wrap justify-center">
    {data6.map(item => (
       <div key={item.id} >
      <div className="  flex-col justify-center m-4 ml-3 mr-3 w-56 bg-yellow-100 mb-[2rem] border-solid border-2 border-green-600" style={{WebkitBorderRadius:"100%"}}> 
      <img src={item.imageUrl} alt={item.name} className="mb-[2rem] object-cover rounded-md ml-3 " /></div>
     
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426012/ICS/Vector-5_sdnri1.png" className="-z-10 absolute left-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute right-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute left-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
       
      <div className="h-3 mb-[2rem]"> <div> <p className=" font-medium text-black text-center text-xl">{item.name}</p></div>
       <div> <p className=" font-medium text-black text-center text-sm ">{item.name}</p></div></div>
      
      </div>
    ))}
      
    </div>
    <div className="flex flex-wrap justify-center">
    {data7.map(item => (
      <div key={item.id} >
      <div className="  flex-col justify-center m-4 ml-3 mr-3 w-56 mt-[3rem] border-solid border-2 border-green-600 bg-blue-100" style={{WebkitBorderRadius:"100%"}}> 
      <img src={item.imageUrl} alt={item.name} className="mb-[2rem] object-cover rounded-md ml-3 " /></div>
     
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426012/ICS/Vector-5_sdnri1.png" className="-z-10 absolute left-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute right-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute left-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
       
      <div className="h-3"> <div> <p className=" font-medium text-black text-center text-xl">{item.name}</p></div>
       <div> <p className=" font-medium text-black text-center text-sm">{item.name}</p></div></div>
      
      </div>
    ))}
      
    </div>
   
    <div className="flex flex-wrap justify-center">
    {data8.map(item => (
       <div key={item.id} >
      <div className="  flex-col justify-center m-4 ml-3 mr-3 w-56 mt-[3rem] border-solid border-2 border-green-600" style={{WebkitBorderRadius:"100%"}}> 
      <img src={item.imageUrl} alt={item.name} className="mb-[2rem] object-cover rounded-md ml-3 " /></div>
      <div> <p className=" font-medium text-black text-center text-xl">{item.name}</p></div>
      
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426012/ICS/Vector-5_sdnri1.png" className="-z-10 absolute left-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute right-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute left-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
        <div> <p className=" font-medium text-black text-center text-sm">{item.name}</p></div>
      <div className="h-3"></div>
      </div>
    ))}
      
    </div>
    <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426012/ICS/Vector-5_sdnri1.png" className="-z-10 absolute left-10" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute right-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426004/ICS/Vector-9_rzkkaw.png" className="-z-10 absolute left-0" alt="bg" />
      <img src="https://res.cloudinary.com/dfsdd8cky/image/upload/v1710426009/ICS/Vector_sratc2.png" className="-z-10 absolute right-10" alt="bg" />
   
    </div>
    <div className="mb-[22rem] md:mb-[0rem]"></div>
  </div>
  </>
  )
}
