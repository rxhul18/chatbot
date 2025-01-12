export type ChatBotAttr = {
    prompt?: string | null,
    userIcon?: string | null,
    botIcon?: string | null,
    chatBotWrapperStyle?: string | null,
    chatWindowStyle?: string | null,
    chatBotIconClassName?: string | null,
    startOpen?: boolean | null,
    authToken: string | null,
    title?: string | null,
    description?: string|null,
    logoImg?: string|null,
    toggleIconRounded?: string|null,
    toggleIconPadding?:  CSSProperties['padding'],
    toggleIconBorder?: string|null,
    height?: CSSProperties['height'],
    width?: CSSProperties['width']
}

export type Question ={
    id: string | number; // Adjust type based on your use case
    question: string;
}

export type ChatEntry ={
    question: string; // The user's question
    answer: string | null; // The bot's answer (null if not yet provided)
}
  
// Type for the chat history state
export type ChatHistory = ChatEntry[];

export type FetchAnswersParams = {
    id: string | number; 
    question: string;    
}
  
//chatbot attributes from chatBotAttributes
export type ChatBotAttributes = {
    backendUrl: string;  
    prompt?: string;     
    authToken?: string;
}

export type Answer = {
    id: string | number; // Unique identifier for the answer
    question: string;    // The user's question
    answer: string;      // The bot's response
}

export type AnswerFamilyType = Answer | undefined;
