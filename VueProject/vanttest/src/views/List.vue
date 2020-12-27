<template>
	<div>
		<van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="pullrefresh">
			<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
				<van-cell v-for="item in list" :key="item" :title="item" />
			</van-list>
		</van-pull-refresh>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [],//列表数据
				pageIndex: 1, // 当前页码
				pageSize: 10, // 分页大小
				total: 0, // 查询总条数
				loading: false, // 滚动加载中
				finished: false, // 滚动加载完成
				isLoading: false, // 下拉强制刷新
				refreshing: false
			}
		},
		methods: {
			onLoad() {
				setTimeout(() => {
					if (this.refreshing) {
						this.list = [];
						this.refreshing = false;
					}

					for (let i = 0; i < 10; i++) {
						this.list.push(this.list.length + 1);
					}
					this.loading = false;
					if (this.list.length >= 40) {
						this.finished = true;
					}
				}, 1000);
			},
			onRefresh() {
				// 清空列表数据
				this.finished = false;
				// 重新加载数据
				// 将 loading 设置为 true，表示处于加载状态
				this.loading = true;
				this.onLoad();
			},
		}
	}
</script>

<style>
	.pullrefresh {
    height: calc(100vh);
  }
</style>