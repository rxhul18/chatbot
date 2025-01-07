import '../styles/style.css'
import 'highlight.js/styles/github-dark.css';
import Input from './inputArea';
import ChatArea from './chatArea';
import Heading from './heading';
import {useEffect } from 'react'
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil'
import { chatBotAttributes } from '../store/atoms/attributesData';
import { chatWindowState } from '../store/atoms/chatWindowState';

export default function ChatBot(props){

  return <RecoilRoot>
    <ChatBotWrapper {...props}/>
  </RecoilRoot>

}

function ChatBotWrapper({
    backendUrl,
    prompt,
    userIcon,
    botIcon,
    chatBotWrapperStyle,
    chatWindowStyle,
    chatBotIconClassName,
    startOpen,
    authToken
}){
    
    let setAttributeData=useSetRecoilState(chatBotAttributes)
    let [open,setWindowOpen]=useRecoilState(chatWindowState)

    useEffect(() => {
      if(!document.getElementById("font-awesome-script")) {
        const script = document.createElement("script");
        script.src = "https://kit.fontawesome.com/b6fe51c8e7.js";
        script.id = "font-awesome-script";
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
        
        setWindowOpen(startOpen?true:false)
      }
    }, []);
    
    useEffect(()=>{
      setAttributeData({backendUrl,authToken,prompt,botIcon,userIcon})
    },[backendUrl,authToken,prompt,botIcon,userIcon])
    
    return <>
    <div className={`flex flex-col items-end justify-end h-[630px] w-[350px] max-w-[600px] gap-2 font-sans __variable_3a0388 antialiased ${!open&&`h-min w-min `} ${chatBotWrapperStyle}`}>
      <div className={`font-sans bg-background rounded-2xl p-[0.6rem] box-border flex flex-col justify-end items-center
         w-full h-full min-w-[270px] min-h-[300px] antialiased text-lg relative backdrop-blur-sm border border-border/60
          dark:border-border ${!open&&` w-0 h-0 hidden `} ${chatWindowStyle}}`}>
          <Heading setWindowState={setWindowOpen}/>
          <ChatArea/>
          <Input/>
      </div>
      {!open&&<div className={`cursor-pointer rounded-2xl w-[3.8rem] aspect-[1/1] bg-secondary/50 text-secondary-foreground bg-cover bg-center flex items-center justify-center text-2xl hover:grayscale-0 hover:rotate-2 ${chatBotIconClassName}`} onClick={()=>setWindowOpen(!open)}>
        <span><img src="./images/plura-logo.png" alt="plura" className="w-8 h-8"/></span>
      </div>}
    </div>
  </>
}
