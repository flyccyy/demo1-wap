<template>
  <div class="tabbar-wrapper">
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">问答</van-tabbar-item>
      <van-tabbar-item icon="friends-o">视频</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
};
</script>

<style lang="less" scoped>
.tabbar-wrapper {
  height: 100%;
  
}
</style>