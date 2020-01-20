<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">My Application</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/RegistrationForm" class="nav-link">Registration Form</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Form" v-if="!isSignIn" class="nav-link">Sign In</router-link>
             <router-link to="/Form" v-else  class="nav-link" >Sign Out</router-link>
          </li>
          <!-- <li class="nav-item">
           
          </li> -->
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      isSignIn: false
    };
  }
};
</script>

<!--style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style-->
