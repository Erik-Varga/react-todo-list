import React, { useEffect } from 'react'
import ProgressBar from '../components/ProgressBar'
import Title from '../components/Title'
import { Link } from 'react-router-dom';
import { CiFolderOn, CiLogin } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbNotes } from 'react-icons/tb';
import { to } from './../../node_modules/moment/src/lib/moment/to';

const DevNotes = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='w-full flex flex-1 items-center justify-center text-sm'>
      <div className="flex flex-col gap-2 items-center justify-center p-2">

        <div className="text-2xl mb-3">
          <Title text1={'DEVELOPER'} text2={'NOTES'} />
        </div>

        <div className='flex justify-center items-center gap-2 '>
          <img src="ev_icon_pic.jpg" alt="" className='w-10 h-10 rounded-full shadow-lg' />
          <span className="font-semibold">Erik Varga</span>
        </div>

        <div classname="text-sm">
          <br />
          <div classname="text-sm">
            <p className='mt-4'>This React To-Do App applies fundamental concepts like state management, event handling, and conditional rendering. App features include: Adding, Editing and Deleting of tasks. </p>

            <p className='mt-4'>App has a clean intuitive interface, including an input field for adding tasks. Styling is added using Tailwind CSS to make the interface visually appealing and user-friendly. The app leverages React state management to dynamically update the list based on user interactions.</p>

            <p className='mt-4'>The app consists of two main states: one for tracking the list of tasks and another for handling task-specific actions like editing. Adding a new task involves updating the tasks state with the new entry, while editing or deleting tasks modifies or removes entries dynamically. This provides an excellent example of how React declarative nature simplifies handling UI updates.</p>

            <p className='mt-4'>Moreover, the app ensures input validation to prevent adding empty tasks, and a clear visual distinction is made for edit and delete actions. This ToDo app is extended further with additional features such as local storage, light/dark mode and tasks are sorted by most recent task.</p>
          </div>
        </div>
        <div className='mt-4'>Resources:</div>
        <Link to="https://tailwindcss.com/docs/installation/using-vite" target="_blank">
          <p><strong>
            <span className='flex gap-1 hover:bg-cyan-200 dark:hover:bg-cyan-800 py-2 px-4'>
              <IoDocumentTextOutline className='text-2xl' />
              Tailwind CSS DOCS
            </span>
          </strong></p>
        </Link>

      </div>

    </div>
  )
}

export default DevNotes