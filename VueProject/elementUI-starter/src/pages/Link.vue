<template>
    <div>
		<el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
		<el-link type="primary">主要链接</el-link>
		  <el-link type="success">成功链接</el-link>
		  <el-link type="warning" icon="el-icon-edit">警告链接</el-link>
		  <el-link type="danger" disabled>危险链接</el-link>
		  <el-link type="info" :underline="false">信息链接</el-link>
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
</style>