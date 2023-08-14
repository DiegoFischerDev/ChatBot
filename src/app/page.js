'use client'

import Image from "next/image";
import userImg from "../../public/Images/userImg.jpg"
import NewMsg from "@/Components/NewMsg";
import { useState } from "react";
import robotHello from "../../public/Images/robotHello.gif"

export default function Home() {

  const chatMock = [
    {
      msgType: "bot",
      msg: "Ola, sou o ChatBot. Me faça uma pergunta."
    }
  ]

  const [chat, setChat] = useState([])
  const [msgInput, setMsgInput] = useState("")

  function handleSend() {
    if (msgInput) {

      const newChat = [...chat]

      newChat.push({
        msgType: "user",
        msg: msgInput
      })

      setChat(newChat)
      setMsgInput("")
      handleBotAnswer(newChat)
    }
  }

  function handleBotAnswer(newChat) {

    newChat.push({
      msgType: "bot",
      msg: "asdasdsa asd asda sdas dasd asaf asdas dasd asd afasds ad asdasd asdas asda dasasdasdsa asd asda sdas dasd asaf asdas dasd asd asd asda sdas dasd asaf asdas dasd asd afasds ad asdasd asdas asda dasasdasdsa asd asda sdas dasd asaf asdas dasd asd afasds ad asdasd asdas asda."
    })

    setChat(newChat)
  }

  return (
    <section className="bg-[url('../../public/Images/bg.jpg')] bg-cover relative w-full min-h-[100vh] flex items-center justify-center">

      <div className="bg-white relative w-[100vw] max-w-[800px] p-5 py-5 rounded-2xl tablet:rounded-none shadow-md min-h-[90vh] tablet:min-h-[100vh] mobile:min-h-0 flex flex-col justify-between">

        <div className="w-full rounded-se-2xl flex items-center justify-center tablet:justify-start px-5 rounded-ss-2xl h-16  absolute tablet:fixed left-0 top-0 bg-black text-white tablet:rounded-none">
          <h1 className="text-3xl">ChatBot</h1>
          <button onClick={() => { setChat([]) }} className="absolute right-5 top-6 text-sm">Clean Chat</button>
        </div>

        <div className="pb-40 mobile:pb-20">

          <div className="h-20">
          </div>

          {!chat[0] &&
            <div className="flex flex-col items-center justify-center w-full h-[50vh]">
              <Image
                src={robotHello}
                alt="Profile Picture"
                className="w-[40%] rounded-full mb-10 -ml-7"
              />

              <h1 className="text-lg">Hello, I am ChatBot,</h1>
              <h1 className="text-lg">ask me a question...</h1>
            </div>
          }

          {chat?.map((msg, index) => {
            return <NewMsg
              key={index}
              userImg={userImg}
              msgType={msg.msgType}// "user" or "bot"
              msg={msg.msg}
            />
          })}

        </div>

        <div className="absolute tablet:fixed bottom-0 left-0 w-full bg-gray-100 flex p-4 rounded">
          <textarea value={msgInput} onChange={(e) => { setMsgInput(e.target.value) }} className="w-full p-3" />
          <div className="ml-5 h-full flex justify-between flex-col">
            <Image
              src={userImg}
              alt="Profile Picture"
              className="w-[10vw] min-w-[50px] max-w-[80px] max-h-[80px] rounded-full"
            />
            <button disabled={msgInput ? false : true} onClick={handleSend} className="w-[10vw] min-w-[50px] max-w-[80px] h-[10vh] max-h-[60px] bg-black text-sm text-white p-1 mt-1 rounded">Send</button>
          </div>
        </div>
      </div>
    </section>
  )
}
