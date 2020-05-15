<template>
  <div class="user">
    <user-header :mode="mode"/>
    <div class="banner_img">
      <img src="~assets/bannerTop_new.png" alt />
    </div>
    <user-xixi :mode="mode"/>
  </div>
</template>

<script>
import UserHeader from "components/common/UserHeader";
import UserXixi from "components/content/UserXixi";

export default {
  name: "",
  data() {
    return {
      mode:{

      }
    };
  },
  components: {
    UserHeader,
    UserXixi
  },
  methods: {
    async getInfoId() {
      // let id = JSON.parse(localStorage.getItem("userinfo")).id;
      // let token = JSON.parse(localStorage.getItem("userinfo")).token;
      let { data: res } = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.mode = res[0]
    }
  },
  created() {
    // 获取用户id 并携带id请求数据
    this.getInfoId();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.user {
  background-color: #f4f4f4;
  height: 100%;
  .banner_img {
    background-color: #fff;
    height: 85px;
    width: 100%;
    padding-top: 3px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
