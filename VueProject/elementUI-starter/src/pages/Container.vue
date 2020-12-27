<template>
    <div class="homeBox">
		<!-- 左右布局 -->
		<el-container>
		  <el-aside width="500px">Aside</el-aside>
		  <el-main>Main</el-main>
		</el-container>
    </div>
</template>

<script>
    export default {
		data(){
			return{
			}
		},
        methods: {
        }
    }
</script>

<style>
	html,body,#app,.homeBox,.el-container {
		padding: 0px;
		margin: 0px;
		height: 100%;
	}
	.el-aside {
	  background-color: #D3DCE6;
	  color: #333;
	  text-align: center;
	  line-height: 160PX;
	}
	.el-main {
	  background-color: #E9EEF3;
	  color: #333;
	  text-align: center;
	  line-height: 160px;
	}
	.el-container {
		height: calc(100%)
	}
 
</style>