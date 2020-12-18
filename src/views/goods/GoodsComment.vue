<template>
    <div class="goods-comment">
        
        comment
    </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";

Vue.use(Lazyload);

export default {
  name: "GoodsComment",
  components: {

  },
  data() {
    return {
        active: 1,
        current: 0
    }
  },
  mounted() {
      
  },
  methods: {
    
  },
  watch: {

  }
};
</script>

<style lang="less" scoped>
.goods-comment{
    height: 500px;
}
</style>
