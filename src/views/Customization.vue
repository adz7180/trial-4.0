<template>
  <div class="customization">
    <div class="sidebar">
      <h2>Customization Panel</h2>
      <ul class="menu">
        <li>Walls & Layout</li>
        <li>Floors & Ceilings</li>
        <li>Windows & Doors</li>
        <li>Lighting</li>
        <li>Furniture</li>
        <li>Exterior</li>
      </ul>
      <button class="save">Save Design</button>
    </div>

    <div class="scene">
      <div class="viewer">
        <p class="viewer-placeholder">[3D Scene Rendering Here]</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.customization {
  display: flex;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #fdfdfd, #eaeaea);
}

.sidebar {
  width: 350px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(30px);
  border-right: 1px solid rgba(200, 200, 200, 0.3);
  box-shadow: 10px 0 30px rgba(0,0,0,0.05);
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 30px;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 18px;
  display: flex;
  flex-direction: column;
}

.menu li {
  padding: 12px 18px;
  background: rgba(255,255,255,0.4);
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.menu li:hover {
  background: rgba(0, 0, 0, 0.07);
  transform: translateX(5px);
}

.save {
  padding: 14px 24px;
  background: #111;
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.save:hover {
  background: #333;
}

.scene {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.viewer {
  width: 92%;
  height: 92%;
  background: #f5f5f5;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.viewer-placeholder {
  color: #999;
  font-size: 1.2rem;
}
</style>
