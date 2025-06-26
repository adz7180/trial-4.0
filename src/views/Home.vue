<template>
  <div class="home">
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="logo">HexaNest</div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/scan">Scan Blueprint</router-link></li>
        <li><router-link to="/customize">Customize</router-link></li>
        <li><router-link to="/public">Public Builds</router-link></li>
        <li><router-link to="/admin">Admin</router-link></li>
      </ul>
    </nav>

    <!-- Hero Section -->
    <header class="hero">
      <div class="hero-content">
        <h1>Design Your Dream Home in Real-Time</h1>
        <p>Walk through and customize homes with ultra-realistic 4K visuals.</p>
        <div class="actions">
          <router-link to="/scan" class="btn primary">Try Free</router-link>
          <router-link to="/demo" class="btn secondary">Watch Demo</router-link>
        </div>
      </div>
      <div class="hero-image">
        <img src="@/assets/hero-preview.png" alt="Home Preview">
      </div>
    </header>

    <!-- Features Section -->
    <section class="features">
      <h2>Features</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <img src="@/assets/scan-icon.png" alt="Scan Blueprints">
          <h3>Scan Blueprints</h3>
          <p>Instantly convert blueprints into 3D walkable models.</p>
        </div>
        <div class="feature-card">
          <img src="@/assets/edit-icon.png" alt="Real-Time Editing">
          <h3>Real-Time Editing</h3>
          <p>Modify floor plans, interiors, and materials live.</p>
        </div>
        <div class="feature-card">
          <img src="@/assets/drag-icon.png" alt="Drag & Drop">
          <h3>Drag & Drop</h3>
          <p>Customize with furniture, windows, walls, and more.</p>
        </div>
        <div class="feature-card">
          <img src="@/assets/share-icon.png" alt="Share to Contractors">
          <h3>Share to Contractors</h3>
          <p>Send your design directly to builders in your area.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
/* Navigation Bar */
.navbar {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.04);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  box-shadow: 0 4px 30px rgba(0,0,0,0.1);
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 32px;
}

.nav-links li a {
  text-decoration: none;
  color: white;
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;
}

.nav-links li a::after {
  content: '';
  display: block;
  height: 2px;
  background: white;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: right;
}

.nav-links li a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.nav-links li a:hover {
  color: #aaa;
}

/* Page Layout */
.home {
  background: #0f1116;
  color: white;
  font-family: 'Segoe UI', sans-serif;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 120px 120px 80px;
  background: linear-gradient(to right, #0f1116, #1a1c22);
  margin-top: 80px;
}

.hero-content {
  max-width: 50%;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.actions {
  display: flex;
  gap: 20px;
}

.btn {
  padding: 14px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease;
}

.btn.primary {
  background: #0078f0;
  color: white;
}

.btn.primary:hover {
  background: #005ec7;
}

.btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.btn.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
}

.hero-image img {
  width: 520px;
  border-radius: 20px;
  box-shadow: 0 10px 50px rgba(0,0,0,0.5);
}

/* Features */
.features {
  padding: 80px 120px;
  background: #13151c;
}

.features h2 {
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 60px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 40px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  backdrop-filter: blur(20px);
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-6px);
}

.feature-card img {
  width: 60px;
  margin-bottom: 20px;
}

.feature-card h3 {
  margin-bottom: 12px;
  font-size: 1.4rem;
}

.feature-card p {
  color: #c2c4c8;
}
</style>
