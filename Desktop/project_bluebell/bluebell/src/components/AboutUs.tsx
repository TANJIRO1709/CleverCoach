export default function About() {
  return (
    <div className="m-2 mt-40 max-w-screen-2xl mx-auto sm:text-center ">
      <div className="flex lg:flex-row flex-col ">
        <div className="flex items-center basis-2/5 lg:basis-2/5 text-center">
          <img
            src="/aboutus.gif"
            alt="aboutus image"
            className="w-full h-full"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="basis-3/5 lg:basis-3/5 max-w-6xl mx-auto">
          <p className="lg:text-right md:text-right text-center text-5xl font-semibold lg:pr-20 md:pr-20 pr-5 max-w-6xl mx-auto">
            About Us
          </p>
          <svg className="top-0 left-0 w-full h-14 lg:pr-20 md:pr-20 pr-5 md:pl-5 sm:pl-7 max-w-6xl mx-auto">
            <circle className="" cx="5%" cy="70%" r="15" fill="#D4E2D4" />
            <line
              className=""
              x1="5%"
              y1="70%"
              x2="100%"
              y2="70%"
              stroke="#D4E2D4"
              strokeWidth="7.5"
            />
          </svg>
          <p className="lg:text-xl sm:text-xl pl-10 lg:pr-24 md:pr-20 pr-5 lg:pl-11 md:text-left lg:text-left xl:text-left 2xl:text-left break-word max-w-6xl mx-auto sm:text-left">
            Institute Counselling Services, NIT Rourkela is a Technical Service
            Unit (TSU) of NIT Rourkela. Established in August 2017, the team
            comprises of faculty members, including Head of Unit, Prof. Pawan
            Kumar, Student Coordinators, Prefects and Mentors. ICS aims to
            prepare the students for a confident approach towards life and to
            bring about a voluntary change in themselves. The goal of
            counselling is to help individuals overcome their immediate problems
            and also to equip them to meet future problems. The goals of
            counselling are appropriately concerned with fundamental and basic
            aspects such as self-understanding and self-actualization.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
      <div className="text-center text-5xl font-semibold pt-20 pb-6">
        Objective
      </div>
      <div>
        <p
          className="lg:text-xl sm:text-xl pl-10 lg:pr-24 md:pr-20 pr-5 lg:pl-11 md:text-left lg:text-left xl:text-left 2xl:text-left break-word sm:pr-16 mx-auto sm:pl-20 overflow-hidden sm:text-left"
          style={{ unicodeBidi: "isolate" }}
        >
          The primary objective of ICS is to encourage a confident outlook towards
          life and establish a balance between one’s academic and personal life. This
          service deals with various important aspects of a student’s life such as
          Academic, Financial, Mental and Socio-cultural issues, ensuring a seamless
          transition from home to hostel life for the freshmen and directs its efforts
          to safeguard the mental health of all students and faculty of the institute.
          With the help of counselling, individuals can overcome their immediate
          problems and enhance their capability to tackle obstacles in future.
        </p>
      </div>
        <div className="text-center md:text-left lg:text-left xl:text-left 2xl:text-left text-5xl font-semibold pt-20 pb-5 pl-10">
          Amazing Workforce
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="basis-3/5 lg:basis-3/5 max-w-6xl mx-auto">
            <p className="lg:text-xl sm:text-xl pl-10 lg:pr-20 md:pr-20 pr-5 lg:pl-11 md:text-left lg:text-left xl:text-left 2xl:text-left break-word sm:text-left text-left ">
              Mentors are assigned to first-year students to help bridge the gap
              between junior and senior students and provide them with personal
              and professional support. Mentors come under the responsibility of
              Prefects and Coordinators oversee the working of the entire
              organisation and assist Prefects with their duties. The entire
              student body is advised by Mr Amlan Das, who has been associated
              with ICS since its foundation.
            </p>
            <p className="text-right text-lg pt-10 pr-3">- NOTICE BOARD</p>
          </div>
       
         
            <div className="flex items-center basis-2/5 lg:basis-2/5 ">
              <img
                src="/amazing workforce.gif"
                alt="amazing workforce image"
                className="top-0 left-0lg:pr-2 w-full md:pr-20 pr-5 md:pl-5 sm:pl-7 h-full"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
       
        </div>
      </div>
    </div>
  );
}
