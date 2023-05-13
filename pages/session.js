import { useEffect, useRef, useState } from "react";
import Header from "@/components/header";


export default function Session() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();

    const input = prompt.trim();
    setPrompt("");
    console.log(input)

    // setMessages([...messages, {type: "user", text: input}, {type: "bot", text: botReply, url: json.results[0].url}])
    setMessages([...messages, {type: "user", text: input}])
    e.target.style.height = '1.5rem';
  }

  const handleKeyDown = (e) => {
    if (!e.shiftKey && e.keyCode === 13 && prompt.trim()) {
      sendMessage(e);
    }
  }

  function handleResize(e) {
    e.target.style.height = '1.5rem';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  return (
    <main className="flex flex-col h-[100vh]">
      <Header />
      <section className="flex-1 h-full overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col flex-nowrap my-3 p-6 w-full">
          {messages.map((message, i) => (
            <span key={i} className={"p-4 mb-2 rounded-3xl rounded-tl-sm break-words whitespace-pre-wrap" + (message.type === "user" ? " black-gradient text-white" : "")}>
              {/* <img src={message.type ==="user" ? "/user.png" : "/bot.jpg"} className="w-8 h-8 rounded-full mr-4" /> */}
                {message.text}
            </span>
          ))}
          <div ref={bottomRef} />
        </div>
      </section>
      <form onSubmit={sendMessage} className="flex flex-row flex-nowrap p-3 px-6 mx-6 my-4 bg-gray-400 rounded-xl text-white">
        <textarea className="w-full bg-transparent outline-none h-6" placeholder="Send a Text" type="text" value={prompt} onChange={e => setPrompt(e.target.value)} onKeyDown={handleKeyDown} onInput={handleResize} disabled={loading} style={{ resize: 'vertical', overflow: 'hidden' }}/>
        <button className="disabled:text-gray-300 text-white transition-colors ease-in-out duration-700" disabled={!prompt && !loading} onClick={sendMessage}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </button>
      </form>
    </main>
  )
}