<template>
  <div>
    <x-button type="primary" @click.native="alertShow">Alert</x-button>
    <alert v-model="show" :title="alertTitle">{{alertContent}}</alert>
    <br />
    <x-button type="primary" @click.native="alertShow2">Alert(插件形式)</x-button>
    <br />
    <x-button type="primary" @click.native="confirm">Confirm</x-button>
    <br />
    <x-button @click.native="showLoading" type="primary">显示loading (2s后关闭)</x-button>
    <br />
    <x-button @click.native="showLoading" type="primary">显示loading (2s后关闭)</x-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {XButton,Alert,AlertPlugin,ConfirmPlugin,LoadingPlugin,XDialog  } from 'vux';
  Vue.use(AlertPlugin).use(ConfirmPlugin).use(LoadingPlugin);

  export default{

    components:{
      XButton,Alert,XDialog
    },
    data(){
      return{
        show:false,
        alertTitle:'标题',
        alertContent:'消息已成功发送'
      }
    },
    methods:{
      showLoading(){
        this.$vux.loading.show({
          text:'正在拼命加载...'
        });
        setTimeout(()=>{
          this.$vux.loading.hide();
        },2000);
      },
      alertShow(){
        this.show = true;
      },
      confirm(){
        // 显示
        const _this = this // 需要注意 onCancel 和 onConfirm 的 this 指向
        this.$vux.confirm.show({
          title:'标题',
          content:'内容',
          onCancel () {
            //console.log(this) // 非当前 vm，是当前的confirm对象
            //console.log(_this) // 当前 vm
            console.log('onCancel');
          },
          onConfirm () {
            console.log('onConfirm');
          }
        })
      },
      alertShow2(){
//插件的形式感觉好点
        this.$vux.alert.show({
          title:'标题',
          content:'内容',
           onShow () {
              console.log('Plugin: I\'m showing')
            },
            onHide () {
              console.log('Plugin: I\'m hiding')
            }
        })
      }
    }
  }
</script>

<style>
</style>
