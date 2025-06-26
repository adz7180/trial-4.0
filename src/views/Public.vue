<template>
  <div class="public">
    <h1>Explore Public Builds</h1>
    <p>Discover home designs from companies or the community.</p>
    <div class="grid">
      <div class="card" v-for="n in 6" :key="n">
        <div class="card-image">[3D Preview]</div>
        <h3>Modern Villa {{ n }}</h3>
        <p>4 Bed • 3 Bath • 2800 sqft</p>
        <button class="btn">View & Customize</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.public {
  padding: 80px;
  background: linear-gradient(to bottom, #fdfdfd, #eaeaea);
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

p {
  color: #666;
  margin-bottom: 50px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 40px;
}

.card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  padding: 24px;
  text-align: center;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
}

.card-image {
  background: #f0f0f0;
  height: 200px;
  border-radius: 18px;
  margin-bottom: 20px;
}

h3 {
  margin: 0;
}

.btn {
  margin-top: 18px;
  padding: 10px 22px;
  border-radius: 50px;
  background: #111;
  color: white;
  border: none;
  cursor: pointer;
}

.btn:hover {
  background: #333;
}
</style>
