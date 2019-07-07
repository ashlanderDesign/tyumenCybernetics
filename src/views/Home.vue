<template>
  <div class="home-container">
    <div class="logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <div class="form reg">
      <h2 v-if='method == "register"'>Регистрация</h2>
      <h2 v-if='method == "login"'>Авторизация</h2>
      <input v-model="username" type="text" name="username" class='form-login' value="" placeholder='Введите имя'>
      <input v-model="password" type="password" class='form-password' name="password" value="" placeholder='Введите пароль'>
      <button class='form-button' v-on:click="startSurf">Сёрфить</button>
      <a href="#" v-if='method == "register"' v-on:click="method = 'login'">У меня уже есть аккаунт</a>
      <a href="#" v-if='method == "login"' v-on:click="method = 'register'">У меня нет аккаунта</a>
    </div>
  </div>
</template>

<script>
import store from '../store'
import router from '../router'

export default {
  name: 'home',
  data: function(){
    return {
      map: 0,
      method: "register",
      username: '',
      password: ''
    }
  },
  methods: {
    startSurf() {
      let playerData = {name: this.username, password: this.password}
      store.commit('addPlayer', playerData)
      router.push('/map')
    }
  }
}
</script>

<style>
  h1, h2{
    color: #fff;
  }

  a{
    text-decoration: none;
  }

  .home-container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
  }

  .form{
    width: 30vw;
    height: 40vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .form input{
    width: 100%;
    font-size: 1.5rem;
    padding: 1vh 1vw;
    margin-bottom: 1vh;
    border-radius: 7px;
    border: none;
  }

  .form button{
    width: 100%;
    font-size: 1.5rem;
    padding: 1vh 1vw;
    margin-bottom: 1vh;
    border-radius: 7px;
    border: none;
    color: #fff;
    background-color: #3067ff;
  }
</style>
