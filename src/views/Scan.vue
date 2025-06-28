<template>
  <div class="scan">
    <h1>Scan Your Blueprint</h1>
    <p>Upload a floor plan and let AI turn it into a walkable 3D model instantly.</p>
    <input type="file" @change="handleFile" class="file-input" />
    <button @click="upload" class="upload">Upload & Generate 3D Model</button>

    <div v-if="modelGenerated">
      <SceneViewer :modelUrl="modelUrl" />
      <CustomizationPanel />
    </div>
  </div>
</template>

<script>
import SceneViewer from '../components/SceneViewer.vue'
import CustomizationPanel from '../components/CustomizationPanel.vue'

export default {
  components: {
    SceneViewer,
    CustomizationPanel
  },
  data() {
    return {
      modelUrl: '/models/house3000.glb',
      modelGenerated: false
    }
  },
  methods: {
    handleFile(event) {
      const file = event.target.files[0];
      if (file) {
        console.log('File uploaded:', file.name);
      }
    },
    upload() {
      this.modelGenerated = true;
    }
  }
}
</script>

<style scoped>
.scan {
  width: 100%;
  padding: 50px;
  text-align: center;
}

.file-input {
  padding: 10px;
  margin: 20px 0;
}

.upload {
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 6px;
}

.upload:hover {
  opacity: 0.8;
}
</style>
