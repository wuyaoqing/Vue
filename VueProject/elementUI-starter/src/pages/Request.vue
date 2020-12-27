<template>
	<div>
		<el-button @click="Get" type="primary">请求get</el-button>
		<el-button @click="GetWithPara" type="success">Get带参数</el-button>
		<el-button @click="GetWithPara2" type="success">Get带参数2</el-button>
	</div>
</template>

<script>
	import axios from 'axios'
	import { TestConnect,TestConnect2 ,TestConnect3} from '@/api/default.js'
	import request from '@/api/request.js'
	
	export default {
		data(){
			return{
			}
		},
	    methods: {
			Get(){
				TestConnect().then(res=>{
					console.log(res);
					this.$message({
					  message: res.Msg ,
					  type: 'success',
					  duration: 5 * 1000
					})
				})
			},
			GetWithPara(){
				TestConnect2({age:20,name:'qing'})
				.then(res=>{
					console.log(res);
				})
			},
			GetWithPara2(){
				request.get('http://127.0.0.1:53261/api/Default/TestConnect2',{params:{age:20,name:'qing'}})
				 	.then(res=>{
				 		console.log(res);
				 	})
				 }
	    }
	}
</script>

<style>
</style>
