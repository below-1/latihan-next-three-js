import dynamic from 'next/dynamic'
import React, { useState } from 'react'

const MainCanvas = dynamic(() => import('../components/MainCanvas'), { ssr: false })

export default function Home() {
  const [ rotationStep, setRotationStep ] = useState(0.01)
  return (
    <div className="pl-64 h-screen">
      <nav className="fixed w-64 left-0 top-0 bottom-0 flex flex-col justify-start items-center border-r py-6">
        <button 
          className="font-bold bg-blue-600 px-4 py-2"
          onClick={e => {
            const v = Math.random() / 3;
            setRotationStep(v);
          }}
        >
          do something
        </button>
      </nav>
      <MainCanvas 
        rotationStep={rotationStep}
      />
    </div>
  )

}
