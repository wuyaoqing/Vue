<template>
	<div>
		<van-row>
			<van-image width="100" height="100" :src="image" />
		</van-row>
		<van-image
		round
		width="10rem"
		height="10rem"
		src="https://img.yzcdn.cn/vant/cat.jpeg"
		/>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				image: 'https://img.yzcdn.cn/vant/cat.jpeg',
			}
		},
		methods: {

		}
	}
</script>

<style>
</style>