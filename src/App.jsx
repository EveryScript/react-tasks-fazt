import React from 'react'
import Taskform from './Taskform';
import { Tasklist } from './Tasklist';

function App() {
  return <main className='bg-gray-800 w-100 h-screen'>
    <section className='w-4/5 mx-auto '>
      <h1 className='text-2xl text-center pt-4 pb-4 text-white'>Tareas</h1>
      <Taskform />
      <Tasklist />
    </section>
  </main>
}

export default App;