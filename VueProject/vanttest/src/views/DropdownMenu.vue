<template>
  <div>
    
    <!-- 标题栏 改为app.vue全局设置顶部 
      <van-sticky>
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    /></van-sticky>-->
   
    
    <!-- 工具栏 -->
      <van-dropdown-menu active-color="#1989fa">
        <van-dropdown-item v-model="value1" :options="option1" @change="changeValue"/>
        <van-dropdown-item title="筛选" ref="item">
      <van-cell-group>
        <van-cell title="单元格" label-class="mgt-15" >
           <template slot="label">
             <!-- gutter：单元格间隔 slot="label"：用插槽形式自定义标题下方 label 的内容-->
              <van-row gutter="5">
                <van-col span="8">
                  <div class="noSelect">1</div>
                </van-col>
                <van-col span="8">
                  <div class="noSelect">2</div>
                </van-col>
                <van-col span="8">
                  <div class="noSelect">3</div>
                </van-col>
              </van-row>
              <van-row gutter="5">
                <van-col span="11">
                  <div class="noSelect">4</div>
                </van-col>
                <van-col span="2">
                  <div class="lh-42 tac">-</div>
                </van-col>
                <van-col span="11">
                  <div class="noSelect">5</div>
                </van-col>
              </van-row>
           </template>
        </van-cell>
        <van-cell center title="测试">
          <template #right-icon>
            <van-switch v-model="switch1" size="24" active-color="#ee0a24" />
          </template>
        </van-cell>
        <van-cell center title="测试">
          <template #right-icon>
            <van-switch v-model="switch2" size="24" active-color="#ee0a24" />
          </template>
        </van-cell>
      </van-cell-group>
      <van-row>
        <van-col span="12">
          <van-button type="default" block @click="onCancel" >取消</van-button>
        </van-col>
        <van-col span="12">
          <van-button type="info" block @click="onConfirm">确认</van-button>
        </van-col>
      </van-row>
        </van-dropdown-item>
      </van-dropdown-menu>
    

    <!-- 下拉数据 -->
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="pullrefresh">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
      </van-pull-refresh>

  </div>
</template>

<script>
import { Toast, Dialog } from "vant";
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
      refreshing: false,
      value1: 0,
      switch1: false,
      switch2: false,
      option1: [
        { text: "全部商品", value: 0 ,icon:'arrow'},
        { text: "新款商品", value: 1 ,icon:'arrow'},
        { text: "活动商品", value: 2 ,icon:'arrow'},
      ],
    };
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
    onCancel() {
      // 通过 ref 来注册组件引用信息，引用信息将会注册在父组件的$refs对象上。
      //注册完成后，我们可以通过this.$refs.xxx访问到对应的组件实例，并调用上面的实例方法
      this.$refs.item.toggle();
    },
    onConfirm() {
      this.$refs.item.toggle();
      Toast("onConfirm");
    },
    changeValue(value){
      console.log(value);
    },
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
  },
};
</script>

<style scoped>
   .noSelect {
    color: black;
    background-color: #f3f3f3;
    line-height: 42px;
    text-align: center;
    margin-top: 5px;
  }
  .lh-42{
    line-height: 42px;
  }
  .tac {
    text-align: center;
  }
  /* calc(100vh - 50px); 100% viewport高度-50px */
  .pullrefresh {
    height: calc(100vh - 95px);
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .fs-16{
    font-size: 16px;
  }
/* 穿透css改变导航栏的背景和标题颜色 scoped 加入
  https://vue-loader.vuejs.org/zh/guide/scoped-css.html
     
  ::v-deep .van-nav-bar{
    background-color: #1989fa;
  }
  ::v-deep .van-nav-bar__text{
    color: #ffffff;
  }
  ::v-deep .van-nav-bar__arrow{
    color: #ffffff;
  }
  ::v-deep .van-nav-bar__title {
    color: #ffffff;
    font-size: large;
  }
 */
</style>
