import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const GetCourse = () => {
    const [getData, setGetData] = useState([]);
    console.log(getData, "1234");

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
            <h1 className="text-3xl font-bold text-blue-700 mt-20 mb-6">All Courses</h1>
            {getData?.length ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="flex flex-col items-center">
                    <p className="text-white">Loading courses...</p>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KkMDy6WNxbAFLBcpdrRJZP1nwDwr9nvmTw&s' alt='loadingimg' className="w-24 h-24 mt-4" />
                </div>
            )}
        </div>
    );
}

export default GetCourse;
