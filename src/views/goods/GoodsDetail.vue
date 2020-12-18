<template>
    <div class="detail-container">
            
        <!-- 详情 -->
        <van-tabs ref="tabs" v-model="active" scrollspy sticky class="detail-tabs" id="top">
            <van-tab title="商品">
                <GoodsInfo />
            </van-tab>
            <van-tab title="评价" id="targetTop">
                <GoodsComment />
            </van-tab>
            <van-tab title="详情">
                <div style="height: 500px;">3</div>
            </van-tab>
            <van-tab title="推荐">
                <div style="height: 500px;">4</div>
            </van-tab>
        </van-tabs>

    </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
import GoodsInfo from "./GoodsInfo";
import GoodsComment from "./GoodsComment";

Vue.use(Lazyload);

export default {
  name: "GoodsDetail",
  components: {
      GoodsInfo,
      GoodsComment
  },
  data() {
    return {
        active: 2,
        className: "detail-tabs"
    }
  },
  mounted() {
      window.addEventListener('scroll', this.scroll);
  },
  destroyed(){
      window.removeEventListener('scroll', this.scroll)
  },
  methods: {
    scroll(){
        let obj = document.getElementById("top");
        let targetTop = document.getElementById("targetTop").offsetTop;
        if(this.getScrollTop() >= targetTop){
            if (obj.className.match(new RegExp('(\\s+|^)' + this.className + '(\\s+|$)'))){
                obj.className = obj.className.replace(new RegExp('(\\s+|^)' + this.className + '(\\s+|$)'), '');
                this.$refs.tabs.resize();
            }
        } else{
            if (!obj.className.match(new RegExp('(\\s+|^)' + this.className + '(\\s+|$)'))){
                obj.className += ' ' + this.className;
            }
        }
    },
    getScrollTop() {
        let scroll_top = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scroll_top = document.documentElement.scrollTop;
        }
        else if (document.body) {
            scroll_top = document.body.scrollTop;
        }
        return scroll_top;
    }
  },
  watch: {

  }
};
</script>

<style lang="less" scoped>
.detail-container{
    background: #eee;
    padding-bottom: 2rem;
}

</style>
