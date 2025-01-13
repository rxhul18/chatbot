import { CSSProperties } from 'react';

export interface ChatBotAttr {
    prompt?: string | null;
    userIcon?: string | null;
    botIcon?: string | null;
    chatBotWrapperStyle?: string | null;
    chatWindowStyle?: string | null;
    chatBotIconClassName?: string | null;
    startOpen?: boolean | null;
    authToken: string | null;
    title?: string | null;
    description?: string | null;
    logoImg?: string | null;
    toggleIconRounded?: string | null;
    toggleIconPadding?: CSSProperties['padding'];
    toggleIconBorder?: string | null;
    height?: CSSProperties['height'];
    width?: CSSProperties['width'];
}

export interface Question {
    id: string | number;
    question: string;
}

export interface ChatEntry {
    question: string;
    answer: string | null;
}

export interface Answer {
    id: string | number;
    question: string;
    answer: string;
}

export type ChatHistory = ChatEntry[];

export interface FetchAnswersParams {
    id: string | number;
    question: string;
}

export interface ChatBotAttributes {
    backendUrl: string;
    prompt?: string;
    authToken?: string;
}

export type AnswerFamilyType = Answer | undefined;