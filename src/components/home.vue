<template>
  <div class="div1">
    我是首页
    <button @click="popUp.isShow = true">点击</button>
    <popUp 
    v-show="popUp.isShow"
    title="温馨提示" 
    leftBtnText="确认" 
    rightBtnText="取消" 
    :content = "popUp.content"
    @okClick="okClick"
    @cancel="cancel"
    :show.sync = "popUp.isShow"
    ></popUp>


    <input type="button" value="点击" id="btn" @click="clickFun">
    <!-- <input type="text" v-model="nums"> -->
    <ul>
       <li v-for="(item,index) in 5" :class="{color:index == nums}">{{item}}</li>
    </ul>
  </div>    
</template>

<script>
import popUp from './popUp/pop'
export default{
  data(){
    return{
       popUp:{
         isShow:false,
         content:'<div>我是干div标签</div>',
         
       },
       nums:null
    }
  },
  methods:{
      okClick(){
        alert('点击了确定')
      },
      cancel(){
        this.popUp.isShow = false;
      },

      clickFun(){
         if(this.nums > 100 && this.nums < 200){
             alert(1)
         }
      }

  },
  components:{
    popUp
  }
}
</script>

<style>
   #btn{
     background: blue;
     color: #fff;
   }
   .color{
     color:#f60000;
   }
</style>
