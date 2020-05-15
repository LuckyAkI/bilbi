<template>
  <div class="userDetail">
    <UserHeader class="header" :mode="mode" />
    <div class="upload">
      <van-uploader :after-read="afterRead" preview-size="100vw" />
      <UserEdit left="头像">
        <img slot="right" :src="mode.user_img" class="img" alt v-if="mode.user_img" />
        <img slot="right" src="~assets/info_header.jpg" class="img" alt v-else />
      </UserEdit>
    </div>
    <UserEdit left="昵称" @editbtn="show = true">
      <div slot="right">{{mode.name}}</div>
    </UserEdit>
    <UserEdit left="UID">
      <div slot="right">{{mode.id}}</div>
    </UserEdit>
    <UserEdit left="性别" @editbtn="sex = true">
      <div slot="right">{{mode.gender ? '男' : '女'}}</div>
      <!-- <div v-else slot="right">保密</div> -->
    </UserEdit>
    <UserEdit left="个性签名" @editbtn="isshow = true">
      <div v-if="mode.user_desc" slot="right">{{mode.user_desc}}</div>
      <div v-else slot="right">没有伞的孩子只能努力奔跑 ~</div>
    </UserEdit>

    <!-- 消息弹窗 -->
    <van-dialog
      v-model="show"
      title="VIP"
      show-cancel-button
      @confirm="confirmName"
      @cancel="value = ''"
    >
      <van-field v-model="value" placeholder="修改内容" autofocus />
    </van-dialog>

    <van-dialog
      v-model="isshow"
      title="VIP"
      show-cancel-button
      @confirm="textarea"
      @cancel="value = ''"
    >
      <van-field v-model="value" type="textarea" placeholder="修改签名" autofocus />
    </van-dialog>

    <!-- 修改性别 -->
    <van-action-sheet v-model="sex" :actions="actions" @select="onSelect" />

    <div class="btn">
      <!-- 返回按钮 -->
      <van-button type="default" size="large" @click="$router.push('/userinfo')">返回空间</van-button>
      <!-- 退出登录按钮 -->
      <van-button type="default" size="large" @click="$router.push('/login')">退出登录</van-button>
    </div>
  </div>
</template>

<script>
import UserHeader from "components/common/UserHeader";
import UserEdit from "components/content/UserEdit";

export default {
  name: "",
  data() {
    return {
      mode: {},
      show: false,
      isshow: false,
      value: "",
      sex: false,
      actions: [{ name: "女", id: 0 }, { name: "男", id: 1 }, { name: "取消" }]
    };
  },
  components: {
    UserHeader,
    UserEdit
  },
  methods: {
    // 上传图片并且保存到服务端
    async afterRead(file) {
      let fd = new FormData();
      fd.append("file", file.file);

      let { data: res } = await this.$http.post("/upload", fd);
      this.mode.user_img = res.url;
      this.$Toast.success("修改成功");

      this.updata();
    },

    //  请求加载数据
    async getedi() {
      let { data: res } = await this.$http.get(
        "/user/" + localStorage.getItem("id")
      );
      this.mode = res[0];
    },

    //  修改昵称
    confirmName() {
      this.mode.name = this.value;
      this.$Toast.success("修改成功");
      this.updata();
      this.value = "";
    },
    // 修改签名
    textarea() {
      console.log(123);
      this.mode.user_desc = this.value;
      this.$Toast.success("修改成功");

      this.updata();
      this.value = "";
    },

    // 修改性别
    onSelect(data) {
      console.log(data);
      this.mode.gender = data.id;
      this.$Toast.success("修改成功");
      this.updata();
      this.sex = false;
    },

    // 更新服务端数据
    updata() {
      return this.$http.post(
        "/update/" + localStorage.getItem("id"),
        this.mode
      );
    }
  },
  created() {
    this.getedi();
  },
  mounted() {}
};
</script>
<style scoped lang='scss'>
.userDetail {
  height: 100%;
  background-color: #f4f4f4;
  .header {
    margin-bottom: 10px;
  }
  .upload {
    position: relative;
    overflow: hidden;
    .van-uploader {
      position: absolute;
      opacity: 0;
    }
  }
  .btn {
    margin-top: 15px;
    .van-button__text {
      font-size: 14px;
      color: #505050;
    }
  }
}
</style>
