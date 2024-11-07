<template>
  <div id="login">
    <form v-on:submit.prevent="login">
      <h1 >Please Sign In</h1>
      <div role="alert" v-if="invalidCredentials">
        Invalid username and password!
      </div>
      <div role="alert" v-if="this.$route.query.registration">
        Thank you for registering, please sign in.
      </div>
      <div class="form-input-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="user.username" required autofocus />
      </div>
      <div class="form-input-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="user.password" required />
      </div>
      <button type="submit">Sign in</button>
      <p>
      <router-link v-bind:to="{ name: 'register' }">Need an account? Sign up.</router-link></p>
    </form>
  </div>
</template>

<script>
import authService from "../services/AuthService";

export default {
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      invalidCredentials: false
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
        .then(response => {
          if (response.status == 200) {
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);
            this.$router.push("/");
          }
        })
        .catch(error => {
          const response = error.response;

          if (response.status === 401) {
            this.invalidCredentials = true;
          }
        });
    }
  }
};
</script>

<style scoped>
.form-input-group {
  margin-bottom: 1rem;
}
label {
  margin-right: 0.5rem;
}

#login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f9;
}

form {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    text-align: center;
}

h1 {
    color: #333;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    font-family: Arial, sans-serif;
}

[role="alert"] {
    color: #d9534f;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    padding: 10px;
    margin-bottom: 1rem;
    border-radius: 5px;
    font-size: 0.9rem;
}

.form-input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.2rem;
    text-align: left;
}

label {
    font-size: 1rem;
    color: #555;
    margin-bottom: 0.3rem;
    font-weight: bold;
}

input[type="text"],
input[type="password"] {
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    color: #333;
    width: 100%;
}

button[type="submit"] {
    background-color: #007acc;
    color: #fff;
    padding: 0.8rem;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
    margin-top: 1rem;
}

button[type="submit"]:hover {
    background-color: #005fa3;
}

p {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #333;
}

a {
    color: #007acc;
    text-decoration: none;
    font-weight: bold;
}

a:hover {
    text-decoration: underline;
}
</style>

