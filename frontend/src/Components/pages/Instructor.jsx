import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Instructor = () => {
  const [scheduleData, setScheduleData] = useState({
    instructor: '',
    course: '',
    date: '',
    lecture: ''
  });

  const [instructors, setInstructors] = useState([]);
  const router=useNavigate()

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/auth/all-user`);
      console.log('API response:', response.data);
      if (response.data.success) {
        setInstructors(response.data.user);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleChange = (e) => {
    setScheduleData({...scheduleData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (scheduleData.instructor && scheduleData.course && scheduleData.date && scheduleData.lecture) {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/admin/add-schedule`, { scheduleData });
        if (response.data.success) {
          toast(response.data.message);
          setScheduleData({
            instructor: '',
            course: '',
            date: '',
            lecture: ''
          });
          router('/scheduleTime')
        }
      } else {
        toast('All fields are required');
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 409) {
        toast('Lecture already set for the given date');
      } else {
        toast.error('An error occurred');
      }
    }
  };

  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row mt-8  w-full max-w-4xl p-6 bg-white shadow-md rounded-lg space-y-6 md:space-y-0 md:space-x-6">
        
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Instructors</h2>
          <div className="space-y-2">
            {instructors.map((element, index) => (
              <div key={index} className="text-blue-700 text-lg">{ element.firstname}</div>
            ))}
          </div>
          <div onClick={()=>router('/admin')} className='cursor-pointer text-blue-800 border-2 border-red-500 mt-4 rounded-md text-center w-20 font-bold'>Go back</div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Add Schedule</h2>
          <form onSubmit={handleSubmit}>
            <label className="block text-blue-700 font-bold mb-2">Instructor:</label>
            <input 
              type='text' 
              name='instructor' 
              value={scheduleData.instructor} 
              onChange={handleChange} 
              className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder='Instructor Name..' 
            />

            <label className="block text-blue-700 font-bold mb-2">Course:</label>
            <input 
              type='text'
              name='course' 
              value={scheduleData.course} 
              onChange={handleChange}
              className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder='Course Name'
            />

            <label className="block text-blue-700 font-bold mb-2">Schedule Time:</label>
            <input 
              type='date' 
              name='date' 
              value={scheduleData.date} 
              onChange={handleChange} 
              className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder='Schedule Time' 
            />

            <label className="block text-blue-700 font-bold mb-2">Lecture:</label>
            <input 
              type='text' 
              name='lecture' 
              value={scheduleData.lecture}
              onChange={handleChange} 
              className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder='Lecture...'
            />

            <button
              type='submit'
              className="w-full bg-yellow-500 text-blue-700 font-bold py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Add Schedule
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
