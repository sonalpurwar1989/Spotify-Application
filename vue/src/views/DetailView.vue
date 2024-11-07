<template>
    <div>Artist Detail: </div>
   
        <h2>{{ $store.state.artist.name }}</h2>
        <p>Number of followers: {{ $store.state.artist.followers.total }}</p>

</template>

<script>

</script>
<style scoped>
div {
    font-size: 1.5rem;
    color: #007acc;
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
    font-family: Arial, sans-serif;
}

h2 {
    font-size: 2rem;
    color: #333;
    margin-top: 15px;
    text-align: center;
}

p {
    font-size: 1.2rem;
    color: #555;
    margin-top: 10px;
    text-align: center;
}
</style>
