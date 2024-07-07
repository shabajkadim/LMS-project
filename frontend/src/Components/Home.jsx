

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [instructors, setInstructors] = useState([]);
  

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/auth/all-user');
      console.log('API response:', response.data);
      if (response.data.success) {
       
        setInstructors(response.data.user);
      } 
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  

  return (
    <div className='border-2 border-color: inherit'>
      <h1>Home</h1>
      <div>
                <select>
                  <option value="" disabled selected>
                    Select Name
                  </option>
                  {instructors.map((instructor, idx) => (
                    <option key={idx} value={instructor.firstname}>
                      {instructor.firstname}
                    </option>
                  ))}
                </select>
              </div>
    </div>
  );
};

export default Home;
