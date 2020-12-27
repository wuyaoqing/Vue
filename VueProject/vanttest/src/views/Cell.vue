<template>
	<div>
		<van-cell-group>
			<van-cell v-for="item in cellData" is-link :key="item.id" 
			:title="item.title" :value="item.value" :label="item.label"
			:to="item.route"
			></van-cell>
		</van-cell-group>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				cellData:[
					{id:1,title:'标题1',value:'内容1',label:'描述信息1',route:'/Template'},
					{id:2,title:'标题2',value:'内容2',label:'描述信息2',route:'/Template'}
				],
				show:false
			}
		},
		methods: {
		}
	}
</script>

<style>
</style>
