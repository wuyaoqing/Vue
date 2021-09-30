<template>
  <div>
    <div style="padding:15px;">
        <x-button @click.native="ToastUse" type="primary">基本使用</x-button>
        <x-button @click.native="showPosition('top')" type="primary">Top</x-button>
        <x-button @click.native="showPosition('middle')" type="primary">Middle</x-button>
        <x-button @click.native="showSuccess" type="primary">Type=Success</x-button>
    </div>
    <toast v-model="basicUse" type="text" text="我是Toast"></toast>
    <toast v-model="showPositionValue" type="text" :time="time"  :text="text" :position="position"></toast>
    <toast v-model="showTypeSuccess" type="success" :time="time"  :text="text" :position="position"></toast>
  </div>
</template>

<script>
  import { Toast, XButton,dateFormat  } from 'vux'
  export default {
    components:{
      Toast,
      XButton
    },
    data(){
      return{
        time:800,
        text:'Hello World',
        position: 'default',
        showPositionValue:false,
        showTypeSuccess:false,
        basicUse:false
      }
    },
    methods:{
       showPosition (position) {
            this.position = position;
            this.showPositionValue = true
        },
        showSuccess() {
            this.showTypeSuccess = true
        },
        ToastUse() {
          this.basicUse = true
        }
    },
    created() {
      console.log(dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss'));
    }
  }
</script>

<style>
</style>
