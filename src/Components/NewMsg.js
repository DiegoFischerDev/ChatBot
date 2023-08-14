'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import robotOk from "../../public/Images/robotOk.gif"
import robotThinkingImg from "../../public/Images/robotThinking.gif"
import Typewriter from 'typewriter-effect'

export default function NewMsg({ userImg, msgType, msg }) {

  const [Animation, setAnimation] = useState(msgType === "user" ? false : true)
  const [botImg, setBotImg] = useState(robotThinkingImg)
  const [directory, setDirectory] = useState("Images/robotThinking.gif")

  useEffect(()=>{
    
    if(msgType === "user"){
      setDirectory("Images/userImg.jpg")
    }
    if(msgType === "bot"){
      if(botImg === robotThinkingImg){
        setDirectory("Images/robotThinking.gif")
      } else {
        setDirectory("Images/robotOk.gif")
      }
    }
  },[botImg])

  return (
    <div className='w-100% min-h-[20px] p-3 rounded-md flex mb-3 items-center'>

      <img
      src={directory}
      alt="Profile Picture"
      className="rounded-full w-[15%]"
      />

      <div className='w-[82%] ml-4 mobile:text-sm'>
        {!Animation ? <span>{msg}</span> : <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("")
              .changeDelay('30')
              .pauseFor(4000)
              .start()
              .callFunction(() => {
                setBotImg(robotOk)
              })
            typewriter.typeString(msg)
              .start()
              .callFunction(() => {
                setAnimation(false)
              })
          }}
        />}
      </div>

    </div>
  );
}