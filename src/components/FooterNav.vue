<template>
  <!-- 底部导航栏 -->
  <van-tabbar v-model="active" class="active_tab index-footer">
    <van-tabbar-item
      v-for="(item,index) in tabbars"
      :key="index"
      @click="tab(index, item.name)"
    >
      <span :class="currIndex == index ? active:''">{{item.title}}</span>
      <template slot="icon" slot-scope="props">
        <img :src="props.active ? item.active : item.normal">
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>

export default {
  name: "FooterNav",
  components: {},
  mounted() {},
  data() {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: "home",
          title: "首页",
          normal: require("@/assets/images/home_1.png"),
          active: require("@/assets/images/home_2.png")
        },
        {
          name: "category",
          title: "分类",
          normal: require("@/assets/images/category_1.png"),
          active: require("@/assets/images/category_2.png")
        },
        {
          name: "special",
          title: "特价",
          normal: require("@/assets/images/star_1.png"),
          active: require("@/assets/images/star_2.png")
        },
        {
          name: "cart",
          title: "购物车",
          normal: require("@/assets/images/cart_1.png"),
          active: require("@/assets/images/cart_2.png")
        },
        {
          name: "mine",
          title: "我的",
          normal: require("@/assets/images/me_1.png"),
          active: require("@/assets/images/me_2.png")
        }
      ]
    };
  },
  methods: {
    // 底部导航栏切换
    tab(index, val) {
      this.currIndex = index;
      // this.$router.push(val);
    }
  },
  watch: {},
};
</script>

<style lang="less">
/** 底部导航栏 */
.index-footer{
  height: 188px;
  span{
    color: #666;
  }
  .van-tabbar-item{
    height: 188px;
  }
  .van-tabbar-item__icon, .van-tabbar-item__text {
      width: 100%;
      height: 100%;
      line-height: 2;
      text-align: center;
      img{
        width: 1.5rem;
        height: 1.5rem;
        margin: 2rem auto 0 auto;
      }
      span{
        font-size: 1rem;
      }
  }
  .van-tabbar-item__text{
    margin-bottom: 1rem;
  }
  .van-tabbar-item--active{
    span{
      color: #d00;
    }
  }
}

</style>
