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
    <div className='w-[100%] min-h-[20px] p-3 rounded-md flex mb-3 justify-between'>

      <Image
        src={msgType === "user" ? userImg : botImg}
        alt="Profile Picture"
        className="rounded-full w-[10vw] max-h-[80px] mobile:h-[50px]"
        width={botImg !== robotThinkingImg || msgType === "user" ? 50 : 80}
      />

      <div className='mobile:text-sm w-[80vw] text-gray-600'>
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