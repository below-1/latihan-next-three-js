import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'

const MainCanvas = dynamic(() => import('../components/MainCanvas'), { ssr: false })

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <nav className="fixed w-64 left-0 top-0 bottom-0 flex flex-col justify-start items-center border-r py-6">
          <button className="font-bold bg-blue-600 px-4 py-2">
            add ball
          </button>
        </nav>
        <MainCanvas />
      </div>
    )
  }

}
