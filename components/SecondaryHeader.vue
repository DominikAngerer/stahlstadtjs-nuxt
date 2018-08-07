<template>
  <header class="secondary-header">
    <div class="secondary-header__content">
      <nuxt-link to="/" class="secondary-header__headline">
        <img class="secondary-header__logo" src="https://a.storyblok.com/f/46926/x/1d9cd39f7c/stahlstadt-grey.svg" alt="Stahlstadt.js">
        <span class="hidden--visually">Stahlstadt.js</span>
      </nuxt-link>
    </div>
    <wave/>
  </header>
</template>

<script>
import Wave from '@/components/Wave'

export default {
  components: {
    Wave
  }
}
</script>


<style lang="scss"> 
.secondary-header {
  color: #fff;
  text-align: center;
  margin: 0;

  &__content {
    background: #242424;
    padding: 40px 20px 0px 20px;
  }

  &__headline {
    margin-bottom: 0;
  }

  &__logo {
    width: 240px;
    max-width: 100%;
  }
}
</style>
