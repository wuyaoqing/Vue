<template>
	<div>
		<van-form @submit="onSubmit">
			<van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
				:rules="[{ required: true, message: '请填写用户名' }]" />
			<van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
				:rules="[{ required: true, message: '请填写密码' }]" />
			<van-field name="switch" label="开关">
				<template #input>
					<van-switch v-model="switchChecked" size="20"/>
				</template>
			</van-field>
			<van-field name="checkboxGroup" label="复选框组">
				<template #input>
					<van-row>
							<van-checkbox-group v-model="checkboxGroup" direction="horizontal">
								<van-checkbox name="1" shape="square">复选框 1</van-checkbox>
								<van-checkbox name="2" shape="square">复选框 2</van-checkbox>
							  </van-checkbox-group>
					</van-row>
					<van-row>
							<van-checkbox-group v-model="checkboxGroup" direction="horizontal">
								<van-checkbox name="3" shape="square">复选框 3</van-checkbox>
								<van-checkbox name="4" shape="square">复选框 4</van-checkbox>
							  </van-checkbox-group>
					</van-row>
				</template>
			  </van-field>

			<div style="margin: 16px;">
				<van-button block type="info" native-type="submit">
					提交
				</van-button>
			</div>
		</van-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				switchChecked: false,
				checkboxGroup:[]
			}
		},
		methods: {
			onSubmit(values) {
				console.log('submit', values);
			},
		}
	}
</script>

<style>
</style>