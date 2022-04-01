<template>
	<div>
		<div>
			<h3>Table</h3>
			<el-dialog :visible.sync="dialogFormVisible">
				<el-form :model="form">
					<el-row>
						<el-col :span="12">
							<el-form-item label="日期" :label-width="formLabelWidth">
								<el-date-picker v-model="form.date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="姓名" :label-width="formLabelWidth">
								<el-input v-model="form.name" autocomplete="off" size="medium"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="12">
							<el-form-item label="住址" :label-width="formLabelWidth">
								<el-input v-model="form.address" autocomplete="off" size="medium"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="数值" :label-width="formLabelWidth">
								<el-input v-model="form.num" autocomplete="off" size="medium"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>

				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="saveUser">保 存</el-button>
				</div>
			</el-dialog>

			<!-- 
				stripe：行变色，border：表格线 ，show-summary：显示合计行
			 -->
			<el-table :data="tableData" style="width: 100%;" stripe border show-summary>
				<el-table-column type="selection" width="55" label="选择"></el-table-column>
				<el-table-column label="序号" type="index" show-overflow-tooltip width="50" ></el-table-column>
				<el-table-column label="日期" width="180" >
					<!-- 插槽处理行的date -->
					 <template slot-scope="scope">
						<i class="el-icon-time"></i>
						<span style="margin-left: 10px">{{ scope.row.date }}</span>
					</template>
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="180"></el-table-column>
				<el-table-column prop="address" label="住址" width="180"></el-table-column>
				<el-table-column label="数值" width="180">
					<!-- 利用插槽改变当前输入 -->
					<template slot-scope="scope">
						<el-input v-model="scope.row.num" placeholder="请输入" size="normal" @change="numchange(scope.row.num)"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="操作">
					<!-- 利用插槽展示列头 -->
					<template slot="header">
						<el-input v-model="search" placeholder="输入搜索" size="mini" clearable></el-input>
					</template>
					<!-- 利用插槽更改列数据 Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据 -->
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
			 :page-sizes="[1, 2, 3, 4]" :page-size="2" background layout="total, sizes, prev, pager, next, jumper" :total="4">
			</el-pagination>
		</div>

		<div>
			<h3>TreeTable</h3>
			<el-table :data="TreeTableData" style="width: 100%;margin-bottom: 20px;" row-key="id" border default-expand-all
			 :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
				<el-table-column prop="date" label="日期" sortable width="180">
				</el-table-column>
				<el-table-column prop="name" label="姓名" sortable width="180">
				</el-table-column>
				<el-table-column prop="address" label="地址">
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {},
				index: 1,
				dialogFormVisible: false,
				formLabelWidth: '120px',
				currentPage4: 1,
				search:'',
				TreeTableData: [{
					id: 1,
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					id: 2,
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					id: 3,
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					children: [{
						id: 31,
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1519 弄'
					}, {
						id: 32,
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1519 弄'
					}]
				}, {
					id: 4,
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
				tableData: [{
					id: 1,
					date: '2016-05-01',
					name: '马云',
					address: '上海市普陀区金沙江路 1518 弄',
					num: 10.5
				}, {
					id: 2,
					date: '2016-05-02',
					name: '刘强东',
					address: '上海市普陀区金沙江路 1517 弄',
					num: 10.6
				}, {
					id: 3,
					date: '2016-05-03',
					name: '马化腾',
					address: '上海市普陀区金沙江路 1519 弄',
					num: 10.7
				}, {
					id: 4,
					date: '2016-05-04',
					name: '雷军',
					address: '上海市普陀区金沙江路 1516 弄',
					num: 10.8
				}]
			}
		},
		methods: {
			numchange(numdata){
				console.log(numdata);
			},
			handleEdit(index, row) {
				this.form = row;//将当前form对象指向当前行对象
				this.dialogFormVisible = true;
			},
			handleDelete(index, row) {
				this.tableData.splice(index,1)//删除当前行
			},
			saveUser() {
				this.tableData.forEach((value)=>{
					if(value.id===this.form.id){
						value.date = this.form.date;
						value.name = this.form.name;
						value.address = this.form.address;
						value.num = this.form.num;
					}
				})
				this.dialogFormVisible = false;
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			} 
		}
	}
</script>

<style>
</style>
