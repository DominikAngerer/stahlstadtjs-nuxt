<template>
  <div>
    <main-header/>
    <latest-meetups></latest-meetups>
  </div>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'
import MainHeader from '@/components/MainHeader'
import LatestMeetups from '@/components/LatestMeetups'

export default {
  components: {
    MainHeader,
    LatestMeetups
  },
  mixins: [storyblokLivePreview],
  async fetch ({ store, params }) {
    await store.dispatch('GET_MEETUPS')
  }
}
</script>

<style>
</style>

