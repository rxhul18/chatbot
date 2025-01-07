import { useEffect, useRef } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import Online from './onlineIndicator';
import { allChats } from '../store/atoms/allChats';
import Question from './questions';
import Chat from './answerComponent';
import '../styles/style.css'

function scrollToBottom(element) {
  element.scrollTop = element.scrollHeight
}

export default function ChatArea() {
  let [chatHistory, setChatHistory] = useRecoilState(allChats)
  let chatArea = useRef();

  useEffect(() => {
    scrollToBottom(chatArea.current)
  }, [chatHistory])

  return <div className='flex-grow h-max flex flex-col overflow-y-scroll py-16 px-0 rounded-xl w-full overflow-x-hidden text-center z-[998] items-center scroll-smooth' ref={chatArea}>
    {/* <Online/> */}
    <HeroSection />
    <div style={{ width: "100%" }}>
      {chatHistory.map((history, index) => {
        return (<>
          <Question key={index + history.question} id={history.question} />
          <Chat key={index} questionId={history.question} />
        </>)
      })}
    </div>
  </div>
}

function HeroSection() {

  return <div className='mb-8 flex items-center justify-center flex-col gap-2 cursor-crosshair w-full'>
    <h2 className='text-3xl md:text-4xl font-semibold tracking-tighter drop-shadow-sm max-w-3xl select-none'>
      Plura.
      <span className='font-semibold tracking-tighter drop-shadow-sm max-w-3xl select-none'>
        pro
      </span>
    </h2>
    <p className='text-center text-base font-semibold text-muted-foreground bg-clip-text max-w-xl select-none'>
      Agents and Micro-Services 
    </p>
    {/* <span style={{background:"rgb(44 44 44)",padding:"0.3rem 1.1rem",borderRadius:"1.6rem",margin:"1rem"}}> */}
        {/* <p className='hero-description'>Start Asking your Burning Questions</p> */}
      {/* </span> */}
  </div>
}