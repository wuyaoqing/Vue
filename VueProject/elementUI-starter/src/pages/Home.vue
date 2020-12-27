<!-- .vue 单页面文件，三个节点： template script style -->

<template>
  <div id="app">
    <img src="../assets/logo.png">
    <div>
      <el-button @click="startHacking">Start</el-button>
	  <el-button @click="redirect">跳转到页面</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    },
	redirect(){
		this.$router.push({
			path:'/Template',
			query:{
				name:'张三',
				id:1
			}
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
