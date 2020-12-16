<template>
  <div class="index">
    <!-- 顶部轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <!-- 每日逛 -->
    <!-- 标题 -->
    <van-row class="everyday-visit">
      <img :src="require('../assets/images/everyday_visit.jpg')" />
    </van-row>
    <!-- 列表 -->
    <van-grid :border="false" :column-num="3" class="everyday-grid">
      <van-grid-item class="list-item">
        <van-image class="item-img" src="https://m.360buyimg.com/n1/s750x750_jfs/t29566/227/1464891645/10350/a5b133e2/5ce20cdcNd9cdd972.jpg!q70.jpg.dpg" />
        <p class="item-title">发现时尚</p>
        <p class="item-sub-title">时尚穿搭</p>
      </van-grid-item>
      
      <van-grid-item class="list-item">
        <van-image class="item-img" src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/69408/25/7802/70708/5d5cf53eEeeacded1/ed30c207df93b4d2.jpg!q70.jpg.dpg" />
        <p class="item-title">成熟时装</p>
        <p class="item-sub-title">展现你的美</p>
      </van-grid-item>

      <van-grid-item class="list-item">
        <van-image class="item-img" src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/137278/24/11754/215657/5f7eaad1Efd42d808/56caed066247ed0c.jpg!q70.jpg.dpg" />
        <p class="item-title">复古达人</p>
        <p class="item-sub-title">时尚轮回</p>
      </van-grid-item>
  
     <van-grid-item class="list-item">
        <van-image class="item-img" src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/140592/30/18226/123972/5fd66ab6E299d9a65/ca5188b74b0d9374.jpg!q70.jpg.dpg" />
        <p class="item-title">发现时尚</p>
        <p class="item-sub-title">发现时尚</p>
      </van-grid-item>
      <van-grid-item class="list-item">
        <van-image class="item-img" src="https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/149062/36/8961/121275/5f688e3fEa65e3d18/2af9be1030c52f2d.jpg!q70.dpg.webp" />
        <p class="item-title">发现时尚</p>
        <p class="item-sub-title">发现时尚</p>
      </van-grid-item>
      <van-grid-item class="list-item">
        <van-image class="item-img" src="https://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/132952/9/13904/44489/5f996bedEbfdba59c/375dd8bf89aefeae.jpg!q70.dpg.webp" />
        <p class="item-title">发现时尚</p>
        <p class="item-sub-title">发现时尚</p>
      </van-grid-item>
    </van-grid>

    <!-- 猜你喜欢 -->
    <!-- 标题 -->
    <van-row class="youlike">
      <img :src="require('../assets/images/youlike.png')" />
    </van-row>
    <!-- 列表 -->
    <van-grid :border="false" :column-num="2" class="youlike-grid">
      <van-grid-item class="list-item">
        <van-image class="item-img" src="https://m.360buyimg.com/n1/s750x750_jfs/t29566/227/1464891645/10350/a5b133e2/5ce20cdcNd9cdd972.jpg!q70.jpg.dpg" />
        <p class="item-title">PORTS宝姿 新品女装百搭经典毛边中长毛呢大衣 CAMEL 2</p>
        <p class="item-price">¥&nbsp;998</p>
      </van-grid-item>
      
      <van-grid-item class="list-item">
        <van-image class="item-img" src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/69408/25/7802/70708/5d5cf53eEeeacded1/ed30c207df93b4d2.jpg!q70.jpg.dpg" />
        <p class="item-title">丹贝迪特 时尚双面羊绒大衣女中长款2020年冬季新款直筒显瘦外套女加厚上衣女气质穿搭潮ins 驼色 S</p>
        <p class="item-price">¥&nbsp;138</p>
      </van-grid-item>

      <van-grid-item class="list-item">
        <van-image class="item-img" src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/137278/24/11754/215657/5f7eaad1Efd42d808/56caed066247ed0c.jpg!q70.jpg.dpg" />
        <p class="item-title">【运费险】短外套女春秋新款秋装韩版宽松时尚百搭女装短款开衫显瘦休闲秋冬小夹克大码女装上衣潮 粉色 XL</p>
        <p class="item-price">¥&nbsp;67</p>
      </van-grid-item>
  
     <van-grid-item class="list-item">
        <van-image class="item-img" src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/140592/30/18226/123972/5fd66ab6E299d9a65/ca5188b74b0d9374.jpg!q70.jpg.dpg" />
        <p class="item-title">【秋冬新品】大码200斤纯棉2020春秋破洞宽松中长款打底衫破洞内搭背心女叠穿搭配卫衣 4283#白色 XL 【120斤-140斤】</p>
        <p class="item-price">¥&nbsp;199</p>
      </van-grid-item>
      <van-grid-item class="list-item">
        <van-image class="item-img" src="https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/149062/36/8961/121275/5f688e3fEa65e3d18/2af9be1030c52f2d.jpg!q70.dpg.webp" />
        <p class="item-title">丹贝迪特 时尚羊羔毛绒棉服女中长款2020年秋冬新款韩版宽松皮毛一体棉袄女加厚外套女潮Ins 图片色 S</p>
        <p class="item-price">¥&nbsp;2098</p>
      </van-grid-item>
      <van-grid-item class="list-item">
        <van-image class="item-img" src="https://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/132952/9/13904/44489/5f996bedEbfdba59c/375dd8bf89aefeae.jpg!q70.dpg.webp" />
        <p class="item-title">发现时尚</p>
        <p class="item-price">¥&nbsp;667</p>
      </van-grid-item>
    </van-grid>

    <!-- 底部导航栏 -->
    <FooterNav />
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
import FooterNav from "@/components/FooterNav.vue";

Vue.use(Lazyload);

export default {
  name: "Index",
  components: {
    FooterNav
  },
  mounted() {},
  data() {
    return {
      currIndex: 0,
      active: 0,
      images: [
        'https://m.360buyimg.com/babel/s750x2750_jfs/t1/142629/35/13364/156594/5fa2c375Ead85379d/3471fae3b10684d4.jpg!q80.dpg',
        'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/135595/11/9364/150060/5f5616eaEdc919530/e6c1dcbcadb698da.jpg!q80.dpg.webp',
        'https://m.360buyimg.com/babel/s750x750_jfs/t1/148948/39/13565/176128/5fa68c20Eb56624df/c95d28c569129e04.jpg!q80.dpg'
      ],
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
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 100);
    },
    // 底部导航栏切换
    tab(index, val) {
      this.currIndex = index;
      this.$router.push(val);
    }
  },
  watch: {

  }
};
</script>

<style lang="less" scoped>
.index{
  margin-bottom: 6rem;
}
/** 轮播图 */
.my-swipe{
  height: 32.3rem;
  img{
    width: 100%; height: 100%;
  }
}
/** 每日逛 */
.everyday-visit{
  margin: 1rem 0 0 0;
  img{
    width: 100%;
  }
}
.everyday-grid{
  .list-item{
    padding: 0.5rem;
    .item-img {
      width: 100%;
      height: 10rem;
    }
    .item-title{
      font-size: 1rem;
      font-weight: bold;
      /** 内容超出一行显示... */
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .item-sub-title{
      font-size: 1rem; color: #aaa;
      /** 内容超出一行显示... */
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
}
/** 猜你喜欢 */
.youlike{
  margin: 1rem 0 0 0;
  img{
    width: 100%;
  }
}
.youlike-grid{
  .list-item{
    padding: 0.5rem;
    .item-img {
      width: 100%;
    }
    .item-title{
      display: block;
      width: 100%;
      font-size: 1rem;
      /** 内容超出二行显示... */
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      height: 2.6rem;
      line-height: 1.3rem;
    }
    .item-price{
      display: block;
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      font-size: 1.1rem;
      text-align: left;
      color: red;
      font-weight: bold;
    }
  }
}


</style>
