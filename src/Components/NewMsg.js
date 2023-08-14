'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import robotOk from "../../public/Images/robotOk.gif"
import robotThinkingImg from "../../public/Images/robotThinking.gif"
import Typewriter from 'typewriter-effect'

export default function NewMsg({ userImg, msgType, msg }) {

  const [Animation, setAnimation] = useState(msgType === "user" ? false : true)
  const [botImg, setBotImg] = useState(robotThinkingImg)


  return (
    <div className='w-100% min-h-[20px] p-3 rounded-md flex mb-3 items-center'>

      <Image
        src={msgType === "user" ? userImg : botImg}
        alt="Profile Picture"
        className="rounded-full"
        width={80}
        height={80}
      />

      <div className='ml-4 mobile:text-sm'>
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