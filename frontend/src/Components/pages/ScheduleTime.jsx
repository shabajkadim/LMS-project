import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ScheduleTime = () => {
  const [time, setTime] = useState([]);
  console.log(time, "81");
  console.log(process.env.REACT_APP_SERVER_DOMAIN);

  async function fetchTime() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/admin/get-schedule`);
      if (response.data.success) {
        setTime(response.data.getlectures);
      }
    } catch (error) {
      console.log(error);
      toast(error);
    }
  }

  useEffect(() => {
    fetchTime();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center mt-16 p-4">
      <h1 className="text-4xl font-bold mb-8">Schedule Time</h1>
      {time?.length ? (
        <div className="w-full max-w-6xl grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {time.map((element, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <div className="mb-2">
                <strong>Instructor:</strong> {element.instructor}
              </div>
              <div className="mb-2">
                <strong>Course:</strong> {element.course}
              </div>
              <div className="mb-2">
                <strong>Date:</strong> {new Date(element.date).toLocaleDateString()}
              </div>
              <div>
                <strong>Lecture:</strong> {element.lecture}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-white">Loading courses...</p>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KkMDy6WNxbAFLBcpdrRJZP1nwDwr9nvmTw&s'
            alt='Loading'
            className="w-24 h-24 mt-4"
          />
        </div>
      )}
    </div>
  );
}

export default ScheduleTime;
