import React from 'react'
import { MdCall } from "react-icons/md";


const CallBtn = () => {
  return (
    <div >
       <p className="fixed-bottom ">
    <a href="tel: +1(000) 000-0000 " className="text-decoration-none text-white blink">  <MdCall size={22} />
    &nbsp; +1(000) 000-0000  </a>
    </p>
    </div>
  )
}

export default CallBtn
