import { ChatBotAttr } from '@/types'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import ChatArea from './chatArea';
import Input from './inputArea';
import { chatBotAttributes } from '../../store/atoms/attributesData';
import { chatWindowState } from '../../store/atoms/chatWindowState';
import { toggleCredits } from '@/store/atoms/toggleCredits';

export default function ChatBotContanier({
    prompt,
    userIcon,
    botIcon,
    chatBotWrapperStyle,
    chatWindowStyle,
    chatBotIconClassName,
    startOpen,
    authToken,
    title,
    description,
    logoImg,
    toggleIconBorder,
    toggleIconPadding,
    toggleIconRounded
}: ChatBotAttr) {
    const setAttributeData = useSetRecoilState(chatBotAttributes)
    const creditsVisible = useRecoilValue(toggleCredits)
    const [open, setWindowOpen] = useRecoilState(chatWindowState)

    useEffect(() => {
        if (!document.getElementById("font-awesome-script")) {
            const script = document.createElement("script");
            script.src = "https://kit.fontawesome.com/b6fe51c8e7.js";
            script.id = "font-awesome-script";
            script.crossOrigin = "anonymous";
            document.body.appendChild(script);
            setWindowOpen(startOpen ? true : false)
        }
    }, []);

    useEffect(() => {
        setAttributeData({ authToken, prompt, botIcon, userIcon, title, description, logoImg })
    }, [authToken, prompt, botIcon, userIcon, title, description, logoImg])
console.log(toggleIconRounded);

    
    return (
        <div className={`flex flex-col items-end justify-end w-[420px] gap-2 font-sans antialiased ${!open && `h-min w-min `} ${chatBotWrapperStyle}`}>
            <div className={`font-sans bg-background rounded-2xl p-[0.6rem] box-border flex flex-col justify-end items-center
         w-full h-full min-w-[270px] min-h-[300px] antialiased text-lg relative backdrop-blur-sm border border-border/60
         resize overflow-auto dark:border-border ${!open && ` w-0 h-0 hidden `} ${chatWindowStyle}}`}>
                <ChatArea />
                <Input />
                {creditsVisible&&<div className='w-full flex items-center justify-center rounded-2xl mt-1'>
                    <span className='text-center text-xs font-medium text-muted-foreground bg-clip-text max-w-xl select-none gap-1 flex items-center'>
                        Powered by 
                        <span className='font-bold'>
                            PluraAI
                        </span>
                    </span>
                </div>}
            </div>
            <div className={`cursor-pointer w-[3.8rem] aspect-[1/1] bg-secondary/50 text-secondary-foreground 
            bg-cover bg-center flex items-center justify-center text-2xl hover:grayscale-0 hover:rotate-2 
                ${typeof toggleIconRounded === 'string' && ["xs", "sm", "md", "lg", "xl", "2xl", "full"].includes(toggleIconRounded) ? ` rounded-${toggleIconRounded.trim()} ` : ` rounded-2xl `}
                ${toggleIconPadding?` p-${toggleIconPadding} `:` 24 `} 
                ${toggleIconBorder?` border-${toggleIconBorder} `:` `} 
                ${chatBotIconClassName}`} 
                onClick={() => setWindowOpen(!open)}
            >
                <span>
                    {!open?
                    <img src="https://www.plura.pro/_next/image?url=%2Fimages%2Fplura-logo.png&w=64&q=75" width="30"  height="30" alt="plura" className="w-8 h-8" />:
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>}
                </span>
            </div>
        </div>
    )
}
