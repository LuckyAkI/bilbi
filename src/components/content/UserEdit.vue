<template>
  <div class="edit" @click="editbtn">
    <div>{{left}}</div>
    <div class="text">
      <slot name="right"  class="img"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["left"],
  data() {
    return {};
  },
  components: {},
  methods: {
    editbtn(){
      this.$emit('editbtn')
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.edit {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin-bottom: 1px;
  padding: 8px 10px;
  .img{
    width: 46px;
    height: 46px;
    border-radius: 50%;
  }
  .text{
    font-size: 14px;
    color: #999;
  }
}
</style>
