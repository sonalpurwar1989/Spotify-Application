<template>
    <div class = "joke-container">
    <h2>{{ joke }}</h2>
    
    <button @click="saveJoke">Save Joke to Favorites?</button>
    </div>
</template>

<script>
import service from '../services/JokeService'

export default {
    data() {
        return {
            joke: ''
        }
    },
    methods: {
        saveJoke() {
            let jokeObj = {
                joke: this.joke
            }
            service.saveJoke(jokeObj)
                .then((response) => {
                    if (response.status === 200) {
                        alert('joke saved to database!');
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    created() {
        console.log(this.$store.state.token);
        service.getJoke()
            .then((response) => this.joke = response.data)
    }
}
</script>
<style scoped>


.joke-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f4f4f9;
    padding: 20px;
    text-align: center;
}

h2 {
    font-size: 1.5rem;
    color: #333;
    max-width: 600px;
    margin-bottom: 20px;
    line-height: 1.4;
    font-family: Arial, sans-serif;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #45a049;
}

button:active {
    background-color: #388e3c;
}

button:focus {
    outline: none;
}
</style>
