'use client'

import Image from "next/image";
import userImg from "../../public/Images/userImg.jpg"
import NewMsg from "@/Components/NewMsg";
import { useState } from "react";
import robotHello from "../../public/Images/robotHello.gif"
import robotDontKnow from "../../public/Images/robotDontKnow.gif"

export default function Home() {

  const [chat, setChat] = useState([])
  const [apiError, setApiError] = useState("")
  const [msgInput, setMsgInput] = useState("")
  const [disableNewInput, setDisableNewInput] = useState(false)

  function handleSend() {

    setDisableNewInput(true)

    const newChat = [...chat]

    newChat.push({
      msgType: "user",
      msg: msgInput
    })

    setChat(newChat)
    handleBotAnswer(newChat)
  }

  function handleBotAnswer(newChat) {

    newChat.push({
      msgType: "bot",
      msg: ""
    })

    setChat(newChat)

    fetch('https://apibotlegal.arsenaltecnologia.com.br/api/ask', {
      method: 'POST',
      body: JSON.stringify({ question: msgInput }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(result => result.json().then(jsonResult => {
      senAnswer(newChat, jsonResult.chat_history[1])
    }).catch(err => setApiError(err))
    );
  }

  function senAnswer(newChat, answer) {

    if (msgInput) {
      setMsgInput("")
      setDisableNewInput(false)
      newChat.pop()
      newChat.push({
        msgType: "bot",
        msg: answer
      })

      setChat(newChat)
    }
  }

  return (
    <section className="bg-gray-200 relative w-screen min-h-screen tablet:min-h-0 flex justify-center overflow-hidden">

      <div className="bg-white relative w-screen max-w-[800px] p-5 tablet:p-0 rounded-2xl tablet:rounded-none shadow-md my-16 tablet:my-0">

        <div className="w-full rounded-se-2xl flex items-center justify-center tablet:justify-start px-5 rounded-ss-2xl h-16 absolute tablet:fixed left-0 top-0 z-50 bg-black text-white tablet:rounded-none">
          <h1 className="text-3xl">ChatBot</h1>
          <button onClick={() => { setChat([]); setDisableNewInput(false); setMsgInput("") }} className="absolute right-5 top-6 text-sm">Clean Chat</button>
        </div>

        <div className="pb-40 mobile:pb-32">

          <div className="h-20">
          </div>

          {!chat[0] && !apiError &&
            <div className="flex flex-col items-center justify-center w-full h-[50vh]">
              <Image
                src={robotHello}
                alt="Profile Picture"
                className="w-[40%] mb-10 -ml-7"
              />

              <h1 className="text-lg">Ola,</h1>
              <h1 className="text-lg">Me faça uma pergunta sobre a</h1>
              <h1 className="text-lg">Constituição de Pernambuco.</h1>
            </div>
          }

          {apiError &&
            <div className="flex flex-col items-center justify-center w-full h-[50vh]">
              <Image
                src={robotDontKnow}
                alt="Profile Picture"
                className="w-[40%] mb-10 -ml-7"
              />

              <h1 className="text-lg">Conection Error</h1>
              <h1 className="text-lg">{apiError}</h1>
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

        <div className="absolute tablet:fixed bottom-0 left-0 w-full bg-gray-100 flex p-4 border-t">
          <textarea disabled={disableNewInput} value={msgInput} onChange={(e) => { setMsgInput(e.target.value) }} className="w-full p-3" />
          <div className="ml-5 h-full flex justify-between flex-col">
            <Image
              src={userImg}
              alt="Profile Picture"
              className="w-[10vw] min-w-[50px] max-w-[80px] max-h-[80px] rounded-full"
            />
            <button disabled={disableNewInput || msgInput === ""} onClick={handleSend} className="w-[10vw] min-w-[50px] max-w-[80px] h-[4vh] max-h-[60px] bg-black text-sm text-white p-1 mt-1 rounded">Send</button>
          </div>
        </div>
      </div>
    </section>
  )
}
