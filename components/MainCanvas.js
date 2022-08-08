import React from 'react';
import * as THREE from 'three'

export default class MainCanvas extends React.Component {

  constructor (props) {
    super(props)
    this.mount = React.createRef();
  }
  
  componentDidMount () {
    const mount = this.mount.current
    console.log(mount)
    console.log('mount')
    if (!mount) {
      return;
    }
    const renderer = new THREE.WebGLRenderer()
    renderer.shadowMap.enabled = true
    console.log(this.mount)
    console.log('this.mount')
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.innerWidth / mount.innerHeight,
      0.1,
      1000
    )
    renderer.render(scene, camera)
  }

  render () {
    return (
      <main  
        ref={this.mount} 
        className="pl-64 w-full h-screen"
      >
      </main>)
  }
}