
import React from 'react';

const TeamProfileUI = () => {
  const teamMembers = [
    {
      name: 'Mr. Joaquin',
      title: 'CEO and Co-founder',
      bio: 'Mr. Joaquin is the founder and director of our company since its inception and has recently been appointed as the Whole-Time Director. A successful professional, he excels in developing and strengthening management teams to maximize efficiency. His leadership has been instrumental in transforming the organization into a dynamic and progressive entity.',
      imgSrc: '/images/T1.png',
      bgColor: 'bg-white',
      borderColor: 'border-gray-200'
    },
    {
      name: 'Mr.Harish Singh',
      title: 'Managing Director',
      bio: 'Mr. Harish Singh is a highly accomplished professional in Civil Engineering, specializing in construction and infrastructure development projects. With an impressive track record spanning over 30 years, Mr. Harish has consistently demonstrated his expertise in the successful execution of a wide range of projects. His areas of specialization encompass the modernization of canals, construction of asphalt and concrete roads, bridges, culverts, warehouse construction, storm water drain, lift irrigation schemes, and tank improvement schemes.',
      imgSrc: '/images/T2.png',
      bgColor: 'bg-white',
      borderColor: 'border-blue-100'
    },
    {
      name: 'Mr. Antonio',
      title: 'Director',
      bio: 'He is a Distinguished engineer for excellence having served in various departments of governments of Karnataka for a period of 32 years. Venerated Antonio has worked in water resources Department totally for around 18 years out of which for 15 Years managed water recharging, And water Management in Tungbhadra reservoir and canals in that region.',
      imgSrc: '/images/T4.png',
      bgColor: 'bg-white',
      borderColor: 'border-gray-200'
    },
    {
      name: 'Ms. Angelina',
      title: 'CS',
      bio: "She is the Company Secretary and Compliance Officer of our Company. She holds bachelor's degree in commerce from Stanford University. She is an associate member at the Institute of Company Secretaries of India.",
      imgSrc: '/images/T6.png',
      bgColor: 'bg-white',
      borderColor: 'border-blue-100'
    }
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full py-8">
        <div className="flex flex-col space-y-6 max-w-5xl mx-auto px-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative w-full">
              <div className={`h-auto md:h-60 rounded-lg border ${member.borderColor} ${member.bgColor} shadow-sm p-6 w-full`}> 
                <div className="flex flex-col md:flex-row items-center md:items-start">
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-24 h-24 md:w-44 md:h-44 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-md mb-4 md:mb-0 md:absolute md:-left-6 top-1/2 md:transform md:-translate-y-1/2">
                        <img src={member.imgSrc} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-center md:text-left md:ml-16 md:pl-24">
                        <div className="text-xl text-gray-800 mb-4 font-semibold">
                          {member.name} <span className="text-gray-600 text-medium">({member.title})</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          {member.bio}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-center md:text-right md:mr-16 md:pr-24">
                        <div className="text-xl text-gray-800 mb-4 font-semibold">
                          {member.name} <span className="text-gray-600 text-medium">({member.title})</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          {member.bio}
                        </p>
                      </div>
                      <div className="w-24 h-24 md:w-44 md:h-44 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-md mt-4 md:mt-0 md:absolute md:-right-6 top-1/2 md:transform md:-translate-y-1/2">
                        <img src={member.imgSrc} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamProfileUI;

