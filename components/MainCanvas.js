import React from 'react';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class MainCanvas extends React.Component {

  constructor (props) {
    super(props)
    this.mount = React.createRef();
  }
  
  componentDidMount () {
    const mount = this.mount.current

    this.renderer = new THREE.WebGLRenderer()
    this.renderer.shadowMap.enabled = true
    this.renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(this.renderer.domElement)

    this.camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    )

    this.scene = new THREE.Scene()
    const orbit = new OrbitControls(this.camera, this.renderer.domElement)
    const axesHelper = new THREE.AxesHelper(5)
    this.scene.add(axesHelper)
    this.camera.position.z = 4
    orbit.update()

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: '#433F81' })
    this.cube = new THREE.Mesh(geometry, material)

    this.scene.add(this.cube)

    const planeGeometry = new THREE.PlaneGeometry(2, 2)
    const planeMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xFFFFFF,
      side: THREE.DoubleSide
    })
    const plane =  new THREE.Mesh(planeGeometry, planeMaterial)
    plane.rotation.x = -0.5 * Math.PI
    plane.receiveShadow = true
    this.scene.add(plane)

    const spotLight = new THREE.SpotLight(0xFFFFFF, 0.8)
    spotLight.position.set(-100, 100, 0)
    spotLight.castShadow = true
    spotLight.angle = 0.2
    this.scene.add(spotLight)

    this.start()
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop = () => {
    cancelAnimationFrame(this.frameId)
  }

  animate = () => {
    this.cube.rotation.x += this.props.rotationStep
    this.cube.rotation.y += this.props.rotationStep
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }
  

  render () {
    return (
      <main  
        ref={this.mount} 
        className="w-full h-full"
      >
      </main>)
  }
}