import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddCourse = () => {
    const [courseData, setCourseData] = useState({
        courseName: '',
        level: '',
        description: '',
        image: ''
    });

    const router=useNavigate()
    
    const handleChange = (e) => {
        setCourseData({...courseData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (courseData.courseName && courseData.level && courseData.description && courseData.image) {
                // const response={data:{success:true, message:"Couse added successsfully"}}
                   const response=await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/admin/add-course`,{courseData})
                // const response = await axios.post('http://localhost:8000/api/v1/admin/add-course', { courseData });
                if (response.data.success) {
                    toast(response.data.message);
                    setCourseData({
                        courseName: '',
                        level: '',
                        description: '',
                        image: ''
                    });
                    router('/getcourse')
                }
            } else {
                toast('All fields are required');
            }
        } catch (error) {
            console.log(error);
            toast('An error occurred');
        }
    };

    return (
        <div className="bg-blue-100 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg mt-10">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">Add Course</h2>
                
                <div onClick={()=>router('/admin')} className='cursor-pointer text-blue-800 border-2 border-red-500 mt-4 mb-4 rounded-md text-center w-20 font-bold'>Go back</div>
                
                <form onSubmit={handleSubmit}>
                    
                    <label className="block text-blue-700 font-bold mb-2">Course Name:</label>
                    <input 
                        type='text' 
                        name='courseName' 
                        value={courseData.courseName} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder='Course Name..' 
                    />

                    <label className="block text-blue-700 font-bold mb-2">Level:</label>
                    <select 
                        name='level' 
                        value={courseData.level} 
                        onChange={handleChange}
                        className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value=''>Select Level</option>
                        <option value='Beginner'>Beginner</option>
                        <option value='Intermediate'>Intermediate</option>
                        <option value='Advanced'>Advanced</option>
                    </select>

                    <label className="block text-blue-700 font-bold mb-2">Description:</label>
                    <input 
                        type='text' 
                        name='description' 
                        value={courseData.description} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder='Description' 
                    />

                    <label className="block text-blue-700 font-bold mb-2">Image URL:</label>
                    <input 
                        type='url' 
                        name='image' 
                        value={courseData.image}
                        onChange={handleChange} 
                        className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder='Image URL'
                    />

                    <button
                        type='submit'
                        className="w-full bg-yellow-500 text-blue-700 font-bold py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                        Add Course
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddCourse;
