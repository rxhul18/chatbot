import { useRef } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import 'highlight.js/styles/github-dark.css';
import { v4 as uuidv4 } from 'uuid';
import { questionFamily } from '../../store/atoms/questionFamily';
import { allChats } from '../../store/atoms/allChats';
import { submitIconState } from '../../store/atoms/submitIconState';
import '../../index.css'
import { ChatHistory } from '@/types';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { CircleFadingArrowUp, Paperclip } from 'lucide-react';
import { IconMicrophone } from '@tabler/icons-react';

export default function Input() {
  const inputElement = useRef<HTMLTextAreaElement>(null)
  const submitBtn = useRef(null);
  const id = useRef(uuidv4());
  const setQuestion = useSetRecoilState(questionFamily(id.current))
  const [chatHistory, setChatHistory] = useRecoilState<ChatHistory>(allChats);
  const [disabled, setDisabled] = useRecoilState(submitIconState);

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (inputElement.current) {
      setDisabled(inputElement.current.value.trim().length === 0);
    }
    if (event.key === 'Enter') {
      event.preventDefault()
      if (!disabled && inputElement.current) {
        setQuestion(q => ({ ...q, question: inputElement.current!.value }))
        setChatHistory([...chatHistory, { question: id.current, answer: null }])
        id.current = uuidv4();
        inputElement.current.value = "";
        setDisabled(true)
      }
    }
  }

  function handleSubmit() {
    if (!disabled) {
      setQuestion(q => ({ ...q, question: inputElement.current!.value }))
      setChatHistory(history => [...history, { question: id.current, answer: null }])
      id.current = uuidv4();
      if (inputElement.current) {
        inputElement.current.value = "";
      }
      setDisabled(true)
    }
  }

  return (
    <div className='bg-secondary/30 rounded-xl w-full flex flex-col border relative mt-2 '>
      <Textarea ref={inputElement} onKeyUp={handleKeyDown} placeholder='Ask your query and press Enter'
        className='h-24 resize-none outline-none ring-0 no-scrollbar overflow-y-scroll focus-visible:ring-0 focus-visible:ring-neutral-900 
      focus:oultine-none focus:stroke-none border-none focus:border-none placeholder:text-neutral-600 text-md'/>
      <Button
        ref={submitBtn}
        onClick={handleSubmit}
        variant={"default"}
        size={"icon"}
        className={`absolute right-2 top-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${disabled && `opacity-40 cursor-not-allowed`}`}
        title="Send"
      >
        <CircleFadingArrowUp />
      </Button >
      <InputOptions />
    </div>
  )
}

function InputOptions() {
  return (
    <div className='bg-secondary flex flex-grow items-center supports-[backdrop-filter]:bg-transparent p-2 h-10 gap-2 '>
      <Button className='bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-7 text-xs px-2 cursor-pointer' typeof='file' type="button">
        <Paperclip />
        Media
      </Button>
      <Button className='bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-7 text-xs px-2 cursor-pointer' typeof='file' type="button">
        <IconMicrophone />
        Audio
      </Button>
    </div>
  )
}