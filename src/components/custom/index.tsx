import { RecoilRoot } from 'recoil'
import ChatBotContanier from './ChatBotContanier'
import { ChatBotAttr } from '@/types'
import '../../index.css'

export default function ChatBot(props:ChatBotAttr){
  return(
  <RecoilRoot>
    <ChatBotContanier {...props}/>
  </RecoilRoot>
  )
}