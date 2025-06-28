<template>
  <div class="customization">
    <h1>Customize Your Home</h1>

    <div class="house-size-selector">
      <label>Select House Size:</label>
      <select v-model="selectedSize" @change="loadHouseModel">
        <option disabled value="">Select size</option>
        <option>1500 sq ft</option>
        <option>1800 sq ft</option>
        <option>2000 sq ft</option>
        <option>2200 sq ft</option>
        <option>2400 sq ft</option>
        <option>3000 sq ft</option>
        <option>5000 sq ft</option>
      </select>
    </div>

    <SceneViewer :modelUrl="modelUrl" />
    <CustomizationPanel />
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
      selectedSize: '',
      modelUrl: ''
    }
  },
  methods: {
    loadHouseModel() {
      const models = {
        '1500 sq ft': '/models/house1500.glb',
        '1800 sq ft': '/models/house1800.glb',
        '2000 sq ft': '/models/house2000.glb',
        '2200 sq ft': '/models/house2200.glb',
        '2400 sq ft': '/models/house2400.glb',
        '3000 sq ft': '/models/house3000.glb',
        '5000 sq ft': '/models/house5000.glb',
      };
      this.modelUrl = models[this.selectedSize] || '';
    }
  }
}
</script>

<style scoped>
.customization {
  padding: 30px;
}

.house-size-selector {
  margin-bottom: 20px;
}

select {
  padding: 8px 12px;
  border-radius: 6px;
}
</style>

