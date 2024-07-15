
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import homeimg from './project-image/homeimg.jpg'
import loadingimg from './project-image/loadingimg.jpeg'

const Home = () => {
  const [getData, setGetData] = useState([]);
  // console.log(getData, "1234");

  async function AllCourse() {
      try {
          const response = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/admin/get-course`);
          if (response?.data?.success) {
              setGetData(response.data.AllData);
          } else {
              toast('Failed to fetch courses');
          }
      } catch (error) {
          console.error('Error fetching courses:', error);
          toast('An error occurred while fetching courses');
      }
  }

  useEffect(() => {
      AllCourse();
  }, []);

  return (

    <div className="bg-gray-300 min-h-screen flex flex-col items-center justify-center">
      
      <div className='w-full position-sticky mt-16'><img className='w-full h-[300px] md:h-[580px] ' src={homeimg}/></div>
            
            <div className='mt-16 w-[96%] flex gap-5 overflow-x-hidden flex-row flex-nowrap ' >
              {getData?.length?( 
                <div className='w-full flex gap-5 overflow-x-hidden flex-row flex-nowrap  ' >
                  {getData.map((element,index)=>{
                    return(
                      <div key={index} className='w-40 md:w-60 flex-shrink-0 gap-4 animate-scroll' >
                        <img className='w-full  h-40 md:h-60 transition-transform transform' src={element.image} />
                      </div>
                    )
                  })}
                </div>):
              (<div className='w-96 m-auto '><img src={loadingimg} alt='loader' /></div>)}
            </div>
            
            
           

            {/* <h1 className="text-3xl font-bold text-blue-700 mt-20 mb-6">All Courses</h1> */}
            
            {getData?.length ? (
                <div className="grid mt-12 mb-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getData.map((element, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm">
                            <h2 className="text-2xl font-semibold text-teal-400 mb-2">{element.courseName}</h2>
                            <p className="text-gray-400 mb-2">Level: {element.level}</p>
                            <p className="text-gray-400 mb-4">{element.description}</p>
                            {element.image && <img src={element.image} alt="courseimg" className="w-full h-40 object-cover rounded-lg" />}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col  mt-28 items-center">
                    <p className="text-white">Loading courses...</p>
                    <img src={loadingimg} alt='loadingimg' className="w-24 h-24 mt-4" />
                </div>
            )}
        </div>
    
    
  );
};

export default Home;
