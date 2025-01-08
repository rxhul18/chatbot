import { questionFamily } from "../store/atoms/questionFamily"
import { useRef, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import 'highlight.js/styles/github-dark.css';
import { chatBotAttributes } from "../store/atoms/attributesData";

export default function Question(props){
  let {userIcon}=useRecoilValue(chatBotAttributes)
  let [currentQuestion,setQuestion]=useRecoilState(questionFamily(props.id))
  
  let [editing,setEditing]=useState(false)
  let questionArea=useRef()
  let originalQuestion=useRef()
  
  function handleEdit(){
    questionArea.current.contentEditable="true"
    // questionArea.current.classList.add("editing")
    setEditing(editing=>!editing)
    originalQuestion.current=questionArea.current.innerText
  }

  function handleSubmit(){
    questionArea.current.contentEditable="false"
    // questionArea.current.classList.remove("editing")
    setEditing(editing=>!editing)
    
    setQuestion(q=>({...q,question:questionArea.current.innerText}))
  }

  function handleCancel(){
    questionArea.current.contentEditable="false"
    // questionArea.current.classList.remove("editing")
    setEditing(editing=>!editing)
    
    questionArea.current.innerText=originalQuestion.current
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
          <i class="fa-solid fa-pen"></i>
        </span>}
    </div>
    {editing&&<div className='flex items-center justify-end gap-2 mt-3'>
        <div 
          onClick={handleSubmit} 
          className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs 
          font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
          disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
          bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-7 px-2 cursor-pointer'>
            <i class="fa-regular fa-save"></i>
            Save
        </div>
        <div 
          onClick={handleCancel} 
          className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs 
          font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
          disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
          bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-7 px-2 cursor-pointer'>
            <i class="fa-solid fa-xmark"></i>
            Cancel
        </div>
    </div>}
  </div>
}