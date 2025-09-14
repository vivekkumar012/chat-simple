
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [messages, setMessages]  = useState(["hi there"]);
  const wsRef = useRef();
 
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (event) => {
      setMessages(m => [...m, event.data]);
    }
    wsRef.current = ws;

    ws.onmessage = () => {
      ws.send(JSON.stringify({
        type: "join",
        payload: {
          roomId: "red"
        }
      }))
    }

  }, []);

  return (
    <div className='h-screen bg-black'>
      <br /> <br />
      <div className='h-[90vh]'>
        {messages.map(message => <div className='m-8'> <span className='bg-white text-black p-8 rounded'>{message}</span> </div>)}
      </div>
      <div className='flex gap-4 p-4'>
        <input id='message' type="text" className='w-full bg-white rounded-2xl' />
        <button onClick={() => {
          const message = document.getElementById("message")?.value;
          wsRef.current.send(JSON.stringify({
            type: "chat",
            payload: {
              message: message
            }
          }))
        }} className='bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-700'>Send Message</button>
      </div>
    </div>
  )
}

export default App
