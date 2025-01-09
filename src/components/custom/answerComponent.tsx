import { useEffect, useRef } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import remarkGfm from "remark-gfm";
import { v4 as uuidv4 } from 'uuid';
import { allChats } from '../../store/atoms/allChats';
// import { answerFamily } from '../../store/atoms/answerFamily';
import { chatBotAttributes as chatBotAttributesAtom } from "../../store/atoms/attributesData"; 
import { useState } from 'react';
import { ChatBotAttr } from '@/types';

type ChatProp={
  questionId: string
}

export default function Chat(props:ChatProp) {
  const chatBotAttributes: ChatBotAttr | null = useRecoilValue(chatBotAttributesAtom) || null;

  const botIcon = chatBotAttributes?.botIcon || "default-icon";
  
  const answerId = useRef(uuidv4())
  // let [currentAnswer,setAnswer]=useRecoilStateLoadable(answerFamily({id:answerId.current,question:askedQuestion.question}))
  const [currentAnswer]=useState({contents:"Hi, this is a dummy answer!!",state: "loaded"})
  
  const [chatHistory, setChatHistory] = useRecoilState(allChats)

  useEffect(() => {
    const updatedAnswerId = chatHistory.map(chat =>
      chat.question === props.questionId
        ? { ...chat, answer: answerId.current }
        : chat
    );
    setChatHistory(updatedAnswerId);
  });
  
  function handleCopy() {
    navigator.clipboard.writeText(currentAnswer.contents);
  }

  if (currentAnswer.state === 'loading') {

    return <div className="bg-secondary p-3 flex gap-2 rounded-xl flex-grow flex-col space-y-6 border-t-2 border-r border-[#333] border-opacity-80 m-3 bg-gradient-to-br from-secondary/30 to-[#262829]">
      <div className="w-[2.6rem] aspect-square  bg-gradient-to-br from-primary/30 to-[#262829] rounded-xl animate-[loading_2s_infinite]" />
      <div className="m-0 flex flex-col w-full">
        <p className="m-0 px-2 animate-[loading_2s_infinite] bg-gradient-to-br from-primary/30 to-[#262829] h-8 rounded-lg flex-grow"></p>
      </div>
    </div>
  }

  if (currentAnswer.state === 'hasError') {
    console.log(currentAnswer.contents);

    return <div style={{ display: "flex", justifyContent: "center" }}>
      <div className='inline-flex justify-center items-center gap-2 whitespace-nowrap rounded-md text-xs 
          font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
          disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
          bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-8 w-max px-2 cursor-pointer m-4'
      >
        Some Error Occured While Generating Response
      </div>
    </div>
  }

  return <div className=' flex gap-2 flex-grow flex-col space-y-1.5 border-t-2 border-r border-[#333] border-opacity-80 m-3 bg-gradient-to-br from-secondary/30 to-[#262829] border text-card-foreground shadow bg-secondary/30 backdrop-blur-lg rounded-2xl p-2'>
    <span className="min-w-10">
      <img
        className="rounded-xl w-10 aspect-square object-cover"
        src={botIcon || 'https://www.plura.pro/_next/image?url=%2Fimages%2Fplura-logo.png&w=64&q=75'}>
      </img>
    </span>
    <div className='m-0 flex flex-col w-full overflow-x-scroll'>
      <p className='m-0 text-sm text-left px-2 text-secondary-foreground font-sans '>
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
          {currentAnswer.contents}
        </ReactMarkdown>
      </p>
      <div className='flex w-full justify-end mt-2 gap-2'>
        <div
          onClick={handleCopy}
          className='inline-flex justify-center items-center gap-2 whitespace-nowrap rounded-md text-xs 
          font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
          disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
          bg-sidebar text-secondary-foreground shadow-sm hover:bg-secondary/80 h-8 w-max px-2 cursor-pointer '>
          <i className="fa-regular fa-clipboard"></i>
          Copy
        </div>
      </div>
    </div>
  </div>
}