import React from 'react'

export default function CheckBox() {
  return (
    <div className='flex items-center'>
      <input type='checkbox' className='px-10' />
      <span className='text-base mx-2'>Remember Me</span>
    </div>
  )
}
