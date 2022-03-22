<template>
	<div>
		<div>
			<h3>radio</h3>
			<div>
				<el-radio v-model="radio" label="1">备选项1</el-radio>
				<el-radio v-model="radio" label="2">备选项2</el-radio>
			</div>
			<div>
				<el-radio :disabled="btnDisabled" v-model="radio" label="1">备选项1</el-radio>
				<el-radio v-model="radio" label="2">备选项2</el-radio>
			</div>
			<hr />
			<div>
				<el-radio-group v-model="radiogroup" @change="radioChange">
					<el-radio :label="3">选项1</el-radio>
					<el-radio :label="6">选项2</el-radio>
					<el-radio :label="9">选项3</el-radio>
				</el-radio-group>
			</div>
			<hr />
			<div>
				<el-radio-group v-model="radio1" size="small">
					<el-radio-button label="上海"></el-radio-button>
					<el-radio-button label="北京"></el-radio-button>
					<el-radio-button label="广州"></el-radio-button>
					<el-radio-button label="深圳"></el-radio-button>
				</el-radio-group>
			</div>
			<div style="margin-top: 20px">
				<el-radio-group v-model="radio" size="small">
					<el-radio label="1" border>备选项1</el-radio>
					<el-radio label="2" border >备选项2</el-radio>
				</el-radio-group>
			</div>
		</div>

		<div>
			<h3>Checkbox </h3>
			<el-checkbox v-model="checked1">备选项1</el-checkbox>
			<el-checkbox v-model="checked2">备选项2</el-checkbox>
			<br />
			<el-checkbox-group v-model="checkList">
				<el-checkbox label="A">复选框A</el-checkbox>
				<el-checkbox label="B">复选框B</el-checkbox>
				<el-checkbox label="C">复选框C</el-checkbox>
			</el-checkbox-group>
		</div>

		<div>
			<h3>Input </h3>
			<div>
				<el-row :gutter="20">
					<el-col :span="4">
						<el-input v-model="input1" placeholder="请输入" size="small"></el-input>
					</el-col>
					<el-col :span="4">
						<el-input v-model="input2" clearable placeholder="请输入"></el-input>
					</el-col>
					<el-col :span="4">
						<el-input v-model="input3" clearable show-password placeholder="请输入密码"></el-input>
					</el-col>
					<el-col :span="4">
						<el-input v-model="input4" clearable suffix-icon="el-icon-date" placeholder="带icon的输入框">
						</el-input>
					</el-col>
					<el-col :span="4">
						<el-input v-model="input5" clearable prefix-icon="el-icon-search" placeholder="带icon的输入框">
						</el-input>
					</el-col>
					<el-col :span="4">
						<el-input type="textarea" autosize placeholder="请输入" v-model="textarea1"></el-input>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="6">
						<el-input placeholder="请输入内容" v-model="input6" clearable="" class="input-with-select">
							<el-select v-model="select" slot="prepend" placeholder="请选择">
								<el-option label="餐厅名" value="1"></el-option>
								<el-option label="订单号" value="2"></el-option>
								<el-option label="用户电话" value="3"></el-option>
							</el-select>
							<el-button slot="append" icon="el-icon-search"></el-button>
						</el-input>
					</el-col>
					<el-col :span="6">
						<el-autocomplete v-model="state2" :fetch-suggestions="querySearch" placeholder="输入后匹配输入建议"
							:trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
					</el-col>
				</el-row>
			</div>
		</div>

		<div>
			<h3>Select </h3>
			<el-row>
				<el-col :span="8">
					<el-select v-model="value" clearable placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-col>
				<el-col :span="8">
					<el-select v-model="value2" multiple placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-col>
			</el-row>
		</div>

		<div>
			<h3>Switch </h3>
			<el-switch :max="10" :step="2" v-model="switchValue" active-color="#13ce66" inactive-color="#ff4949">
			</el-switch>
		</div>


		<div>
			<h3>Slider </h3>
			<el-slider v-model="SliderValue"></el-slider>
		</div>

		<div>
			<h3>TimePicker </h3>
			<el-time-select v-model="TimePicker" :picker-options="{
			    start: '08:30',
			    step: '00:15',
			    end: '18:30'
			  }" placeholder="选择时间">
			</el-time-select>
		</div>

		<div>
			<h3>DatePicker </h3>
			<el-date-picker v-model="beginDate" type="date" placeholder="选择开始日期" format="yyyy 年 MM 月 dd 日"
				value-format="yyyy-MM-dd"></el-date-picker>

			<el-date-picker v-model="endDate" type="date" placeholder="选择结束日期" :picker-options="pickerOptions"
				format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
		</div>

		<div>
			<h3>Transfer </h3>
			<el-transfer v-model="TransferDefaultData" :data="TransferData"></el-transfer>
		</div>

		<div style="width: 500px;">
			<h3>Form </h3>
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="活动名称">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="活动区域">
					<el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="活动时间">
					<el-col :span="11">
						<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;">
						</el-date-picker>
					</el-col>
					<el-col class="line" :span="2">-</el-col>
					<el-col :span="11">
						<el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
					</el-col>
				</el-form-item>
				<el-form-item label="即时配送">
					<el-switch v-model="form.delivery"></el-switch>
				</el-form-item>
				<el-form-item label="活动性质">
					<el-checkbox-group v-model="form.type">
						<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
						<el-checkbox label="地推活动" name="type"></el-checkbox>
						<el-checkbox label="线下主题活动" name="type"></el-checkbox>
						<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
					</el-checkbox-group>
				</el-form-item>
				<el-form-item label="特殊资源">
					<el-radio-group v-model="form.resource">
						<el-radio label="线上品牌商赞助"></el-radio>
						<el-radio label="线下场地免费"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="活动形式">
					<el-input type="textarea" v-model="form.desc"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">立即创建</el-button>
					<el-button>取消</el-button>
				</el-form-item>
			</el-form>
		</div>

		<el-progress :percentage="0"></el-progress>
		<el-progress :percentage="70"></el-progress>
		<el-progress :percentage="100" status="success"></el-progress>
		<el-progress :percentage="50" status="exception"></el-progress>

	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			const generateData = _ => {
				const data = [];
				for (let i = 1; i <= 15; i++) {
					data.push({
						key: i,
						label: `备选项 ${ i }`,
						disabled: i % 4 === 0
					});
				}
				return data;
			};
			return {
				restaurants: [],
				btnDisabled: true,
				state1: '',
				state2: '',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				TransferData: generateData(),
				TransferDefaultData: [1, 4],
				beginDate: '',
				endDate: '',
				//合同结束时间需>=开始时间
				pickerOptions: {
					disabledDate(time) {
						var beginDate = new Date(this.beginDate);
						var disabledDate = beginDate.setDate((beginDate.getDate() - 1));
						return time.getTime() < disabledDate;
					}
				},
				TimePicker: '',
				radio: '1',
				radiogroup: 6,
				radio1: '广州',
				checked1: true,
				checked2: false,
				checkList: ['A', 'B'],
				input1: '',
				textarea1: '',
				input2: '',
				input3: '',
				input4: '',
				input5: '',
				input6: '',
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}],
				value: '',
				value2: [],
				switchValue: true,
				SliderValue: 0,
				select: ''
			}
		},
		methods: {
			//按钮组radioChange事件
			radioChange(value) {
				console.log(value)
			},
			onSubmit() {
				console.log(JSON.stringify(this.form));
				var me = this;
				var axiosConfig = {
					method: 'POST',
					baseURL: 'http://127.0.0.1:53261',
					url: '/api/Default/subMitActivity',
					data: this.form
				};
				axios(axiosConfig)
					.then(function(response) {
				 	console.log(response.data);
					})
					.catch(function(error) {
						console.log(error);
					});

			},
			handleSelect(item) {
				console.log(item);
			},
			loadAll() {
				return [{
						"value": "三全鲜食（北新泾店）",
						"address": "长宁区新渔路144号"
					},
					{
						"value": "Hot honey 首尔炸鸡（仙霞路）",
						"address": "上海市长宁区淞虹路661号"
					},
				];
			},
			querySearch(queryString, cb) {
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
				// 调用 callback 返回建议列表的数据
				cb(results);
			},
			createFilter(queryString) {
				return (restaurant) => {
					return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
		},
		mounted() {
			this.restaurants = this.loadAll();
		}
	}
</script>

<style>
	.el-select .el-input {
		width: 130px;
	}

	.input-with-select .el-input-group__prepend {
		background-color: #fff;
	}
</style>
