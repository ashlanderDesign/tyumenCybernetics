<template>
  <div class='map-container'>
    <header class='menu'>
      <div class="account">
        <div class="user-image"></div>
        <div class="user-info">
          <div class="username">
            Username
          </div>
          <div class="score">
            <img src="../assets/bitcoin.png" alt="">
            <span class='value'>100</span>
          </div>
        </div>
      </div>
    </header>
    <div class="map">
      <div class="level open">
        <span>1</span>
      	<router-link to="/level" class="level-icon">Авторизуйся, это так просто.</router-link>
      </div>
      <div class="level">
        <span>2</span>
      	<router-link to="/level" class="level-icon">Давай знакомиться</router-link>
      </div>
      <div class="level">
        <span>3</span>
      	<router-link to="/level" class="level-icon">Социальная жизнь</router-link>
      </div>
      <div class="level">
        <span>4</span>
      	<router-link to="/level" class="level-icon">Ящиков - много не бывает</router-link>
      </div>
      <div class="level stage">
      	<router-link to="/level" class="level-icon">5</router-link>
      </div>
      <div class="level">
        <span>6</span>
        <router-link to="/level" class="level-icon">Сёрфер учит сёрфить</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'map',
}
</script>

<style>
.map-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  overflow-x: scroll;
}
.map {
  min-width: 200vw;
  height: 60vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 0 2vw;
}
.level {
  color: #cacaca;
  background-color: #fff;
  margin-right: 1vw;
  height: 30vh;
  width: 30vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 7px;
  box-sizing: border-box;
  border: 4px solid #cacaca;
}

.level span{
    font-size: 7rem;
}

.level.stage{
  width: 30vh;
  height: 30vh;
  border-radius: 50%;
  flex-wrap: wrap;
}

.level.stage .level-icon{
  font-size: 9rem;
  color: #cacaca;
  cursor: default;
  width: auto;
}

.level.open{
  background-color: #fff;
  border: 4px solid #4877fb;
  color: #4877fb;
  transition: all .3s ease-in;
}

.level.open .level-icon{
  color: #fff;
}

.level.open:hover{
  background-color: #4877fb;
}

.level.open:hover .level-icon{
  color: #fff;
  transition: all .3s ease-in;
}

.level-icon {
  text-decoration: none;
  color: #fff;
  font-size: 2rem;
  width: 30%;
}
</style>
