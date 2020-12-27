<template>
	<div>
		<div>
			<h3>Dialog</h3>
			<el-button @click="dialogVisible = true">点击打开 Dialog</el-button>
			<el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
				<span>这是一段信息</span>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogVisible = false">取 消</el-button>
					<el-button type="primary" @click="handleConfirm">确 定</el-button>
				</span>
			</el-dialog>
			<!-- 打开嵌套表单的 Dialog -->
			<el-button   @click="dialogFormVisible  = true">打开嵌套表单的 Dialog</el-button>
			<el-dialog  :visible.sync="dialogFormVisible" >
				<el-tabs :tab-position="tabPosition">
				    <el-tab-pane label="基本信息">
						<el-divider content-position="left">基本信息</el-divider>
						<el-form :model="form">
							<el-row>
								<el-col :span="12">
									<el-form-item label="用户账号" :label-width="formLabelWidth">
									  <el-input v-model="form.userName" autocomplete="off" size="medium"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="12">
									<el-form-item label="员工编码" :label-width="formLabelWidth">
									     <el-input v-model="form.staffCode" autocomplete="off" size="medium"></el-input>
									</el-form-item>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="12">
									<el-form-item label="用户名称" :label-width="formLabelWidth">
									  <el-input v-model="form.realName" autocomplete="off" size="medium"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="12">
									<el-form-item label="人员状态" :label-width="formLabelWidth">
										<el-select placeholder="请选择" v-model="form.state">
											<el-option value="在职">在职</el-option>
											<el-option value="离职">离职</el-option>
										</el-select>
									</el-form-item>
								</el-col>
							</el-row>
						</el-form>
					</el-tab-pane>
				    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
				  </el-tabs>
			  
			  <div slot="footer" class="dialog-footer">
			    <el-button @click="dialogFormVisible = false">取 消</el-button>
			    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
			  </div>
			</el-dialog>
			
		</div>
		
		<div>
			<h3>Tooltip </h3>
			<el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
			      <el-button>上左</el-button>
			    </el-tooltip>
		</div>
		
		<div>
			<h3>Timeline  </h3>
			 <el-divider content-position="left">我是分割线</el-divider>
			 <div class="block">
			   <el-timeline>
			     <el-timeline-item timestamp="2018/4/1" placement="top">
			       <el-card>
			         <h4>提交单据审批流程</h4>
			         <p>雷军 提交于 2018/4/1 20:46</p>
			       </el-card>
			     </el-timeline-item>
			     <el-timeline-item timestamp="2018/4/2" placement="top">
			       <el-card>
			         <h4>刘强东审批通过</h4>
			         <p>刘强东 审批于 2018/4/2 20:46</p>
			       </el-card>
			     </el-timeline-item>
			     <el-timeline-item timestamp="2018/4/3" placement="top" color="#0bbd87">
			       <el-card>
			         <h4>马云审批中</h4>
			         <p>马云 正在审批此单据</p>
			       </el-card>
			     </el-timeline-item>
			   </el-timeline>
			 </div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dialogVisible: false,
				dialogFormVisible: false,
				        form: {
				          userName: 'qing',
						  staffCode: '',
						  realName: '',
				          region: '',
				          date1: '',
				          date2: '',
						  state:'',
				          delivery: false,
				          type: [],
				          resource: '',
				          desc: ''
				        },
				        formLabelWidth: '120px',
						tabPosition:'left'
			}
		},
		methods: {
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						console.log('关闭');
					})
					.catch(_ => {});
			},
			handleConfirm(){
				console.log('确 定');
				this.dialogVisible = false;
			}
		}
	}
</script>

<style>
	  .item {
	      margin: 4px;
	    }
</style>
