<template>
  <div id="app">

    <div class="content">
      <transition>
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
  export default{
    data: function(){
      return {
        page: 'home',
        hint: true
      }
    }
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
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;
}

.hint{
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 99999;
}

.show-hint{
  position: fixed;
  left: 5px;
  bottom: 5px;
  background: transparent;
  border: none;
  filter: invert(75%);
}

.hint .hint-body{
  width: 40vw;
  height: 30vh;
  padding: 5px;
  background-color: #3067ff;
  position: absolute;
  right: 5px;
  bottom: 5px;
  border-radius: 7px;
}

.hint .hint-body .text{
  width: 100%;
  height: 70%;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.extra-hint .close,.hint-body .close{
  width: 20%;
  height: 20%;
  border: none;
  border-radius: 7px;
  background-color: transparent;
  color: #fff;
  font-size: 1.2rem;
  position: absolute;
  left: 5px;
  bottom: 5px;
}

.hint-body .showExtra{
  width: 20%;
  height: 20%;
  border: none;
  border-radius: 7px;
  background-color: transparent;
  color: #fff;
  font-size: 1.2rem;
  position: absolute;
  left: calc(5px + 20% + 5px);
  bottom: 5px;
}

.extra-hint{
  position: fixed;
  z-index: 9999999;
  width: 56vw;
  height: 49vh;
  background-color: #3067ff;
  border-radius: 14px;
  padding: 30px 15px;
  font-size: 24px;
  color: wheat;
}

.start{
  border: none;
  border-radius: 14px;
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: #3067ff;
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
  background-image: url("./assets/bg_test.jpg");
  background-size: cover;
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
  color: #3067ff;
  font-size: 1.2rem;
  margin-left: 1vw;
}

.user-info .score .value{
  color: #3067ff;
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

button {
  cursor: pointer;
}
</style>
