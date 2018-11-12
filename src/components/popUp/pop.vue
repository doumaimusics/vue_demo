<template>
    <div id="pop_box">
        <div class="close_btn" @click="close">X</div>
        <div class="title">{{title}}</div>
        <div class="content" v-html="content"></div>
        <div class="btn_box">
            <div class="left_btn" @click="okClick">{{leftBtnText}}</div>
            <div class="right_btn" @click="cancel">{{rightBtnText}}</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["title", "content", "leftBtnText", "rightBtnText", "show"], // 父组件传值给子组件用props
  methods: {
    okClick() {
      // alert(11)
      this.$emit("okClick"); // 子组件给父组件传值用$emit
    },
    cancel() {
      this.$emit("cancel");
    },
    close() {
      // this.$emit('update:show',false)
      this.$emit("update:show", false);
    }
  }
};
</script>


<style lang="scss">
#pop_box {
  width: 500px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 10px #999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  .close_btn {
    width: 20px;
    height: 20px;
    border: 1px solid #333;
    border-radius: 50%;
    position: absolute;
    top: 15px;
    right: 15px;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
  }
  .title {
    width: 100%;
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: #333;
    font-size: 28px;
  }
  .content {
    padding: 20px 0;
    font-size: 20px;
    color: #333;
  }
  .btn_box {
    height: 120px;
    .left_btn,
    .right_btn {
      width: 100px;
      height: 80px;
      float: left;
      text-align: center;
      line-height: 80px;
      font-size: 26px;
      border-radius: 10px;
      cursor: pointer;
    }
    .left_btn {
      margin-right: 50px;
      border: 1px solid red;
      color: #333;
    }
    .right_btn {
      background: red;
      color: #fff;
    }
  }
}
</style>

