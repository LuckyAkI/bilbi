<template>
  <div>
    <div class="xixi">
      <div class="header_pic">
        <img src="~assets/info_header.jpg" alt />
      </div>
      <div class="box">
        <div class="aa">
          <p>
            <span>0</span>
            <span class="text">粉丝</span>
          </p>
          <div class="inline"></div>
          <p>
            <span>13</span>
            <span class="text">关注</span>
          </p>
          <div class="inline"></div>

          <p>
            <span>0</span>
            <span class="text">获赞</span>
          </p>
        </div>
        <div class="but">
          <van-button plain type="primary" size="large">编辑资料</van-button>
        </div>
      </div>
    </div>
    <div class="jianjie">
      <h1>{{mode.username}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    mode: {
      type: Object,
      default() {
        return {};
      }
    }
  },
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
.xixi {
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
  height: 100px;
  background-color: #fff;
  .header_pic {
    height: 80px;
    width: 80px;
    position: relative;

    img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
      position: absolute;
      top: -10px;
    }
  }
  .box {
    width: 265px;
    padding-left: 45px;
    .aa {
      width: 220px;
      height: 48px;
      box-sizing: border-box;
      padding: 0 20px;
      padding-top: 8px;
      display: flex;
      .inline {
        height: 15px;
        width: 1px;
        background-color: #eee;
        margin-top: 12px;
      }
      p {
        flex: 1;
        text-align: center;
        font-size: 12px;
        color: #000;
        .text {
          color: #acacac;
        }
        span {
          display: block;
        }
      }
    }
    .but {
      .van-button--large {
        height: 30px;
        width: 220px;
      }
      .van-button--plain.van-button--primary {
        color: #fb7299;
        .van-button__text {
          font-size: 13px;
        }
      }
      .van-button--primary {
        border-color: #fb7299;
        border-radius: 5px;
      }
    }
  }
}
</style>
