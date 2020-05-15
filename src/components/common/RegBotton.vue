<template>
  <div class='botton'>
    <van-button type="default" 
    :disabled="color == '#ff9db5' ? true : false"
    size='large '
    :color="color"
    @click="regBtn"
    >{{text}}</van-button>
  </div>
</template>

<script>
export default {
  name: '',
  props:['color','text'],
  data(){
    return {
    }
  },
  components: {},
  methods: {
    regBtn(){
      this.$emit('regBtn')
    }
  },
  created(){
  
  },
  watch: {
  },
  mounted(){
  },
}
</script>
<style scoped>
.botton{
  padding: 10px
}
.van-button {
  border-radius: 50px;
} 

</style>
