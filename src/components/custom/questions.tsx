import { useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import "highlight.js/styles/github-dark.css";
import { questionFamily } from "../../store/atoms/questionFamily";
import { chatBotAttributes as chatBotAttributesAtom } from "../../store/atoms/attributesData"; 
import { Question } from "@/types";
import { ChatBotAttr } from "@/types";

export default function QuestionComponent(props: Question) {
  const chatBotAttributes: ChatBotAttr | null = useRecoilValue(chatBotAttributesAtom) || null;
  const userIcon = chatBotAttributes?.userIcon || "default-icon";
  const [currentQuestion,setQuestion]=useRecoilState(questionFamily(props.id))
  
  const [editing,setEditing]=useState(false)
  const questionArea = useRef<HTMLParagraphElement | null>(null);
  const originalQuestion = useRef<string | null>(null); // This should hold a string

  function handleEdit(){
    questionArea.current!.contentEditable="true"
    // questionArea.current.classList.add("editing")
    setEditing(editing=>!editing)
    originalQuestion.current=questionArea.current!.innerText
  }

  function handleSubmit(){
    questionArea.current!.contentEditable="false"
    // questionArea.current.classList.remove("editing")
    setEditing(editing=>!editing)
    
    setQuestion(q=>({...q,question:questionArea.current!.innerText}))
  }

  function handleCancel() {
    if (questionArea.current) {
      questionArea.current.contentEditable = "false";
      setEditing((editing) => !editing);
      questionArea.current!.innerText = originalQuestion.current || "";
    }
  }
  
  return <div className='p-4 flex flex-col flex-grow bg-transparent w-full'>
    <div className='flex gap-2 items-center max-w-100%'>
      <span className="min-w-10">
        <img 
          className="rounded-xl w-10 aspect-square object-cover" 
          src={userIcon||'https://www.plura.pro/_next/image?url=%2Fimages%2Fplura-logo.png&w=64&q=75'}>
        </img>
      </span>
      <p 
        className={`m-0 text-left px-2 font-sans text-sm font-semibold text-foreground ${editing&&'bg-secondary p-3 rounded-2xl flex-grow'}`} 
        ref={questionArea}
      >
        {currentQuestion.question}
      </p>
      {!editing&&
        <span className=' text-xs px-2 py-2 w-6  cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md
        font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
        disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
        bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-5' onClick={handleEdit}>
          <i className="fa-solid fa-pen"></i>
        </span>}
    </div>
    {editing&&<div className='flex items-center justify-end gap-2 mt-3'>
        <div 
          onClick={handleSubmit} 
          className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs 
          font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
          disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
          bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-7 px-2 cursor-pointer'>
            <i className="fa-regular fa-save"></i>
            Save
        </div>
        <div 
          onClick={handleCancel} 
          className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs 
          font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
          disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
          bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-7 px-2 cursor-pointer'>
            <i className="fa-solid fa-xmark"></i>
            Cancel
        </div>
    </div>}
  </div>
}