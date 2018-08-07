<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Merriweather');
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

html, body {
  font-family: 'Merriweather', serif;
  color: #242424;
  background: #f3f3f3;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

h1, h2, h3, h4, h5 {
  font-family: 'Raleway', sans-serif;
}

.container {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 75em;
}

.hidden--visually {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}

.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.col-1-1 {
  flex-shrink: 0;
  width: 100%;
}

.col-1-2 {
  flex-shrink: 0;
  width: calc(1/2 * 100% - (1 - 1/2) * 20px);
}
  
.col-1-3 {
  flex-shrink: 0;
  width: 33.33%;
  width: calc(1/3 * 100% - (1 - 1/3) * 20px);
}

.col-2-3 {
  flex-shrink: 0;
  width: 66.33%;
  width: calc(2/3 * 100% - (1 - 2/3) * 20px);
}
</style>

