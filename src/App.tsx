import "./App.css";
import ChatBot from './components/custom';

export default function App() {
    return (
        <>
            <div className="bg-secondary/30 flex justify-center h-screen">
                <div className='p-10 md:p-24 flex flex-col items-center gap-5 container mx-auto'>
                    <h1 className='text-5xl md:text-6xl font-semibold tracking-tighter drop-shadow-sm select-none'>This is how the chatbot looks like.</h1>
                    <ChatBot
                        chatBotWrapperStyle="fixed bottom-4 right-4 md:top-58 max-h-[600px]"
                        chatWindowStyle="bg-red"
                        botIcon=""
                        userIcon=""
                        // prompt="You are an artist" 
                        startOpen={true}
                        authToken={""}
                        title="Something dfvfdv"
                        description="Why not ask you questions?" 
                        chatBotIconClassName=""
                        logoImg=""
                    />
                </div>
            </div>
        </>

    )
}

