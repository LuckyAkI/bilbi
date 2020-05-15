<template>
  <div class="padd">
    <!-- 个人展示 -->
    <div class="xixi">
      <!-- 头像 -->
      <div v-if="mode.user_img" class="header_pic">
        <img :src="mode.user_img" alt />
      </div>
      <div v-else class="header_pic">
        <img src="~assets/info_header.jpg" alt />
      </div>

      <!-- 编辑资料 -->
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
        <div class="but" @click="$router.push('/userdetail')">
          <van-button plain type="primary" size="large">编辑资料</van-button>
        </div>
      </div>
    </div>

    <!-- 签名个人 -->
    <div class="jianjie">
      <!-- 昵称~性别 -->
      <div class="title">
        <h3 v-if="mode.name">{{mode.name}}</h3>
        <h3 v-else>官方账号</h3>
        <span>{{mode.gender ? '男' : '女'}}</span>
      </div>

      <!-- 签名 -->
      <div class="user_desc" v-if="mode.user_desc">{{mode.user_desc}}</div>
      <div class="user_desc" v-else>很懒哦,什么都没留下！</div>
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
.padd {
  padding: 0 12px;
  background-color: #fff;
  .xixi {
    display: flex;
    justify-content: space-between;
    height: 100px;
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
       .van-button::before{
         background: #fff;
       }
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
  .jianjie {
    height: 64px;
    background-color: #fff;
    .title {
      display: flex;
      h3 {
        font-size: 16px;
        color: #212121;
        font-weight: normal;
        margin-right: 20px;

      }
      span{
        color:#09afe3;
        font-size:12px;
      }
    }
    .user_desc{
      margin-top: 14px;
      font-size: 10px;
      color: #999999;
    }
  }
}
</style>
