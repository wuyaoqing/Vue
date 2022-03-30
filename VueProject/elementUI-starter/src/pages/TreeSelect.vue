<template>
	<div>
		<el-button @click="GetSelect">获取选中</el-button>
		<selectTree :childData="optionData" :name="name" :code="code" :childrenName="childrenName" @data="getData"
		 :chooseparent="true">
		</selectTree>
	</div>
</template>
<script>
	//组件从main.js注入为全局组件
	//import selectTree from "@/components/SelectTree.vue";
	//指向当前vue实例
	var that;
	export default {
		// components: {
		// 	selectTree
		// },
		data() {
			return {
				selectNodeData: [], //选中的树形节点
				code: 'id', //树形节点的编码名称
				name: 'name', //树形节点的名称
				childrenName: "children", //子节点的名称
				list:[	//模拟服务器返回的数据
				  {id:1,parentId:0,name:"一级菜单A选中的树形节点",rank:1},
				  {id:2,parentId:0,name:"一级菜单B",rank:1},
				  {id:3,parentId:0,name:"一级菜单C",rank:1},
				  {id:4,parentId:1,name:"二级菜单A-A",rank:2},
				  {id:5,parentId:1,name:"二级菜单A-B",rank:2},
				  {id:6,parentId:2,name:"二级菜单B-A",rank:2},
				  {id:7,parentId:4,name:"三级菜单A-A-A",rank:3}
				]
			};
		},
		computed:{
		  optionData(){
			return this.tranTreeData('id','parentId');
		  }
		},
		created() {
			that = this;
		},
		methods: {
			getData(val) {//将选中的节点赋值到此变量
				that.selectNodeData = val  
			},
			GetSelect() { //获取选中
				console.warn(that.selectNodeData)
			},
			tranTreeData(childName,parentName){//模拟将服务器数据转tree数据
				let cloneData = JSON.parse(JSON.stringify(this.list))      // 对源数据深度克隆
				return  cloneData.filter(father=>{                      // 循环所有项，并添加children属性
				    let branchArr = cloneData.filter(child=>father[childName] == child[parentName]);       // 返回每一项的子级数组
				    branchArr.length>0 ? father.children=branchArr : ''   //给父级添加一个children属性，并赋值
				    return father[parentName]==0;      //返回第一层
				});
			}
		}
	};

</script>
<style>
	/* 选择组件设置隐藏超出组件的值 */
	  .el-select__tags {
	  flex-wrap: nowrap;
	  overflow: hidden;
	}
	
</style>
