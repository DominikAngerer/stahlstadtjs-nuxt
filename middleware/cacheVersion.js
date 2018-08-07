export default function ({ app, route, store, isDev }) {
  let version = route.query._storyblok || isDev ? 'draft' : 'published'
  if (process.server) {
    store.commit('SET_CACHE_VERSION', app.$storyapi.cacheVersion)
  }
}