<template>
	<div>
		<el-select v-model="form" placeholder="请选择" multiple collapse-tags size="small" @focus="Focus" @change="translate"
		 :clearable="clearable">
			<el-option :value="value" disabled>
				<el-input style="margin-left: 2px;margin-right: 15px;width: 94%;" placeholder="输入关键字进行过滤" v-model="filterText"
				 clearable size="small"></el-input>
				<div>
					<el-tree :filter-node-method="filterNode" :data="childData" show-checkbox :props="defaultProps" ref="eltree"
					 :node-key="code" :default-expand-all="false" @check-change="checkchange"></el-tree>
				</div>
			</el-option>
			<div style="display:flex;justify-content:center;align-items:center;margin-top:10px;">
				<el-button @click="shousuo" size="small">收缩</el-button>
				<el-button @click="all" size="small">全选</el-button>
				<el-button @click="clear" size="small">清空</el-button>
			</div>
		</el-select>
	</div>
</template>
<script>
	/*
  childData为传入的数组
  name为下拉框上面多选的栏目的名字
  code为栏目名字中的编码
  chidldName为传入的子节点的名称
  clearable 是否在选择框中显示全部删除按钮
  treedata:
  [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1'
          }]
  }]
  比如：上面的数据，
  使用组件时绑定字段名称如下
  code: 'id',//树形节点的编码名称
  name: 'label',//树形节点的名称
  childrenName: "children",//子节点的名称
  treeHeight: "150px" //树形下拉高度
  chooseparent:是否选择父节点返回值
 */
	var that;
	export default {
		props: {
			childData: Array,
			name: String,
			code: String,
			childrenName: String,
			clearable: {
				type: Boolean,
				default: false
			},
			chooseparent: { //默认等于false，只是获取叶子节点值
				type: Boolean,
				default: false
			},
			treeHeight: { //树形下拉的高度
				type: String,
				default: '150px'
			},
			selectFocus: Function //选择框获取焦点事件
		},
		data() {
			return {
				value: "", //默认值
				defaultProps: {
					children: this.childrenName,
					label: this.name
				},
				form: [],
				codeForm: [],
				isAll: false,
				x: true,
				list: [],
				filterText: ''
			};
		},
		watch: {
			filterText(val) {
				this.$refs.eltree.filter(val);
			}
		},
		created() {
			that = this;

		},
		methods: {
			shousuo() {
				for (var i = 0; i < this.$refs.eltree.store._getAllNodes().length; i++) {
					this.$refs.eltree.store._getAllNodes()[i].expanded = false;
				}
			},
			//下拉框获取焦点
			Focus() {
				if (typeof(this.selectFocus) === 'function') {
					this.selectFocus();
				}
			},
			filterNode(value, data) {
				if (!value) return true;
				return data[this.name].indexOf(value) !== -1;
			},
			//树形节点选择
			checkchange(obj, bChecked, bChildChecked) {
				this.sure();
			},
			//确定，并返回一个数组，里面是前面传入的遍历的code
			sure() {
				let list = this.$refs.eltree.getCheckedNodes();
				this.form = [];
				this.codeForm = [];
				for (let a in list) {
					//是否选择父节点
					var nodeObj = eval("list[a]");
					this.form.push(nodeObj[this.name]);
					//是否选择父节点
					if (!this.chooseparent && nodeObj.children) {
						continue;
					}
					this.codeForm.push(nodeObj[this.code]);
				}
				//触发父组件的data方法，将选择的数据赋值
				this.$emit('data', this.codeForm)
				this.x = true;
			},
			//清空
			clear() {
				this.form = [];
				this.filterText = '';
				this.$refs.eltree.setCheckedKeys([]);
			},
			//全选
			all() {
				if (this.isAll == false) {
					this.$refs.eltree.setCheckedNodes(this.childData);
					this.isAll = true
				} else {
					this.$refs.eltree.setCheckedKeys([]);
					this.isAll = false
				}
			},
			//下拉框选择到的数据进行删除后，树前面的勾选取消操作
			translate(val) {
				let list2 = [];
				if (this.x == true) {
					this.list = this.$refs.eltree.getCheckedNodes();
					for (let i = 1; i < this.list.length; i++) {
						list2.push(this.list[i])
					}
					this.list = list2
					this.x = false;
				} else {
					for (let i = 1; i < this.list.length; i++) {
						list2.push(this.list[i])
					}
					this.list = list2

				}
				this.$refs.eltree.setCheckedNodes(list2);
				this.codeForm = []
				for (let a in list2) {
					this.codeForm.push(eval("list2[a]" + '.' + this.code));
				}
				this.$emit('data', this.codeForm)
			}
		}
	};
</script>

<style scoped>
	.el-scrollbar .el-scrollbar__view .el-select-dropdown__item {
		height: auto;
		max-height: 274px;
		padding: 0;
		overflow: hidden;
		overflow-y: auto;
	}

	.el-select-dropdown__item.selected {
		font-weight: normal;
	}

	ul li>>>.el-tree .el-tree-node__content {
		height: auto;
		padding: 0 20px;
	}

	.el-tree-node__label {
		font-weight: normal;
	}

	.el-tree>>>.is-current .el-tree-node__label {
		color: #409EFF;
		font-weight: 700;
	}

	.el-tree>>>.is-current .el-tree-node__children .el-tree-node__label {
		color: #606266;
		font-weight: normal;
	}
</style>
