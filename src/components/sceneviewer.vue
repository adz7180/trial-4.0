<template>
  <div id="scene-viewer">
    <canvas ref="rendererCanvas"></canvas>
    <div v-if="loading" class="loading-overlay">Loading your dream home...</div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import load3DModel from '../utils/furnitureLoader'
// import applyRealismShaders from '../utils/realismShaders'
// import featureHandlers from '../utils/featureHandlers'
import autoUpdateManager from '../utils/autoUpdateManager'
import analytics from '../utils/analytics'

export default {
  name: 'SceneViewer',
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      controls: null,
      loading: true,
    }
  },
  mounted() {
    this.init3DScene()
    window.addEventListener('resize', this.onWindowResize)
    analytics.trackView('SceneViewer')
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize)
  },
  methods: {
    async init3DScene() {
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000)
      this.camera.position.set(0, 1.6, 4)

      this.renderer = new THREE.WebGLRenderer({ canvas: this.$refs.rendererCanvas, antialias: true })
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.outputEncoding = THREE.sRGBEncoding

      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      this.controls.target.set(0, 1.5, 0)
      this.controls.update()

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(5, 10, 7.5)
      this.scene.add(ambientLight, directionalLight)

      const model = await load3DModel(this.$store.state.currentModel)
      this.scene.add(model)

      applyRealismShaders(this.scene)
      featureHandlers.applyInitialSettings(this.scene)

      this.loading = false
      this.animate()
    },
    animate() {
      requestAnimationFrame(this.animate)
      this.controls.update()
      this.renderer.render(this.scene, this.camera)
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    },
  },
}
</script>

<style scoped>
#scene-viewer {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  background: #ffffffee;
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  z-index: 10;
}
</style>
