<template>
	<div>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="pullrefresh">
			<p>刷新次数: {{ count }}</p>
		</van-pull-refresh>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { PullRefresh, Toast } from 'vant';
	Vue.use(PullRefresh);
	export default {
		data() {
			return {
				count: 0,
				isLoading: false,
			};
		},
		methods: {
			onRefresh() {
				setTimeout(() => {
					Toast('刷新成功');
					this.isLoading = false;
					this.count++;
				}, 1000);
			},
		},
	};
</script>

<style>
 .pullrefresh {
    height: calc(100vh);
  }
</style>