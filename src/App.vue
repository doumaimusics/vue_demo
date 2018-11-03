<template>
  <div id="app">

   <div class="nav_box">
     <ul>
       <li>
         <router-link to="/home">首页</router-link>
       </li>
       <li>
         <router-link to="/document">文档</router-link>
       </li>
       <li>
         <router-link to="/about">关于我们</router-link>
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
      width: 1200px;
      height: 80px;
      background: #fff;
      margin: auto;
    }
  }
</style>
