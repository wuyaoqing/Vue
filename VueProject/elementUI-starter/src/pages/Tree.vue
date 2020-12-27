<template>
	<div>
		<div>
			<h3>basic tree</h3>
			<el-button @click="setCheckedKeys">通过 key 设置</el-button>
			<el-tree ref="tree" :data="data" show-checkbox :props="defaultProps" @node-click="handleNodeClick" node-key="id"></el-tree>
		</div>

		<div>
			<h3>lazy tree</h3>
			<el-tree :props="props" :load="loadNode" lazy show-checkbox>
			</el-tree>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				props: {
					label: 'name',
					children: 'zones',
					isLeaf: 'leaf'
				},
				data: [{
					label: '一级 1',
					id: '1',
					children: [{
						id: '1-1',
						label: '二级 1-1',
						children: [{
							id: '1-1-1',
							label: '三级 1-1-1'
						},{
							id: '1-1-2',
							label: '三级 1-1-2'
						}]
					}]
				}],
				defaultProps: { //设置树
					children: 'children',
					label: 'label'
				}
			}
		},
		methods: {
			handleNodeClick(data) {
				console.log(data);
			},
			loadNode(node, resolve) {
				//先加载父节点
				if (node.level === 0) {
					return resolve([{
						name: 'region'
					}]);
				}
				// if (node.level > 1) return resolve([]);
				//再加载子节点
				setTimeout(() => {
					const data = [{
						name: 'leaf',
						leaf: true
					}, {
						name: 'zone',
						leaf: true
					}];

					resolve(data);
				}, 500);
			},
			setCheckedKeys() {
				this.$refs.tree.setCheckedKeys(['1-1-2']);
			},
		}
	}
</script>

<style>
</style>
