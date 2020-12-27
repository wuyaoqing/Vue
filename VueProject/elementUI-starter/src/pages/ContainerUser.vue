<template>
	<div>
		<!-- 常用布局上 中 下 -->
		<div class="homeBox">
			<!-- 上中下左布局 -->
			<el-container>
				<el-header>
					<el-form ref="form" :model="form" label-width="90px" class="filter-container">
						<el-row>
							<!-- 输入框 -->
							<el-col :span="6">
								<el-form-item label="输入框">
									<el-input placeholder="请输入内容" size="small"></el-input>
								</el-form-item>
							</el-col>
							<!-- 下拉 -->
							<el-col :span="6">
								<el-form-item label="下拉">
									<el-select  placeholder="请选择" size="small">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<!-- 输入框 -->
							<el-col :span="6">
								<el-form-item label="输入框">
									<el-input placeholder="请输入内容" size="small"></el-input>
								</el-form-item>
							</el-col>
							<!-- 日期选择器 -->
							<el-col :span="6">
								<el-form-item label="日期选择器">
									<el-date-picker  type="date" size="small" placeholder="选择日期">
									</el-date-picker>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<!-- 输入框 -->
							<el-col :span="6">
								<el-form-item label="输入框">
									<el-input placeholder="请输入内容" size="small"></el-input>
								</el-form-item>
							</el-col>
							<!-- 下拉 -->
							<el-col :span="6">
								<el-form-item label="下拉">
									<el-select  placeholder="请选择" size="small">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<!-- 输入框 -->
							<el-col :span="6">
								<el-form-item label="输入框">
									<el-input placeholder="请输入内容" size="small"></el-input>
								</el-form-item>
							</el-col>
							<!-- 日期选择器 -->
							<el-col :span="6">
								<el-form-item label="日期选择器">
									<el-date-picker type="date" size="small" placeholder="选择日期">
									</el-date-picker>
								</el-form-item>
							</el-col>
						</el-row>
					</el-form>
					<span>
						<el-button size="medium" @click="openNTF">默认按钮</el-button>
						<el-button size="medium">默认按钮</el-button>
					</span>
				</el-header>

				<el-main>
					<el-table border :data="tableData" stripe style="width: 100%" :height="gridHeight" ref="mainGrid">
						<el-table-column type="selection" width="55">
						</el-table-column>
						<el-table-column prop="date" sortable label="日期" width="120" fixed="left">
							 <template slot-scope="scope">
							        <i class="el-icon-time"></i>
							        <span style="margin-left: 10px">{{ scope.row.date }}</span>
							      </template>
						</el-table-column>
						<el-table-column prop="name" label="姓名" width="100">
						</el-table-column>
						<el-table-column prop="name" label="姓名" width="100">
						</el-table-column>
						<el-table-column prop="name" label="姓名" width="100">
						</el-table-column>
						<el-table-column prop="name" label="姓名" width="100">
						</el-table-column>
						<el-table-column prop="address" label="地址" width="250">
						</el-table-column>
						<el-table-column prop="address" label="地址" width="250">
						</el-table-column>
						<el-table-column prop="address" label="地址" width="250">
						</el-table-column>
						<el-table-column prop="address" label="地址" width="250">
						</el-table-column>
					</el-table>
				</el-main>

				<el-footer>
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
					 :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
					</el-pagination>
				</el-footer>

			</el-container>
		</div>
	</div>
</template>

<script>
	var that;

	export default {
		data() {
			return {
				labelPosition: 'left',
				screenWidth: document.documentElement.clientWidth, //屏幕显示宽度
				screenHeight: document.documentElement.clientHeight, //屏幕显示高度
				gridHeight: Math.floor((document.documentElement.clientHeight - 200)),
				currentPage4: 4,
				formInline: {
					userId: '',
					customerName: '',
					region: '',
					userName: '',
					userCode: '',
				},
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
				form: {

				},
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}]
			}
		},
		mounted() {
			that = this;
			window.onresize = function() { // 定义窗口大小变更通知事件
				that.screenWidth = document.documentElement.clientWidth; //窗口宽度
				that.screenHeight = document.documentElement.clientHeight; //窗口高度
			};
		},
		watch: {
			'screenWidth': function(val) { //监听屏幕宽度变化
				console.log('屏幕宽度' + val);

			},
			'screenHeight': function(val) { //监听屏幕高度变化
				console.log('屏幕高度' + val);
				this.gridHeight = Math.floor((this.screenHeight - 200));
			}
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			openNTF() {
				this.$notify({
					title: '标题',
					message: '内容'
				})
			},
		}
	}
</script>

<style>
	html,
	body,
	#app,
	.homeBox,
	.el-container {
		padding: 0px;
		margin: 0px;
		height: 100%;
	}

	/* 选择组件设置隐藏超出组件的值 */
	.el-select__tags {
		flex-wrap: nowrap;
		overflow: hidden;
	}


	/* 按钮 */
	.buttonDiv {
		margin-top: 10px;
	}

	/*中间 */
	.el-main {
		/* height: calc(100% - 125px) !important; 
	    padding: 10px;*/
	}

	/* 按钮 */
	.el-button {
		margin-left: 0px;
	}

	/*顶部表单 */
	.el-header {
		padding: 20px;
		height: 120px !important;
	}

	/* 行高设置 */
	.filter-container .el-form-item {
		margin-bottom: 0px;
	}

	/* 底部分页栏 */
	.el-footer {
		height: 35px !important;
	}
</style>
