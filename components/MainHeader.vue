<template>
  <header class="main-header">
    <div class="main-header__content">
      <h1 class="main-header__headline">
        <img class="main-header__logo" src="https://a.storyblok.com/f/46926/x/1d9cd39f7c/stahlstadt-grey.svg" alt="Stahlstadt.js">
        <span class="hidden--visually">Stahlstadt.js</span>
      </h1>
      <h2 class="main-header__tagline">Let's talk JS. In se Stahlstadt.</h2>
    </div>
    <div class="main-header__wave">
      <svg viewbox="0 0 100 22">
        <path fill="#F5DC05" opacity="0.65" d="M0 30 V15 Q30 3 60 15 V30z" />
        <path d="M0 30 V12 Q30 17 55 12 T100 11 V30z" />
      </svg>
    </div>
  </header>
</template>

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

  &__wave {
    transform: rotateX(180deg);
    width: 100%;
    fill: #242424;
    
    svg {
      display: block;
      
    }
  }
}
</style>
