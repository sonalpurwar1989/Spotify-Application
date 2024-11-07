<template>
  <div id="capstone-app">
    <div id="nav">
      <router-link v-bind:to="{ name: 'home' }">Home</router-link>&nbsp;|&nbsp;
      <router-link v-bind:to="{ name: 'artist'}">Find Artists</router-link>&nbsp;|&nbsp;
      <router-link v-bind:to="{ name: 'logout' }" v-if="$store.state.token != ''">Logout</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
#capstone-app {
    text-align: center;
    font-family: Arial, sans-serif;
    color: #333;
    margin: 0;
    padding: 20px;
}

#nav {
    background-color: #007acc;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
}

#nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    transition: color 0.3s ease;
}

#nav a:hover {
    color: #ffdd57;
}

#nav a:active {
    color: #ffd700;
}

#nav a + a {
    margin-left: 15px;
}

router-link-active {
    color: #ffdd57;
}

router-view {
    padding: 20px;
    border-top: 1px solid #ddd;
    margin-top: 10px;
    font-size: 1rem;
    color: #555;
}
</style>

