<template>
    <div>
        <p>vue单页面文件</p>
		<h2>{{HomeName}} {{HomeId}}</h2>
    </div>
</template>

<script>
    export default {
		data(){
			return{
				HomeName:this.$route.query.name,
				HomeId:this.$route.query.id,
			}
		},
        methods: {
        }
    }
</script>

<style>
</style>