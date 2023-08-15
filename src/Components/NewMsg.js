'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import robotOk from "../../public/Images/robotOk.gif"
import robotThinkingImg from "../../public/Images/robotThinking.gif"
import Typewriter from 'typewriter-effect'

export default function NewMsg({ userImg, msgType, msg }) {

  const [Animation, setAnimation] = useState(true)

  return (
    <div className='w-[100%] p-3 rounded-md flex flex-col mobile:text-sm customClasse relative'>

      <div className='flex flex-col items-start mb-1 absolute left-0 top-0 customClasseImage'>
        <Image
          src={(msgType === "user" && userImg) || (msgType === "bot" && msg !== "" && robotOk) || (msgType === "bot" && msg === "" && robotThinkingImg)}
          alt="Profile Picture"
          className="rounded-full"
          width={50}
        />
      </div>

      <div className='mobile:text-sm text-gray-600'>

        {msgType === "bot" && msg !== "" && Animation ? 
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("")
              .changeDelay('30')
            typewriter.typeString(msg)
              .changeDelay('30')
              .start()
              .callFunction(()=>{
                setAnimation(false)
              })
          }}
        /> 
        : 
        <p>{msg}</p>
        }

      </div>

    </div>
  );
}