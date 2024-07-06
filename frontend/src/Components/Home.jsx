import React from 'react'
import toast from 'react-hot-toast'

const Home = () => {
    function message(){
        toast("hello")
    }
  return (
    <div>
      home
      <button onClick={()=>message()}>toaster</button>
    </div>
  )
}

export default Home
