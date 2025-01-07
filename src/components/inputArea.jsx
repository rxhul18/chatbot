import { useRef } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import 'highlight.js/styles/github-dark.css';
import { v4 as uuidv4 } from 'uuid';
import { questionFamily } from '../store/atoms/questionFamily';
import { allChats } from '../store/atoms/allChats';
import '../styles/style.css'

export default function Input(){
    let inputElement=useRef()
    let submitBtn=useRef()
    let id=useRef(uuidv4());
    let setQuestion=useSetRecoilState(questionFamily(id.current))
    let [history,setChatHistory]=useRecoilState(allChats);
    
    function handleKeyDown(event){
      inputElement.current.value.trim().length!=0?
        submitBtn.current.classList.remove("disabled"):
        submitBtn.current.classList.add("disabled")
      if (event.key === 'Enter') {
        event.preventDefault()
        if(inputElement.current.value.trim().length!=0){
          setQuestion(q=>({...q,question: inputElement.current.value}))
          setChatHistory(history=>[...history,{question:id.current,answer:null}])
          id.current=uuidv4();
          inputElement.current.value="";
          submitBtn.current.classList.add("disabled")
        }
      }
    } 

    function handleSubmit(){
      if(inputElement.current.value!=""){
        setQuestion(q=>({...q,question: inputElement.current.value}))
        setChatHistory(history=>[...history,{question:id.current,answer:null}])
        id.current=uuidv4();
        inputElement.current.value="";
        submitBtn.current.classList.add("disabled")
      }
    }
    
    return <div className='bg-secondary/30 rounded-2xl w-full flex flex-col border border-border/60  dark:border-border relative mt-2'>
      <textarea 
        ref={inputElement} 
        onKeyUp={handleKeyDown} 
        placeholder='Ask your query and press Enter' 
        className='flex flex-grow h-24 rounded-inherit text-base text-start font-medium bg-transparent p-4 resize-none 
        border-none font-sans outline-none'>
      </textarea>
      <span 
        ref={submitBtn} 
        onClick={handleSubmit} 
        className='placeholder-sans placeholder:text-input absolute right-2 top-2 disabled cursor-pointer inline-flex items-center justify-center whitespace-nowrap 
        text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
        disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
        bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 rounded-xl w-9' 
        title="Send"
      >
        <i class="fa-solid fa-square-arrow-up-right"></i>
      </span>
      <InputOptions/>
    </div>
  }
  
function InputOptions(){
    return <div className='bg-secondary/30 rounded-2xl flex flex-grow items-center backdrop-blur-lg 
    supports-[backdrop-filter]:bg-transparent dark:border-border px-4 py-2 h-10 gap-2'>
        <div className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs 
        font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
        disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
        bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-7 px-2 cursor-pointer'>
            <span className='inline-flex items-center rounded-md border text-sm font-semibold transition-colors 
            focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary 
            text-primary-foreground shadow hover:bg-primary/80 px-1 '>
              <i class="fa-regular fa-file"></i>
            </span>
            Media
        </div>
        <div className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs 
        font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
        disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
        bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-7 px-2 cursor-pointer'>
            <span className='inline-flex items-center rounded-md border text-sm font-semibold transition-colors 
            focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary 
            text-primary-foreground shadow hover:bg-primary/80 px-1'>
              <i class="fa-brands fa-soundcloud"></i>
            </span>
            Audio
        </div>
    </div>
}