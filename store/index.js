import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      cacheVersion: '',
      meetups: []
    },
    mutations: {
      SET_CACHE_VERSION (state, version) {
        state.cacheVersion = version
      },
      SET_MEETUPS(state, meetups) {
        state.meetups = meetups
      }
    },
    actions: {
      async GET_MEETUPS({commit}) {
        const { data } = await axios.get('https://s3.amazonaws.com/a.storyblok.com/f/46926/x/fd09b1af0e/stahlstadtjs.json')
        commit('SET_MEETUPS', data.reverse())
      }
    }
  })
}

export default createStore