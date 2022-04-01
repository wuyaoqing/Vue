<template>
	<el-select v-model="value11" multiple collapse-tags style="margin-left: 20px;" placeholder="请选择">
		<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
		</el-option>
	</el-select>
</template>

<script>
	export default {
		data() {
			return {
				options: [],
				value5: [],
				value11: []
			}
		},
		created(){
			this.options.push({label:'a',value:'a'})
		}
	}
</script>

<style>
	/* 选择组件设置隐藏超出组件的值 */
	.el-select__tags {
		flex-wrap: nowrap;
		overflow: hidden;
	}
</style>
