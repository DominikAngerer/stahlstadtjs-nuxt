<template>
  <header class="main-header">
    <div class="main-header__content">
      <h1 class="main-header__headline">
        <img class="main-header__logo" src="https://a.storyblok.com/f/46926/x/1d9cd39f7c/stahlstadt-grey.svg" alt="Stahlstadt.js">
        <span class="hidden--visually">Stahlstadt.js</span>
      </h1>
      <h2 class="main-header__tagline">Let's talk JS. In se Stahlstadt.</h2>
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
.main-header {
  color: #fff;
  text-align: center;
  margin: 0;

  &__content {
    background: #242424;
    padding: 80px 20px 20px 20px;
  }

  &__headline {
    margin-bottom: 0;
  }

  &__logo {
    width: 640px;
    max-width: 100%;
  }

  &__tagline {
    margin-top: 0;
  } 
}
</style>
