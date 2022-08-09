import dynamic from 'next/dynamic'
import React, { useState } from 'react'

const MainCanvas = dynamic(() => import('../components/MainCanvas'), { ssr: false })

export default function Home() {
  const [ rotationStep, setRotationStep ] = useState(0.01)

  const [ stlFile, setStlFile ] = useState()
  const [ stlProp, setStlProp ] = useState()

  return (
    <div className="pl-64 h-screen">

      <nav className="fixed w-64 left-0 top-0 bottom-0 flex flex-col justify-start items-center border-r py-6 px-4 flex flex-col gap-4">
        <button 
          className="font-bold bg-blue-600 px-4 py-2"
          onClick={e => {
            const v = Math.random() / 3;
            setRotationStep(v);
          }}
        >
          do something
        </button>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-500">Load an STL File</label>
          <input
            className="border px-4 py-2 bg-gray-50 rounded overflow-hidden w-full"
            type="text"
            onChange={e => {
              setStlFile(e.target.value)
            }}
          />
          <button 
            onClick={() => {
              if (stlFile) {
                setStlProp(stlFile)
              }
            }}
            className="text-sm font-bold px-2 py-1 rounded bg-blue-500 text-white"
          >load file</button>
        </div>
      </nav>
      <MainCanvas 
        rotationStep={rotationStep}
        stlFile={stlProp}
      />
    </div>
  )

}
