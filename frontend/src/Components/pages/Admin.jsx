import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const router = useNavigate();

    function addCoursePage() {
        router('/addcourse');
    }

    function instructorPage() {
        router('/instructor');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>

            <div className="flex flex-col md:flex-row md:space-x-4">
                <div 
                    className="border-2 border-red-500 cursor-pointer p-4 rounded-lg bg-yellow-500 shadow-lg w-full md:w-64 h-60 flex items-center justify-center text-center font-bold text-gray-900 text-2xl mb-4 md:mb-0"
                    onClick={addCoursePage}
                >
                    Add Courses
                </div>
                <div 
                    className="border-2 border-red-500 cursor-pointer p-4 rounded-lg bg-yellow-500 shadow-md w-full md:w-64 h-60 flex items-center justify-center text-center font-bold text-gray-900 text-2xl"
                    onClick={instructorPage}
                >
                    Add Schedule
                </div>
            </div>
        </div>
    );
}

export default Admin;
