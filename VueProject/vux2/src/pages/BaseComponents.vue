<template>
  <div>
    <box>
      <icon type="success"></icon>
      <br />
      <x-icon type="ios-arrow-right" size="30"></x-icon>
      <br />
      <x-button type="primary">primary</x-button>
      <x-button type="primary" :show-loading="bLoading">primary</x-button>
      <x-button plain type="primary" :disabled="bDisabled" :text="buttonText"></x-button>
      <x-button plain type="primary" style="border-radius:99px;" @click.native="clickMe">点击我</x-button>
    </box>
  </div>
</template>

<script>
  import {Box,Icon,XButton} from 'vux';

  export default {
    data(){
      return{
        bLoading:true,
        bDisabled:false,
        buttonText:'按钮文字'
      }
    },
    components:{
      Box,Icon,XButton
    },
    methods:{
      clickMe(){
        console.log('你点击了我');
      }
    }
  }
</script>

<style>
</style>
