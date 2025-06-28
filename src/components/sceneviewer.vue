<template>
  <div id="scene-viewer">
    <canvas ref="rendererCanvas"></canvas>
    <div v-if="loading" class="loading-overlay">Loading your dream home...</div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass.js'

export default {
  name: 'SceneViewer',
  props: ['modelUrl'],
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      controls: null,
      composer: null,
      loading: true
    }
  },
  watch: {
    modelUrl(newVal) {
      if (newVal) {
        this.loadModel(newVal);
      }
    }
  },
  mounted() {
    this.init3DScene();
    window.addEventListener('resize', this.onWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
    if (this.renderer) this.renderer.dispose();
  },
  methods: {
    init3DScene() {
      const width = this.$refs.rendererCanvas.clientWidth;
      const height = this.$refs.rendererCanvas.clientHeight;

      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xf0f0f0);

      this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      this.camera.position.set(5, 4, 5);

      this.renderer = new THREE.WebGLRenderer({ canvas: this.$refs.rendererCanvas, antialias: true });
      this.renderer.setSize(width, height);
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.5;

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight.position.set(5, 10, 7.5);
      this.scene.add(ambientLight);
      this.scene.add(directionalLight);

      const floorGeometry = new THREE.PlaneGeometry(50, 50);
      const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.4, metalness: 0.2 });
      const floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = -0.001;
      floor.receiveShadow = true;
      this.scene.add(floor);

      const renderPass = new RenderPass(this.scene, this.camera);
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.2, 0.4, 0.85);
      const ssaoPass = new SSAOPass(this.scene, this.camera, width, height);
      ssaoPass.kernelRadius = 16;

      this.composer = new EffectComposer(this.renderer);
      this.composer.addPass(renderPass);
      this.composer.addPass(bloomPass);
      this.composer.addPass(ssaoPass);

      this.animate();
    },
    loadModel(url) {
      const loader = new GLTFLoader();
      loader.load(url, (gltf) => {
        this.scene.add(gltf.scene);
        this.loading = false;
      }, undefined, (error) => {
        console.error(error);
      });
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.controls.update();
      this.composer.render();
    },
    onWindowResize() {
      const width = this.$refs.rendererCanvas.clientWidth;
      const height = this.$refs.rendererCanvas.clientHeight;

      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
      this.composer.setSize(width, height);
    }
  }
}
</script>

<style scoped>
#scene-viewer {
  width: 100%;
  height: 500px;
  position: relative;
}

canvas {
  width: 100%;
  height: 100%;
  display: block;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}
</style>

