import { ChatBotAttr } from '@/types'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import ChatArea from './chatArea';
import Input from './inputArea';
import { chatBotAttributes } from '../../store/atoms/attributesData';
import { chatWindowState } from '../../store/atoms/chatWindowState';
import { toggleCredits } from '@/store/atoms/toggleCredits';
import { IconChevronDown } from '@tabler/icons-react';
import clsx from 'clsx';

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
    toggleIconPadding,
    toggleIconRounded,
    height,
    width
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

    return (
        <div className={clsx("flex flex-col items-end justify-end gap-2 font-sans antialiased ",
                { "h-min w-min ": !open },
                chatBotWrapperStyle
            )}>
            <div className={clsx("font-sans rounded-2xl p-[0.6rem] box-border flex flex-col justify-end items-center antialiased text-lg relative backdrop-blur-md border border-border/60 dark:border-border min-w-[200px] min-h-[400px]",
                    { "w-0 h-0 hidden ": !open },chatWindowStyle)}
                style={{
                    width: width || "420px",
                    height: height || "550px"
                }}>
                <ChatArea />
                <Input />
                {creditsVisible && <div className='w-full flex items-center justify-center rounded-2xl mt-1'>
                    <span className='text-center text-xs font-medium text-muted-foreground bg-clip-text max-w-xl select-none gap-1 flex items-center'>
                        Powered by
                        <span className='font-bold'>
                            PluraAI
                        </span>
                    </span>
                </div>}
            </div>
            <div className={`cursor-pointer w-[3.8rem] aspect-[1/1] bg-secondary/50 text-secondary-foreground 
            bg-cover bg-center flex items-center justify-center text-2xl hover:grayscale-0 hover:rotate-2 select-none 
                ${typeof toggleIconRounded === 'string' && ["xs", "sm", "md", "lg", "xl", "2xl", "full"].includes(toggleIconRounded) ? ` rounded-${toggleIconRounded.trim()} ` : ` rounded-2xl `}
                ${toggleIconPadding ? ` p-${toggleIconPadding} ` : ` 24 `} 
                ${chatBotIconClassName}`}
                onClick={() => setWindowOpen(!open)}
                style={{
                    padding: toggleIconPadding,
                }}
            >
                <span>
                    {!open ?
                        <img src="https://www.plura.pro/_next/image?url=%2Fimages%2Fplura-logo.png&w=64&q=75" width="30" height="30" alt="plura" className="w-8 h-8" /> :
                        <IconChevronDown />}
                </span>
            </div>
        </div>
    )
}
