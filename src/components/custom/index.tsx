import { RecoilRoot } from 'recoil';
import ChatBotContanier from './ChatBotContanier';
import type { ChatBotAttr } from '../../types';
import '../../index.css';

const ChatBot = (props:ChatBotAttr) => {
    return (
        <RecoilRoot>
            <ChatBotContanier {...props} />
        </RecoilRoot>
    );
};

export default ChatBot;