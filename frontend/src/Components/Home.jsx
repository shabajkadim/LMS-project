
import React from 'react';

const Home = () => {
  return (
    <div className="bg-blue-900 min-h-screen text-white">
      
      <header className="py-12 bg-blue-800 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl mt-8 font-bold">Welcome to Our Online Learning Management System</h1>
        </div>
      </header>

     
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-8">
            Our platform offers a comprehensive suite of tools to enhance your online learning experience.
            With our user-friendly interface, students can easily access a wide range of courses, track their progress, 
            and interact with instructors. Our system is designed to be fully responsive, ensuring a seamless learning 
            experience on any device, whether you're on a desktop, tablet, or smartphone.
          </p>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ante nec nulla fermentum malesuada. 
            Sed nec lorem in est hendrerit convallis vitae at velit. Quisque pulvinar sapien vel turpis ultricies, eget 
            congue elit fringilla. Cras convallis, arcu vel semper pharetra, risus risus ullamcorper eros, in tempus augue 
            lectus a tortor. Vestibulum varius orci arcu, non egestas leo consequat quis.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
