<template>
    <div>
		span=24
		<el-row>
		  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
		</el-row>
		span=12 - 12
		<el-row>
		  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
		span=8 - 8 - 8
		<el-row>
		  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
		  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
		</el-row>
		span=6 - 6 - 6 - 6
		<el-row>
		  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
		span=4-4-4-4-4-4
		<el-row>
		  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
		span=6 - 6 - 6 - 6，gutter(分栏间隔)=20
		<el-row :gutter="20">
		  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		</el-row>
		分栏偏移offset="6"
		<el-row :gutter="20">
		  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
		</el-row>
		 响应式布局
		 <el-row :gutter="10">
		   <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
		   <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
		   <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
		   <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
		 </el-row>
    </div>
</template>

<script>
    export default {
		data(){
			return{
			}
		},
        methods:{
        },
		mounted(){
			
		}
    }
</script>

<style>
   .el-row {
       margin-bottom: 20px;
       &:last-child {
         margin-bottom: 0;
       }
     }
     .el-col {
       border-radius: 4px;
     }
     .bg-purple-dark {
       background: #99a9bf;
     }
     .bg-purple {
       background: #d3dce6;
     }
     .bg-purple-light {
       background: #e5e9f2;
     }
     .grid-content {
       border-radius: 4px;
       min-height: 36px;
     }
     .row-bg {
       padding: 10px 0;
       background-color: #f9fafc;
     }
</style>