<template>
  <div id="app">
    <!--<header>
      <div class="account">
        <div class="user-image"><img src="#" alt=""></div>
        <span class="username">Test</span>
      </div>
      <div class="score">
        <div class="icon"><img src="./assets/bitcoin.png"></div>
        <span class="value">100</span>
      </div>
      <div class="menu"><img src="./assets/menu.png" alt="icon"></div>
    </header>-->
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default{

  }
</script>

<style lang="scss">
font-face {
    font-family: Montserrat; /* Имя шрифта */
    src: url(./assets/fonts/Montserrat.ttf); /* Путь к файлу со шрифтом */
}

*{
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}

.start{
  border: none;
  border-radius: 14px;
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: #4877fb;
  color: #fff;
  font-size: 1.2rem;
  padding: 5vh 10vw;
  right: 50%;
  top: 50%;
}

.content{
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  color: #000;
  background-color: #fff;
}

#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

header{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 2vh 2vw;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header .account{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.account .user-info{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.user-info .username{
  width: 100%;
  color: #4877fb;
  font-size: 1.2rem;
}

.user-info .score .value{
  color: #4877fb;
}

header img{
  width: 32px;
  height: 32px;
}

.account .user-image{
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: rgba(120, 120, 120, 0.7);
}

header .score{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

</style>
