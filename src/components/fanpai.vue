<template>
    <div class="draw_box">
        <ul class="clear">
            <li v-for="item in 3" @click="clickFun" :class="{card_flipped:isShow}">
                <div class="draw_img normal_img"></div>
                <div class="draw_img rotate_img">
                    <img src="">
                </div> 
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isShow:false,
      listData: [{ 1: 1 }, { 2: 2 }, { 3: 3 }]
    };
  },
  methods:{
      clickFun(){
          this.isShow = true;
      }
  }

};
</script>

<style lang="scss">
//九宫格部分样式
.draw_box {
  ul {
    position: relative;
    width: 100%;
    height: 100%;
    li {
      width: 2rem;
      height: 2.48rem;
      float: left;
      margin-bottom: 0.16rem;
      position: relative;
      perspective: 1000;
      -webkit-perspective: 1000;
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      transition: all 1s ease;
      .draw_img {
        width: 100%;
        height: 100%;
        position: absolute;
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        transition: all 1s ease;
        -moz-backface-visibility: hidden;
        -ms-backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
      .normal_img {
        z-index: 10;
      }
      .rotate_img {
        transform: rotate3d(0, 1, 0, 180deg);
        -webkit-transform: rotate3d(0, 1, 0, 180deg);
        -ms-transform: rotate3d(0, 1, 0, 180deg);
        -moz-transform: rotate3d(0, 1, 0, 180deg);
        -o-transform: rotate3d(0, 1, 0, 180deg);
        z-index: 8;
        background: url(../images/spellFragmentsActivity/sp_box.png) no-repeat;
        background-size: cover;
      }
    }
    .card_flipped .normal_img {
      transform: rotate3d(0, 1, 0, -180deg);
      -ms-transform: rotate3d(0, 1, 0, -180deg);
      /* IE 9 */
      -moz-transform: rotate3d(0, 1, 0, -180deg);
      /* Firefox */
      -webkit-transform: rotate3d(0, 1, 0, -180deg);
      /* Safari 和 Chrome */
      -o-transform: rotate3d(0, 1, 0, -180deg);
      /* Opera */
      z-index: 8;
    }
    .card_flipped .rotate_img {
      transform: rotate3d(0, 1, 0, 0deg);
      -ms-transform: rotate3d(0, 1, 0, 0deg);
      /* IE 9 */
      -moz-transform: rotate3d(0, 1, 0, 0deg);
      /* Firefox */
      -webkit-transform: rotate3d(0, 1, 0, 0deg);
      /* Safari 和 Chrome */
      -o-transform: rotate3d(0, 1, 0, 0deg);
      /* Opera */
      z-index: 10;
    }

    .drawHe {
      transform: rotate3d(0, 0, 1, 720deg);
      -ms-transform: rotate3d(0, 0, 1, 720deg);
      /* IE 9 */
      -moz-transform: rotate3d(0, 0, 1, 720deg);
      /* Firefox */
      -webkit-transform: rotate3d(0, 0, 1, 720deg);
      /* Safari 和 Chrome */
      -o-transform: rotate3d(0, 0, 1, 720deg);
    }

    li:not(:nth-child(1), :nth-child(4), :nth-child(7)) {
      margin-left: 0.15rem;
    }
    $normalImg: (
      url(../images/spellFragmentsActivity/img_normal1.png) no-repeat,
      url(../images/spellFragmentsActivity/img_normal2.png) no-repeat,
      url(../images/spellFragmentsActivity/img_normal3.png) no-repeat
    );
    @for $i from 1 through 3 {
      li:nth-child(#{$i}) .normal_img {
        background: nth($normalImg, $i);
        background-size: cover;
      }
    }
  }
}
</style>