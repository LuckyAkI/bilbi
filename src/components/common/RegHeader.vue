<template>
  <div class='header'>
    <div @click="clickBtn">{{text}}</div>
    <div class="right">
      <slot name='right'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  
  props:['text'],

  data(){
    return {}
  },
  components: {},
  methods: {
    clickBtn(){
      this.$emit('regBtn')
    }
  },
  created(){},
  mounted(){},
}
</script>
<style scoped lang="scss">
.header{
  position: relative;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
  margin-bottom: 20px;
  box-shadow: 1px 1px 5px #888888;
  .right{
    position: absolute;
    right:10px;
    top:0;
    font-size: 14px;
    color: #fb7299;
  }
}
</style>
