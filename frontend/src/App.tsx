
import { useEffect } from 'react'
import './App.css'

function App() {
 
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

  }, []);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90vh]'></div>
      <div className='flex gap-4 p-4'>
        <input type="text" className='w-full bg-white rounded-2xl' />
        <button className='bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-700'>Send Message</button>
      </div>
    </div>
  )
}

export default App
