<template>
  <van-field
    v-model="value"
    :type="type"
    :label="label"
    :placeholder="placeholder"
    :rule="rule"
    @blur="blur"
  />
</template>

<script>
export default {
  name: "",
  props: ["label", "placeholder", "type", "rule"],
  data() {
    return {
      value: ""
    };
  },
  watch: {
    value(v){
      this.$emit('Color',v)
    }
  },
  components: {},
  methods: {
    blur() {
      let Reg = new RegExp(this.rule);
      if (Reg.test(this.value)) {
        this.$emit("regvalue", this.value);
        return;
      }
      if (this.value) {
        if (!Reg.test(this.value)) {
          this.$Toast.fail("输入正确的格式");
          this.value = "";
        }
      }
    }
  },
  created() {
  },
  mounted() {}
};
</script>
<style scoped>
</style>
