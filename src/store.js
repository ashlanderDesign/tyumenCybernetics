import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	players: {
  		name: '',
  		password: '',
      	score: 0
  	}
  },
  mutations: {
  	addPlayer(state, payload) {
  		state.players.name = payload.name
  		state.players.password = payload.password
  	}
  },
  actions: {

  }
})
