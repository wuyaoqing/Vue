<template>
    <div>
		<el-row>
		  <el-button @click="clickMe">默认按钮</el-button>
		  <el-button type="primary">主要按钮</el-button>
		  <el-button type="success">成功按钮</el-button>
		  <el-button type="info">信息按钮</el-button>
		  <el-button type="warning">警告按钮</el-button>
		  <el-button type="danger">危险按钮</el-button>
		  <el-badge :value="12" class="item">
		        <el-button size="small">评论</el-button>
		  </el-badge>
		</el-row>
		 
		<div>
		  <el-button disabled>  禁用按钮</el-button>
		  <el-button type="text">文字按钮</el-button>
		  <el-button type="primary">图标按钮<i class="el-icon-upload el-icon--right"></i></el-button>
		</div>
		按钮组
		<el-button-group>
		  <el-button type="primary" icon="el-icon-edit"></el-button>
		  <el-button type="primary" icon="el-icon-share"></el-button>
		  <el-button type="primary" icon="el-icon-delete"></el-button>
		</el-button-group>
		
		<el-button type="primary" :loading="true">加载中</el-button>
		不同大小
		<el-button size="medium" class="fa fa-camera-retro">中型按钮</el-button>
		<el-button size="small">中型按钮</el-button>
		<el-button size="mini">中型按钮</el-button>
		
    </div>
</template>

<script>
	import 'font-awesome/css/font-awesome.css'
	
    export default {
		data(){
			return{
			}
		},
        methods: {
			clickMe(){
				console.warn('111')
			}
        }
    }
</script>

<style>
</style>