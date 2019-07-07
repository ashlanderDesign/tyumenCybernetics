import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	players: {
  		name: '',
  		password: '',
      	score: 0,
      	level: 1
  	},
  	playersList: ["Вася", "Петя", "Маша"],
  	scoreList: [{name: "Вася", score: 250}, {name: "Петя", score: 500}, {name: "Маша", score: 1000}]
  },
  mutations: {
  	addPlayer(state, payload) {
  		state.players.name = payload.name
  		state.players.password = payload.password
  	},
  	updateScore(state, payload) {
  		state.players.score =+ payload
  	},
  	updateLevel(state, payload) {
  		state.players.level++
  	}
  },
  actions: {

  }
})
