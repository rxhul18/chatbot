import ChatBot from './components';

// plan is to create a chatbot that will be used by our customers, they will simply put their auth token they got after
// registering in the prop, 
// and cool 

// to ask him what features are we giving with the bot? will we be giving discrete set of customization values?

// problems:- how will we authenticate user cant really include auth header(to identify user and their data) in the request
// that will expose it to others
function App() {

  return (
    <div className="bg-secondary/30 flex justify-center  min-h-screen">
      <div className='p-10 md:p-24 flex flex-col items-center gap-5 md:max-w:[700px]'>
        <h1 className='text-5xl md:text-6xl font-semibold tracking-tighter drop-shadow-sm max-w-3xl select-none'>This is how the chatbot will look like.</h1>      
       <ChatBot 
          chatBotWrapperStyle="absolute top-52 md:top-58 max-h-[550px]"
          chatWindowStyle="bg-black" 
          botIcon="./logoImg2.jpg" 
          userIcon= "./logoImg.jpg"         
          backendUrl="https://ask-10x-questions.vercel.app/" 
          // prompt="You are an artist" 
          startOpen={true}
          authToken={""}
        /> 
      </div>
    </div>)
}

export default App;