<template>
    <div class="goods-info-container">
        <!-- 顶部轮播图 -->
        <van-swipe class="my-swipe" :autoplay="6000" @change="onChange">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
            <template #indicator>
                <div class="custom-indicator">
                {{ current + 1 }}/{{ images.length }}
                </div>
            </template>
        </van-swipe>

        <!-- 详情页轮播图下面部份 -->
        <div class="detail-info">
            <van-row class="detail-price">
                <span class="price">¥&nbsp;998</span>
            </van-row>
            <van-row class="goods-title">
                <p>
                    秋冬季洋气小个子搭配显高套装女秋季御姐轻熟风休闲时尚炸街两件套裙子小个子青少女秋冬季高中生大学生靓女 马甲+连衣裙 S
                </p>
            </van-row>
        </div>
        <div class="detail-label-item">
            <div class="item-content">
                <span class="item-title">
                    促销
                </span>
                <span class="item-label">
                    满减满折
                </span>
                <span class="item-text">
                    满100减10
                </span>
                <van-icon name="arrow" class="item-btn" />
            </div>
        </div>
        <div class="detail-label-item">
            <div class="item-content">
                <!-- 第一行 -->
                <span class="item-title">
                    已选
                </span>
                <span class="item-text">
                    蓝色, 均码 建议80-95斤, 1个, 可选服务
                </span>
                <van-icon name="ellipsis" class="item-btn" />
                <p class="line"></p>
                <!-- 第二行 -->
                <span class="item-title">
                    送至
                </span>
                <span class="item-text">
                    广州市白云区京溪街道华乐小区
                </span>
                <van-icon name="ellipsis" class="item-send-btn" />
                <!-- 第三行 -->
                <div class="three-line">
                    <span class="item-title hide">
                        促销
                    </span>
                    <span class="item-send-label">
                        现货
                    </span>
                </div>
                <!-- 第四行 -->
                <van-icon name="ellipsis" class="item-bz-btn" />
                <div class="four-line">
                    <span class="four-line-item">
                        <van-icon class="icon" name="certificate" />
                        <span>商家发货&售后</span>
                    </span>
                    <span class="four-line-item">
                        <van-icon class="icon" name="certificate" />
                        <span>7天无理由退货</span>
                    </span>
                </div>
            </div>
        </div>

        <div class="detail-label-item">
            <div class="item-content">
                <span class="item-title">
                    <van-icon class="ranking-icon" name="medal-o" />排行榜
                </span>
                <span class="item-text">
                    针织衫热卖榜第13名
                </span>
                <van-icon name="arrow" class="item-btn" />
            </div>
        </div>

    </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";

Vue.use(Lazyload);

export default {
  name: "GoodsDetail",
  components: {
      
  },
  data() {
    return {
        active: 1,
        current: 0,
        showDetail: false,
        className: "detail-tabs",
        images: [
            'https://m.360buyimg.com/babel/s750x2750_jfs/t1/142629/35/13364/156594/5fa2c375Ead85379d/3471fae3b10684d4.jpg!q80.dpg',
            'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/135595/11/9364/150060/5f5616eaEdc919530/e6c1dcbcadb698da.jpg!q80.dpg.webp',
            'https://m.360buyimg.com/babel/s750x750_jfs/t1/148948/39/13565/176128/5fa68c20Eb56624df/c95d28c569129e04.jpg!q80.dpg'
        ]
    }
  },
  mounted() {
      
  },
  methods: {
    onChange(index){
        this.current = index;
    }
  },
  watch: {

  }
};
</script>

<style lang="less" scoped>
.my-swipe{
  height: 32.3rem;
  img{
    width: 100%; height: 100%;
  }
  .custom-indicator{
    position: absolute;
    right: 0.6rem;
    bottom: 0.6rem;
    padding: 0.3rem 0.6rem;
    font-size: 1.3rem;
    color: #fff;
  }
}
.detail-info{
    background: #fff;
    padding-bottom: 2rem;
    box-sizing: border-box;
    border-radius: 0 0 0.8rem 0.8rem;
    .detail-price{
        height: 3.7rem;
        line-height: 3.7rem;
        padding: 0 1.3rem;
        .price{
            color: red;
            font-weight: bold;
            font-size: 1.37rem;
        }
    }
    .goods-title{
        padding: 0 1.3rem;
        p {
            font-size: 1.13rem;
            font-weight: bold;
        }
    }
}
.detail-label-item{
    margin: 1.3rem 0;
    .item-content{
        border-radius: 0.8rem;
        line-height: 2.5rem;
        background: #fff;
        padding: 1.3rem;
        box-sizing: border-box;
        position: relative;
        .item-title, .item-label, .item-text {
            font-size: 1.13rem;
        }
        .item-title {
            font-size: 1.13rem;
            font-weight: bold;
            margin-right: 1.3rem;
        }
        .item-label{
            font-size: 0.8rem;
            border: 1px solid #f00;
            padding: 0.2rem;
            border-radius: 0.2rem;
            color: #F00;
            margin-right: 1.3rem;
        }
        .item-text{
            font-size: 1rem;
            color: #666;
        }
        .item-btn, .item-send-btn, .item-bz-btn{
            font-size: 1.6rem;
            position: absolute;
            color: #666;
            right: 0.8rem;
            top: 1.8rem;
        }
        .item-send-btn{
            top: 6.9rem;
        }
        .item-bz-btn{
            top: 11.3rem;
        }
        .ranking-icon{
            top: 0.2rem;
            color: red;
            margin-right: 0.13rem;
        }
        .line{
            border-top: 1px solid #eee;
            margin: 0.8rem 0;
        }
        .three-line{
            line-height: 1rem;
            margin-bottom: 2.3rem;
            .item-send-label{
                font-size: 1.13rem;
                font-weight: bold;
                color: #f00;
            }
        }
        .four-line{
            background: rgb(246, 246, 246);
            margin: -1.3rem;
            padding: 0 0 0 1.3rem;
            border-radius: 0 0 0.8rem 0.8rem;
            height: 3.7rem;
            font-size: 0.8rem;
            line-height: 3.7rem;
            .four-line-item{
                margin-right: 1.3rem;
                span{
                    margin-left: 0.3rem;
                }
                .icon{
                    top: 0.1rem;
                    color: red;
                }
            }
        }
    }
}
</style>
