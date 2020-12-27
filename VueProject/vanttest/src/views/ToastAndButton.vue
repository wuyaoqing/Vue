<template>
	<div>
		<!-- 第一行 -->
		<van-row gutter="2">
			<van-col span="8">
				<van-button type="primary" icon="plus" @click="clickMe">文字提示</van-button>
			</van-col>
			<van-col span="8">
				<van-button type="info" icon="https://img.yzcdn.cn/vant/user-active.png" plain @click="loading">加载提示</van-button>
			</van-col>
			<van-col span="8">
				<van-button round  type="default" @click="successToast">成功提示</van-button>
			</van-col>
		</van-row>
		<!-- 第二行 -->
		<van-row gutter="5" class="mgt">
			<van-col span="6">
				<van-button type="info" block @click="activeToast">动态提示</van-button>
			</van-col>
			<van-col span="6">
				<van-button type="default" block>按钮</van-button>
			</van-col>
			<van-col span="6">
				<van-button type="warning" block>按钮</van-button>
			</van-col>
			<van-col span="6">
				<van-button type="danger" block>按钮</van-button>
			</van-col>
		</van-row>
	</div>
</template>

<script>
	//当前是全局加载vant,只能this.$toast('提示文案');这样获取Toast实例
	//可以导入Toast模块，Toast默认是单例模式
	import {Toast} from 'vant'

	export default {
		data() {
			return {

			}
		},
		methods: {
			clickMe(){
				Toast("文字提示");
			},
			loading(){
				Toast.loading({
					message:'加载中...',
					forbidClick:true
				})
			},
			successToast(){
				Toast.success("成功提示")
			},
			activeToast(){
				const toast = Toast.loading({
					duration:0,//展示时长(ms)，值为 0 时，toast 不会消失
					forbidClick:true,//是否禁止背景点击
					message:'倒计时3秒'//文本内容，支持通过\n换行
				});
				let second = 3;
				const timer = setInterval(()=>{
					second--;
					if(second){
						toast.message = '倒计时'+second+'秒';
					}else{
						clearInterval(timer);
						Toast.clear();
					}
				},1000)
			}
		}
	}
</script>

<style>
	.mgt{
		margin-top: 5px;
	}
</style>