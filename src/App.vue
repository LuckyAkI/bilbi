<template>
  <div id="app">
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
body,
html,
#app {
  height: 100%;
  /* overflow-x: hidden; */
}
/* .v-enter,.v-leave-to
 {
  transform: translateX(100%);
  opacity: 0;
} */
/* .v-leave-to{
  transform: translateX(-100%);
} */
/* .v-leave-active,
.v-enter-active {
  transition: all 0.5s ease;
} */
</style>
