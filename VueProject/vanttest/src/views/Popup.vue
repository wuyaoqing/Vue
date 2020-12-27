<template>
	<div>
		<!-- 第一行 -->
		<van-row gutter="2">
			<van-col span="8">
				<van-button type="primary" icon="plus" @click="popup">基础弹出</van-button>
			</van-col>
			<van-col span="8">
				<van-button type="info"  plain @click="popupFromTop">顶部弹出</van-button>
			</van-col>
			<van-col span="8">
				<van-button round  type="default" @click="popupFromBottom">底部弹出</van-button>
			</van-col>
		</van-row>
		<!-- 弹出层 -->
		<van-popup v-model="showBasic" :style="{padding:'30px 50px'}">内容</van-popup>
		<van-popup v-model="showtop" position="top" :style="{height:'30%'}">内容</van-popup>
		<van-popup v-model="showbottom" closeable close-icon-position="top-right"
		 position="bottom" :style="{height:'30%'}">
		 <div><van-button type="primary" icon="plus" @click="popup">基础弹出</van-button></div>
		</van-popup>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showBasic:false,
				showtop:false,
				showbottom:false
			}
		},
		methods: {
			popup(){
				this.showBasic = true
			},
			popupFromTop(){
				this.showtop = true
			},
			popupFromBottom(){
				this.showbottom = true
			},
		}
	}
</script>

<style>
</style>