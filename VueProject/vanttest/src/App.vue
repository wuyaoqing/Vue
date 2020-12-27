<template>
  <div id="app">
    <van-sticky>
      <van-nav-bar id="myheader" :title="title" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </van-sticky>
    <router-view />
  </div>
</template>

<script>
  import {Toast} from 'vant'
  export default{
    data(){
      return{
      }
    },
    methods:{
      onClickLeft(){
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      },
      onClickRight(){
        Toast('onClickRight')
      }
    },
    computed:{
      title(){
        return  this.$route.name;
      },
    }
  }
</script>

<style lang="scss">
  #myheader{
    &.van-nav-bar{
      background-color: #0099fd;
    }
    .van-nav-bar__text,
    .van-nav-bar__title,
    .van-icon
    {
      color: #ffffff;
    }
    .icon-sousuo {
    font-size: 20px;
  }
  }
  

</style>