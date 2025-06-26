
<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">HexaNest</router-link>
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/scan">Scan Blueprint</router-link></li>
      <li><router-link to="/customize">Customize</router-link></li>
      <li><router-link to="/public">Public Builds</router-link></li>
    </ul>
    <div class="nav-action">
      <button class="signup">Sign Up</button>
    </div>
  </nav>
</template>

<script>
export default { name: 'Navbar' };
</script>

<style scoped>
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 20px 40px; background-color: white; border-bottom: 1px solid #eee; box-shadow: 0 2px 8px rgba(0,0,0,0.02); position: sticky; top: 0; z-index: 1000; }
.logo a { font-weight: 700; font-size: 1.8rem; color: #000; text-decoration: none; }
.nav-links { list-style: none; display: flex; gap: 40px; margin: 0; padding: 0; }
.nav-links li a { text-decoration: none; color: #333; font-weight: 500; font-size: 1rem; transition: color 0.3s ease, transform 0.2s ease; }
.nav-links li a:hover { color: #007BFF; transform: translateY(-2px); }
.nav-action .signup { background-color: #007BFF; color: white; border: none; padding: 8px 22px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.95rem; transition: background-color 0.3s ease, transform 0.2s ease; }
.nav-action .signup:hover { background-color: #005FCC; transform: translateY(-2px); }
</style>
