<template>
  <div class="scan">
    <div class="scanner">
      <h1>Scan Your Blueprint</h1>
      <p>Upload a floor plan and let AI turn it into a walkable 3D model instantly.</p>
      <input type="file" class="file-input" />
      <button class="upload">Upload & Generate 3D Model</button>
    </div>
  </div>
</template>

<style scoped>
.scan {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #fdfdfd, #eaeaea);
  display: flex;
  justify-content: center;
  align-items: center;
}

.scanner {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(30px);
  padding: 50px 70px;
  border-radius: 30px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  text-align: center;
}

.scanner h1 {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 18px;
}

.scanner p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 40px;
}

.file-input {
  border: 2px dashed #ccc;
  padding: 20px;
  width: 100%;
  border-radius: 20px;
  margin-bottom: 30px;
  background: rgba(255,255,255,0.5);
}

.upload {
  padding: 14px 28px;
  border-radius: 50px;
  background: #111;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: background 0.3s;
}

.upload:hover {
  background: #333;
}
</style>
