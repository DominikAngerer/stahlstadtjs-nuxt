<template>
  <div class="container latest-meetups">
    <h2 class="latest-meetups__headline">Latest Meetups</h2>
    <div class="grid">
      <nuxt-link :to="`/meetups/${meetup.id}`" class="latest-meetups__item col-1-3" v-bind:key="meetup.id" v-for="(meetup, index) in $store.state.meetups.slice(0, 6)">
        <card>
          <h2>Stahlstadt.js #{{$store.state.meetups.length - index}}</h2>
          <h3></h3>
          <p>{{meetup.local_date}} - {{meetup.local_time}}</p>
        </card>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  components: {
    Card
  }
}
</script>

<style lang="scss">
.latest-meetups {
  margin: 6rem auto;
  &__headline {
    margin-top: 3rem;
    font-size: 3rem;
  }

  &__item {
    text-decoration: none;
    color: initial;
  }
}
</style>
