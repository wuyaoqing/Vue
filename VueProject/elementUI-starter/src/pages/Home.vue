<!-- .vue 单页面文件，三个节点： template script style -->

<template>
  <div id="app">
    <img src="../assets/logo.png">
    <div>
      <el-button @click="startHacking">Start</el-button>
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text:'Hello Vue2.5.16'
    }
  },
  methods: {
    startHacking () {
      //时间格式化
      var date = new Date();
      console.log(date.format('yyyy-MM-dd HH:mm:ss.f'));

      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    } 
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
