<template>
  <div class="public">
    <h1>Explore Public Builds</h1>
    <div class="builds-list">
      <div v-for="build in publicBuilds" :key="build.id" class="build-card">
        <h3>{{ build.name }}</h3>
        <button @click="selectBuild(build)">Open Build</button>
      </div>
    </div>

    <div v-if="selectedBuild">
      <SceneViewer :modelUrl="selectedBuild.modelUrl" />
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
      publicBuilds: [
        { id: 1, name: 'Modern 3000 sq ft', modelUrl: '/models/house3000.glb' },
        { id: 2, name: 'Elegant 5000 sq ft', modelUrl: '/models/house5000.glb' },
        { id: 3, name: 'Cozy 1800 sq ft', modelUrl: '/models/house1800.glb' }
      ],
      selectedBuild: null
    }
  },
  methods: {
    selectBuild(build) {
      this.selectedBuild = build;
    }
  }
}
</script>

<style scoped>
.public {
  padding: 40px;
  text-align: center;
}

.builds-list {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
}

.build-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}
</style>
