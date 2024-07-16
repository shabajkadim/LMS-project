import React from 'react'

const Aboute = () => {
    return (
        <div className="mt-16 bg-indigo-200 text-slate-900 md:h-[400px]">
          <div className="container mx-auto p-4">
            <h1 className="text-l md:text-4xl  font-bold mb-4">Welcome to Our Online Learning Management System</h1>
            <p className="mb-8">
              Our platform offers a comprehensive suite of tools to enhance your online learning experience.
              With our user-friendly interface, students can easily access a wide range of courses, track their progress, 
              and interact with instructors. Our system is designed to be fully responsive, ensuring a seamless learning 
              experience on any device, whether you're on a desktop, tablet, or smartphone.
            </p>
            <div className="flex flex-wrap justify-center">
              {/* Add content or components related to your instructors or courses here */}
            </div>
          </div>
        </div>
      );
}

export default Aboute
