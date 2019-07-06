<template>
  <div id="app">
    <header>
      <div class="account">
        <div class="user-image"><img src="#" alt=""></div>
        <span class="username">Test</span>
      </div>
      <div class="score">
        <div class="icon"><img src="./assets/bitcoin.png"></div>
        <span class="value">100</span>
      </div>
      <div class="menu"><img src="./assets/menu.png" alt="icon"></div>
    </header>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

.content{
  padding-top: 10vh;
  background-color: #312b48;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  color: #fff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

.account .username{
  margin-left: 1vw;
  font-weight:  600;
  font-size:  1.2rem;
}

header img{
  width: 64px;
  height: 64px;
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

.score .value{
  margin-left:  1vw;
}
</style>
