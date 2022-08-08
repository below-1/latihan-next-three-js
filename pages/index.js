import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'

export default class Home extends React.Component {
  
  componentDidMount () {
    if (typeof window !== undefined) {
      const mainElement = document.getElementById("main")
      console.log(mainElement)
      console.log('mainElement')
      const THREE = require('three')
      const renderer = new THREE.WebGLRenderer()
      console.log(renderer)
      console.log('renderer')
      renderer.shadowMap.enabled = true
      renderer.setSize(mainElement.clientWidth, mainElement.clientHeight)
      mainElement.appendChild(renderer.domElement)
      const scene = new THREE.Scene()
      renderer.render(scene)
    }
  }

  render() {
    return (
      <div>
        <nav className="fixed w-64 left-0 top-0 bottom-0 flex flex-col justify-start items-center border-r py-6">
          <button className="font-bold bg-blue-600 px-4 py-2">
            add ball
          </button>
        </nav>
        <main id="main" className="pl-64 w-full h-screen">
          <h1>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
      </div>
    )
  }

}
