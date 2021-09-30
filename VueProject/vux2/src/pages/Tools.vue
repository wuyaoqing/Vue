<template>
  <div>
      <x-button @click.native="ajaxGet" type="primary">ajaxGet</x-button>
      <x-button @click.native="asyncAjaxGet" type="primary">异步ajaxGet</x-button>
       <group>
          <x-input title="姓名" v-model="ajaxGetPara.name"></x-input>
        </group>
  </div>
</template>

<script>
    import { XInput,Group,XButton,dateFormat,base64 ,cookie,md5 ,numberComma,querystring } from 'vux';
    import axios from 'axios';

    export default{
      components:{ XInput,Group,XButton},
      data(){
        return{
          ajaxGetPara:{
            age:18,
            name:'qing'
          }
        }
      },
      methods:{
        async asyncAjaxGet(){
          try{
            const response = await axios.get('http://127.0.0.1:53261/api/Default/TestConnect');
            console.log(response.data);
          }catch(error){
            console.log(error);
          }
        },
        ajaxGet(){
          //请求接口
          axios.get('http://127.0.0.1:53261/api/Default/TestConnect2',{
            params:this.ajaxGetPara
          })
          .then(function(response){
            console.log(response.data);
          })
          .catch(function(error){
            console.log(error);
          })
          .then(function(){
            console.log('always executed');
          })
        }
      },
      created() {
        //日期格式
        console.log(dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss'));
        console.log(base64.encode('VUX'));
        //设置cookie
        cookie.set('foo',3);
        cookie.set('bar',4,{
          path:'/',
          expires:5
        });
        console.log('cookie:'+cookie.get('bar'));
        //md5
        console.log("md5:"+md5('VUX'));
        //number
        console.log("numberComma:"+numberComma(21342132));
        //querystring

      }
    }

</script>

<style>
</style>
