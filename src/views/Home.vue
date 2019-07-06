<template>
  <div class="home-container">
    <div class="logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <div class="form reg">
      <h2>Регистрация</h2>
      <input type="text" name="" class='form-login' value="" placeholder='Введите логин'>
      <input type="password" class='form-password' name="" value="" placeholder='Введите пароль'>
      <button class='form-button'>Сёрфить</button>
      <a href="#">У меня уже есть аккаунт</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: function(){
    return {
      map: 0
    }
  }
}
</script>

<style>
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
    border: 1px solid rgba(0, 0, 0, 0.4);
  }

  .form button{
    width: 100%;
    font-size: 1.5rem;
    padding: 1vh 1vw;
    margin-bottom: 1vh;
    border-radius: 7px;
    border: none;
    color: #fff;
    background-color: #4877fb;
  }
</style>
