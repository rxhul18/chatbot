import { useEffect, useRef } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { allChats } from '../../store/atoms/allChats';
import { IconSend2 } from '@tabler/icons-react';
import Chat from './answerComponent';
import QuestionComponent from './questions';
import { ChatBotAttr } from '@/types';
import { chatBotAttributes } from '../../store/atoms/attributesData';
import { Button } from '../ui/button';

function scrollToBottom(element: HTMLElement) {
  element.scrollTop = element.scrollHeight
}

export default function ChatArea() {
  const [chatHistory] = useRecoilState(allChats)
  const chatArea = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatArea.current) {
      scrollToBottom(chatArea.current)
    }
  }, [chatHistory])

  return (
    <div className='flex-grow h-max flex flex-col py-10 px-0 rounded-xl w-full overflow-x-hidden text-center z-[998] items-center scroll-smooth no-scrollbar overflow-y-scroll' ref={chatArea}>
      <HeroSection />
      <div style={{ width: "100%" }}>
        {chatHistory.map((history, index) => {
          return (<>
            <QuestionComponent key={index + history.question} id={history.question} question={history.question} />
            <Chat key={index} questionId={history.question} />
          </>)
        })}
      </div>
    </div>
  )
}

function HeroSection() {
  const chatBotAttributesData: ChatBotAttr | null = useRecoilValue(chatBotAttributes) || null;
  const title = chatBotAttributesData?.title || "PluraBot";
  const description = chatBotAttributesData?.description || "Agents and Micro-Services";
  const logo = chatBotAttributesData?.logoImg || "https://www.plura.pro/_next/image?url=%2Fimages%2Fplura-logo.png&w=64&q=75";

  const FaqQuestionList = [
    {
      question: "What is Plura?",
      description: "Plura is a platform that helps you to create knowledge base."
    },
    {
      question: "How to create a new account?",
      description: "You can create a new account clicking on the 'Sign Up' at right."
    }
  ]

  return (
    <div className='mb-8 flex items-center justify-center flex-col gap-2 cursor-crosshair w-full'>
      <img className="w-14 aspect-square" alt='plura' src={logo}></img>
      <h2 className='text-3xl md:text-4xl font-semibold tracking-tighter drop-shadow-sm max-w-3xl select-none'>
        {title}
      </h2>
      <p className='text-center text-base font-semibold text-muted-foreground bg-clip-text max-w-xl select-none'>
        {description}
      </p>
      {FaqQuestionList.map((faq, index) => {
        return (
          <div className="bg-white shadow-lg rounded-lg px-4 py-3 gap-3 flex items-center justify-between w-[90%] mt-2" key={index}>
            <div className='text-left flex flex-col gap-1'>
              <p className="text-black font-semibold leading-[1]">{faq.question}</p>
              <p className="text-gray-500 text-sm leading-[1]">{faq.description}</p>
            </div>
            <Button variant={"secondary"} size={"icon"} title="Send a message" className='min-w-9 cursor-pointer'>
              <IconSend2 size={24} />
            </Button>
          </div>
        )
      })}
    </div>
  )
}