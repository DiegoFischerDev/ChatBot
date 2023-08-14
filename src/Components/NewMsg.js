'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import robotOk from "../../public/Images/robotOk.gif"
import robotThinkingImg from "../../public/Images/robotThinking.gif"
import Typewriter from 'typewriter-effect'

export default function NewMsg({ userImg, msgType, msg }) {

const [Animation, setAnimation] = useState(msgType === "user" ? false : true)
const [robotThinking, setRobotThinking] = useState(msgType === "user" ? false : true)
const [botImg, setBotImg] = useState(robotThinkingImg)

  return (
    <div className='w-100% min-h-[20px] bg-slate-100 p-3 rounded-md flex mb-3'>

      <Image
        src={msgType === "user" ? userImg : botImg}
        alt="Profile Picture"
        className="w-[15vw] max-w-[80px] max-h-[80px] rounded-full"
      />

      <div className='ml-2'>
        {!Animation ? <span>{msg}</span> : <Typewriter
         onInit={(typewriter) => {
          typewriter.typeString("")
          .changeDelay('30')
          .pauseFor(4000)
          .start()
          .callFunction(()=>{
            setRobotThinking(false)
            setBotImg(robotOk)
          })
          typewriter.typeString(msg)
          .start()
          .callFunction(()=>{
            setAnimation(false)
          })
         }}
        />}
      </div>

    </div>
  );
}