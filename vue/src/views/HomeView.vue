<template>
  <div class="home">
    <h1>Home</h1>
    <p>You must be authenticated to see this</p>
    <DadJoke />
  </div>
</template>

<script>
import DadJoke from '../components/DadJoke.vue';

export default {
    components: { DadJoke }
};
</script>
<style scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f8ff;
    color: #333;
    padding: 20px;
    text-align: center;
    font-family: Arial, sans-serif;
}

h1 {
    font-size: 2.5rem;
    color: #007acc;
    margin-bottom: 10px;
}

p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 20px;
}

.home .dad-joke-container {
    max-width: 600px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 15px;
}
</style>
