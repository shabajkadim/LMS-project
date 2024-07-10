// import React, { useState } from 'react'

// const AddCourse = () => {
//     const [addcourse,setAddCourse]=useState([])

//   return (
//     <div>
//       AddCourse
//       <form>
//         <input type='text'  placeholder='Course Name..' /><br/>
//         <select >
//             <option >Selected Level</option>
//             <option>Biggener</option>
//             <option>Intermidate</option>
//             <option>Advance</option>
//         </select><br/>
//         <input type='texr' placeholder='Description'  /><br/>

//         <input type='file' placeholder='image' /><br/>
//         <input type='submit' value="Add-Course" />
//       </form>
//     </div>
//   )
// }

// export default AddCourse

import React, { useState } from 'react';
// import axios from 'axios';
import toast from 'react-hot-toast';

const AddCourse = () => {
    const [courseData, setCourseData] = useState({
        name: '',
        level: '',
        description: '',
        image: ''
    });
console.log(courseData);

    const handleChange = (e) => {
        setCourseData({...courseData,[e.target.name]:e.target.value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (courseData.name && courseData.level && courseData.description && courseData.image) {
                
                const response={data:{success:true, message:"Couse added successsfully"}}

                if (response.data.success) {
                    toast(response.data.message);
                   
                    setCourseData({
                        name: '',
                        level: '',
                        description: '',
                        image: ''
                    });
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
        <div>
            <p>Addcouse</p><br/><br/>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='name' 
                    value={courseData.name} 
                    onChange={handleChange} 
                    placeholder='Course Name..' 
                /><br/><br/>
                <select name='level' value={courseData.level} onChange={handleChange}>
                    <option value=''>Select Level</option>
                    <option value='Beginner'>Beginner</option>
                    <option value='Intermediate'>Intermediate</option>
                    <option value='Advanced'>Advanced</option>
                </select><br/><br/>
                <input 
                    type='text' 
                    name='description' 
                    value={courseData.description} 
                    onChange={handleChange} 
                    placeholder='Description' 
                /><br/><br/>
                <input 
                    type='url' 
                    name='image' 
                    value={courseData.image}
                    onChange={handleChange} 
                    placeholder='Image URL'
                /><br/><br/>
                <input type='submit' value='Add Course' />
                
            </form>

            

        </div>
        
    );
}

export default AddCourse;

