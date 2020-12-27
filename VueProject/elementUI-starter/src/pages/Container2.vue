<template>
    <div class="homeBox">
		<!-- 上中下左布局 -->
		<el-container>
		  <el-header>Header</el-header>
		  <el-container>
		    <el-aside width="200px">Aside</el-aside>
		    <el-container>
		      <el-main>Main</el-main>
		      <el-footer>Footer</el-footer>
		    </el-container>
		  </el-container>
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
	
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  } 
 
</style>