<template>
  <div class="login-wrapper">
    <div class="login-title">登录</div>
    <van-form >
      <van-field
        v-model="mobile"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="code"
        name="验证码"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
      />
      <div style="margin: 16px;">
        <van-button block type="info" native-type="submit" @click="onSubmit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user.js'
export default {
  data() {
    return {
      mobile: '',
      code: '',
    };
  },
  methods: {
    // async getUserInfo(){
    //   let res = await getUserInfo({
    //     mobile:this.mobile,
    //     code:this.code
    //   })
    // },
    // async onSubmit(values) {
    //   let res = await getUserInfo({
    //     mobile:this.mobile,
    //     code:this.code
    //   })
    //   let userInfo = JSON.stringify(res.data.data)
    //   window.sessionStorage.setItem('userInfo',userInfo)
    //   this.$router.push('/home')
    //   // console.log(res);
    // },
    onSubmit(){
      this.$axios({
        url:'http://ttapi.research.itcast.cn/app/v1_0/authorizations',
        method:'POST',
        data:{
          mobile:this.mobile,
          code:this.code
        }
      }).then((res)=>{
        let userInfo = JSON.stringify(res.data.data)
        window.sessionStorage.setItem('userInfo',userInfo)
        this.$router.push('/home')
        console.log(res)
      })
    }
  },
};
</script>

<style lang="less" scoped>
.login-wrapper {
  height: 100%;
  .login-title {
    height: 40px;
    text-align: center;
    color: #fff;
    line-height: 40px;
    background-color: #3396fc;
  }
}
</style>