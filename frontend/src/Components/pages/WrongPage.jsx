import React from 'react'
import wrongpage from './../project-image/wrongpage.png'
import { useNavigate } from 'react-router-dom'

const WrongPage = () => {
    const router=useNavigate()
   
    setTimeout(()=>{
        router('/')
    },3000)
    
  return (
    <div className="mt-16 bg-slate-300 w-full flex justify-center h-[350px]  md:h-[390px] items-center ">
  <img className="w-96 h-60 shadow shadow-red-900 rounded  " src={wrongpage} />
</div>

  )
}

export default WrongPage
