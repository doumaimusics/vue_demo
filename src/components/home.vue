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
  </div>    
</template>

<script>
import popUp from './popUp/pop'
export default{
  data(){
    return{
       popUp:{
         isShow:false,
         content:'<div>我是干div标签</div>'
       }
    }
  },
  methods:{
      okClick(){
        alert('点击了确定')
      },
      cancel(){
        this.popUp.isShow = false;
      },

  },
  components:{
    popUp
  }
}
</script>

<style>
</style>
