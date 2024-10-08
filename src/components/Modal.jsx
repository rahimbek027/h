import React, { useContext } from 'react'
import { Context } from '../context/Index'

function Modal({children}) {
  const {isOpenModal, setIsOpenModal} = useContext(Context)
  
  return (
    <div 
      onClick={(e) => e.target.id === "modal" ? setIsOpenModal(false) : null} 
      className={`fixed top-0 bottom-0 left-0 right-0 duration-300 z-40 backdrop-blur ${isOpenModal ? "scale-100" : "scale-0"}`} 
      id='modal'
    >
      <div className='w-full max-w-lg h-[200px] z-50 p-5 rounded-md bg-slate-200 absolute inset-0 m-auto'>
        {children}
      </div>
    </div>
  )
}

export default Modal
