<template>
  <div class="header">
    <div class="img">
      <img src="~assets/logo.jpg" alt />
    </div>
    <div class="serch">
      <p>
        如果我是dj你会爱
        <van-icon name="search" />
      </p>
      <!-- <div class="header"> -->
      <img src="~assets/info_header.jpg" alt />
      <!-- </div> -->
    </div>

    <div class="install">下载App</div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  padding-left: 10px;
  height: 40px;
  background-color: #fff;

  .img,
  .install {
    width: 90px;
    img {
      width: 90%;
      margin-top: 3px;
    }
  }
  .install {
    width: 80px;
    height: 24px;
    line-height: 24px;
    background-color: #fb7299;
    color: #fff;
    text-align: center;
    font-size: 12px;
    border-radius: 5px;
  }
  .serch {
    flex: 1;
    padding-right: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      background-color: #f4f4f4;
      height: 27px;
      line-height: 25px;
      box-sizing: border-box;
      width: 130px;
      padding: 2px 12px;
      border-radius: 25px;
      font-size: 10px;
      position: relative;
      color: #aaaaaa;
      padding-left: 25px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      .van-icon {
        position: absolute;
        left: 4px;
        font-size: 15px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    img {
      height: 25px;
      width: 25px;
      border-radius: 50%;
    }
  }
}
</style>
