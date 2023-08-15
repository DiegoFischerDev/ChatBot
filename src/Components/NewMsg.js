'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import robotOk from "../../public/Images/robotOk.gif"
import robotThinkingImg from "../../public/Images/robotThinking.gif"
import Typewriter from 'typewriter-effect'

export default function NewMsg({ userImg, msgType, msg }) {

  const [message, setMessage] = useState(msg)

  useEffect(() => {
    setMessage(msg)
    console.log(msg)
  }, [msg])

  return (
    <div className='w-[100%] min-h-[20px] p-3 rounded-md flex items-center mb-3'>

      <div className='flex flex-col items-start mr-4 w-1/12'>
        <Image
          src={(msgType === "user" && userImg) || (msgType === "bot" && message !== "" && robotOk) || (msgType === "bot" && message === "" && robotThinkingImg)}
          alt="Profile Picture"
          className="rounded-full"
          width={50}
        />
      </div>

      <div className='mobile:text-sm text-gray-600 w-11/12'>

        {msgType === "bot" && message !== "" ? 
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("")
              .changeDelay('30')
            typewriter.typeString(message)
              .changeDelay('30')
              .start()
          }}
        /> 
        : 
        <p>{message}</p>
        }

      </div>

    </div>
  );
}