<template>
	<div>
		<div>
			<h3>Message </h3>
			<el-button @click="open" :plain="true">打开消息</el-button>
			<el-button :plain="true" @click="open2">成功</el-button>
			<el-button :plain="true" @click="open3">警告</el-button>
			<el-button :plain="true" @click="open1">消息</el-button>
			<el-button :plain="true" @click="open4">错误</el-button>
		</div>
		
		<div>
			<h3>MessageBox  </h3>
			<el-button @click="openMsb" :plain="true">MessageBox</el-button>
			<el-button  @click="open5">点击打开 Message Box</el-button>
		</div>
		
		<div>
			<h3>Notification   </h3>
			<el-button @click="openNTF" :plain="true">Notification</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			openNTF(){
				this.$notify({
					title:'标题',
					message:'内容'
				})
			},
			  open5() {
			        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          type: 'warning'
			        }).then(() => {
			          this.$message({
			            type: 'success',
			            message: '删除成功!'
			          });
			        }).catch(() => {
			          this.$message({
			            type: 'info',
			            message: '已取消删除'
			          });          
			        });
			      },
			openMsb(){
				this.$alert('这是一段内容', '标题名称', {
				  confirmButtonText: '确定',
				  callback: action => {
					this.$message({
					  type: 'info',
					  message: `action: ${ action }`
					});
				  }
				});
			},
			open() {
				this.$message('这是一条消息提示')
			},
			open1() {
				this.$message({
					showClose:true,
					message:'这是一条消息提示'
				});
			},
			open2() {
				this.$message({
					message: '恭喜你，这是一条成功消息',
					type: 'success'
				});
			},

			open3() {
				this.$message({
					message: '警告哦，这是一条警告消息',
					type: 'warning'
				});
			},

			open4() {
				this.$message.error('错了哦，这是一条错误消息');
			}
		}
	}
</script>

<style>
</style>
