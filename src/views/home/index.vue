<template>
  <div class="home-wrapper">
    <van-nav-bar
      title="首页"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      class="tabbar-title"
    />
    <van-tabs v-model="tabsActive">
      <van-tab :title="item.name" v-for="item in channelList" :key="item.id">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <!-- <van-cell v-for="item in list" :key="item" :title="item" > -->
            <van-cell title="单元格" value="内容" label="描述">
              <template slot="label">
                <span>15845 </span>
                <span>评论 0 </span>
                <span>21小时内</span>
              </template>
            </van-cell>
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getChannels } from "@/api/channel.js";
import { getArticleList } from '@/api/articles.js'
export default {
  data() {
    return {
      tabsActive: 0,
      channelList: [],
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      userInfo:{}
    };
  },
  // created(){
  //   let userInfo = JSON.parse(window.sessionStorage.getItem('userInfo'));
  //   this.userInfo = userInfo
  // },
  methods: {
    onClickLeft() {},
    async getChannels() {
      let res = await getChannels();
      // console.log(res);
      this.channelList = res.data.data.channels;
    },
    // async getArticleList() {
    //   let res = await getArticleList();
    //   console.log(res)
    // },
    getArticleList(){
      let userInfo = JSON.parse(window.sessionStorage.getItem('userInfo'));
      this.$axios({
        url:'http://ttapi.research.itcast.cn/app/v1_0/user/articles',
        headers:{
          Authorization:`Bearer ${userInfo.token}`
        }
      }).then((res)=>{
        console.log(res)
      })
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    }
  },
  mounted() {
    this.getChannels();
    this.getArticleList();
  }
};
</script>

<style lang="less" scoped>
.home-wrapper {
  height: 100%;
  .tabbar-title {
    background-color: #3396fc;
  }
}

.tabbar-title /deep/ .van-nav-bar__title,
.tabbar-title /deep/ .van-nav-bar__text,
.tabbar-title /deep/ .van-nav-bar__arrow {
  color: #fff;
}
</style>