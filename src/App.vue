<template>
  <div id="app">

   <div class="nav_box">
     <ul>
       <li>
         <!-- exact 当这个路径设置成根路径时，点击其他当前还会显示激活状态，是因为点击其他会把根路径带上  写上exact点击其他就不会把根路径状态带上 -->
         <router-link to="/" exact>首页</router-link>
       </li>
       <li>
         <!-- avtive-class 行内设置选中激活状态的样式 -->
         <router-link to="/document" active-class="activeClass">文档</router-link>
       </li>
       <li>
         <router-link to="/about">关于我们</router-link>
       </li>
       <li>
         <router-link to="/fanpai">翻牌demo</router-link>
       </li>
     </ul>
   </div>


    <!-- router-view  vue预留的根组建  写组建都时候不要用这个名字 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  #app{
    position: relative;
    width: 100%;
    background: #e5e5e5;
    .nav_box{
      width: 12rem;
      height: .8rem;
      background: #fff;
      margin: auto;
      ul{
        height: 100%;
        li{
          float: left;
          margin-left: .625rem;
          font-size: .26rem;
        }
      }
    }
    .isActive{
      background: yellow;
    }
    .activeClass{
      background: pink;
    }
  }
</style>
