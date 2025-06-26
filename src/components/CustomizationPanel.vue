<template>
  <div class="customization-panel">
    <h2>🛠 Customize Your Dream Home</h2>

    <div class="category-selector">
      <button v-for="cat in categories" :key="cat.id" @click="selectCategory(cat)">
        {{ cat.name }}
      </button>
    </div>

    <div v-if="activeCategory" class="customization-options">
      <component :is="activeCategory.component" />
    </div>
  </div>
</template>

<script>
import FlooringOptions from './customization/FlooringOptions.vue'
import WallOptions from './customization/WallOptions.vue'
import CeilingOptions from './customization/CeilingOptions.vue'
import WindowOptions from './customization/WindowOptions.vue'
import LightingOptions from './customization/LightingOptions.vue'
import FurnitureOptions from './customization/FurnitureOptions.vue'
import RoofOptions from './customization/RoofOptions.vue'
import ExteriorOptions from './customization/ExteriorOptions.vue'
import SmartHomeOptions from './customization/SmartHomeOptions.vue'
import FeatureWallOptions from './customization/FeatureWallOptions.vue'
import PillarOptions from './customization/PillarOptions.vue'
import ChandelierOptions from './customization/ChandelierOptions.vue'
import FireplaceOptions from './customization/FireplaceOptions.vue'

export default {
  name: 'CustomizationPanel',
  components: {
    FlooringOptions,
    WallOptions,
    CeilingOptions,
    WindowOptions,
    LightingOptions,
    FurnitureOptions,
    RoofOptions,
    ExteriorOptions,
    SmartHomeOptions,
    FeatureWallOptions,
    PillarOptions,
    ChandelierOptions,
    FireplaceOptions,
  },
  data() {
    return {
      categories: [
        { id: 'floor', name: ' Flooring', component: 'FlooringOptions' },
        { id: 'wall', name: ' Walls', component: 'WallOptions' },
        { id: 'ceiling', name: ' Ceiling', component: 'CeilingOptions' },
        { id: 'window', name: ' Windows', component: 'WindowOptions' },
        { id: 'lighting', name: ' Lighting', component: 'LightingOptions' },
        { id: 'furniture', name: ' Furniture', component: 'FurnitureOptions' },
        { id: 'roof', name: ' Roof', component: 'RoofOptions' },
        { id: 'exterior', name: ' Exterior', component: 'ExteriorOptions' },
        { id: 'smarthome', name: ' Smart Home', component: 'SmartHomeOptions' },
        { id: 'featurewall', name: ' Feature Walls', component: 'FeatureWallOptions' },
        { id: 'pillars', name: ' Pillars', component: 'PillarOptions' },
        { id: 'chandelier', name: ' Chandeliers', component: 'ChandelierOptions' },
        { id: 'fireplace', name: ' Fireplace', component: 'FireplaceOptions' },
      ],
      activeCategory: null,
    }
  },
  methods: {
    selectCategory(category) {
      this.activeCategory = category
    },
  },
}
</script>

<style scoped>
.customization-panel {
  background: #ffffff;
  padding: 20px;
  border-radius: 16px;
  max-width: 1100px;
  margin: auto;
}

.category-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 1.5rem;
}

.category-selector button {
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  background: #eee;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.category-selector button:hover {
  background: #ddd;
}
</style>
