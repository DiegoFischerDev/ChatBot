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

      <Image
        src={(msgType === "user" && userImg) || (msgType === "bot" && message !== "" && robotOk) || (msgType === "bot" && message === "" && robotThinkingImg)}
        alt="Profile Picture"
        className="rounded-full max-h-[50px]"
        width={50}
        height={50}
      />

      <div className='mobile:text-sm w-[80vw] ml-4 text-gray-600'>

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
        <span>{message}</span>
        }

      </div>

    </div>
  );
}