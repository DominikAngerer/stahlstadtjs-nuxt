<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style>
.card {
  display: block;
  padding: 24px;
  margin-bottom: 20px;

  background: #fff;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px;
  border-radius: 8px;

  & > :first-child {
    margin-top: 0px;
  }
}
</style>
