import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      cacheVersion: ''
    },
    mutations: {
      setCacheVersion (state, version) {
        state.cacheVersion = version
      }
    }
  })
}

export default createStore