<template>
  <div class='map-container'>
    <header class='menu'>
      <div class="account">
        <div class="user-image"></div>
        <div class="user-info">
          <div class="username">
            {{username}}
          </div>
        </div>
      </div>
      <div class="score">
        <img src="../assets/bitcoin.png" alt="">
        <span class='value'>{{score}}</span>
      </div>
      <button class='scoreboard'>Таблица лидеров</button>
    </header>
    <div class="map">
      <h1>Выберите уровень</h1>
      <div class="level open" @click="$router.push('/level?id=1')">
        <span>1</span>
      	<router-link to="/level?id=1" class="level-icon">Авторизуйся, это так просто</router-link>
      </div>
      <div class="level">
        <span>2</span>
      	<router-link to="/level?id=2" class="level-icon">Давай знакомиться</router-link>
      </div>
      <div class="level">
        <span>3</span>
      	<router-link to="/level?id=3" class="level-icon">Социальная жизнь</router-link>
      </div>
      <div class="level">
        <span>4</span>
      	<router-link to="/level?id=4" class="level-icon">Ящиков - много не бывает</router-link>
      </div>
      <div class="level stage">
      	<router-link to="/level?id=5" class="level-icon">5</router-link>
      </div>
      <div class="level">
        <span>6</span>
        <router-link to="/level?id=6" class="level-icon">Сёрфер учит сёрфить</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  computed: {
    username() {
      return store.state.players.name
    },
    score() {
      return store.state.players.score
    }
  }
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
  overflow: hidden;
}
.map {
  min-width: 200vw;
  height: 60vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0 2vw;
}

.map h1{
  width: 100%;
  color: #3067ff;
  text-align: left;
  font-size: 6rem;
}
.level {
  color: #cacaca;
  /*background-color: #fff;*/
  margin-right: 1vw;
  height: 30vh;
  width: 30vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 14px;
  box-sizing: border-box;
  border: 4px solid #cacaca;
}

.level:not(.open) *{
  cursor: default;
}

.level span{
    font-size: 7rem;
}

header .scoreboard{
  background-color: #3067ff;
  color: #fff;
  border: none;
  padding: 1vh 2vw;
  border-radius: 7px;
  font-size: 1.5rem;
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
  /*background-color: #fff;*/
  border: 4px solid #3067ff;
  color: #3067ff;
  transition: all .3s ease-in;
  cursor: pointer;
}

.level.open .level-icon{
  color: #3067ff;
}

.level.open:hover{
  background-color: #3067ff;
}

.level.open:hover .level-icon{
  opacity: 1;
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
