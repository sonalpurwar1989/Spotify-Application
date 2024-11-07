<template>
    <label for="artistName">Name of Artist: </label>
    <input type="text" v-model="artistName">
    <button @click="getArtist">Get Information!</button>
    
</template>

<script>
import artistService from '../services/ArtistService';
export default {
    data() {
        return {
            artistName: '',
            artist: {
                followers: {
                    total: ''
                }
            }
        }
    },
    methods: {
        getArtist() {
            console.log(this.$store.state.token);
            artistService.getArtist(this.artistName)
                .then((response) => {
                    this.artist = response.data
                    this.$store.commit("SET_ARTIST", this.artist);
                    this.$router.push({name: 'detail'})
                })
        }
    }
}
</script>
<style scoped>
label {
    font-size: 1.2rem;
    color: #333;
    margin-right: 0.5rem;
    font-family: Arial, sans-serif;
}

input[type="text"] {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    color: #333;
    width: 300px;
    margin-right: 10px;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
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

form {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    gap: 10px;
}
</style>
