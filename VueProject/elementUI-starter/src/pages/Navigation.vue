<template>
	<div>
		<div>
			<h3>Tabs</h3>
			<el-tabs v-model="activeName" type="card" closable @tab-click="handleClick" @edit="handleTabsEdit">
				<el-tab-pane name="first">
					<span slot="label"><i class="el-icon-date"></i> 用户管理</span>
					用户管理
				</el-tab-pane>
				<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
				<el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
				<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
			</el-tabs>
		</div>

		<div>
			<h3>PositionTabs</h3>
			<el-tabs v-model="activeName" tab-position="left" type="border-card" @tab-click="handleClick">
				<el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
				<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
				<el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
				<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
			</el-tabs>
		</div>

		<div>
			<h3>Dropdown </h3>
			<el-dropdown size="medium" split-button type="primary">
				请选择
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item v-for="item of dropdownData" :key="item.name">{{item.name}}</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'second',
				dropdownData: [{
						"name": "选项一"
					},
					{
						"name": "选项二"
					},
				]
			}
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab.name);
			},
			 handleTabsEdit(targetName, action) {
			        if (action === 'remove') {
			          let tabs = this.editableTabs;
			          let activeName = this.editableTabsValue;
			          if (activeName === targetName) {
			            tabs.forEach((tab, index) => {
			              if (tab.name === targetName) {
			                let nextTab = tabs[index + 1] || tabs[index - 1];
			                if (nextTab) {
			                  activeName = nextTab.name;
			                }
			              }
			            });
			          }
			          
			          this.editableTabsValue = activeName;
			          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
			        }
			      }
		}
	}
</script>

<style>
</style>
