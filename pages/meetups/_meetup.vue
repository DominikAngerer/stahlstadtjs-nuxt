<template>
  <div class="meetup">
    <secondary-header/>
    <div class="container">
      <h1 class="meetup__headline">{{meetup.name}}</h1>
      <card>
        <div class="meetup__description" v-html="meetup.description"></div>
      </card>
    </div>
  </div>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'
import SecondaryHeader from '@/components/SecondaryHeader'
import Card from '@/components/Card'

export default {
  components: {
    SecondaryHeader,
    Card
  },
  computed: {
    meetup() {
      return this.$store.state.meetups.filter((v) => {
        return v.id === this.$route.params.meetup
      })[0]
    }
  },
  mixins: [storyblokLivePreview],
  async fetch ({ store, params }) {
    await store.dispatch('GET_MEETUPS')
  }
}
</script>

<style lang="scss">
.meetup {
  text-align: center;

  &__headline {
    margin-top: 3rem;
    font-size: 3rem;
  } 

  &__description {
    text-align: left;
  }
}
</style>

