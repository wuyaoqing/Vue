<template>
  <div>
    <divider>{{'dividerData'}}</divider>
    <flexbox>
          <flexbox-item><div class="flex-demo">1</div></flexbox-item>
          <flexbox-item><div class="flex-demo">2</div></flexbox-item>
          <flexbox-item><div class="flex-demo">3</div></flexbox-item>
    </flexbox>
     <br>
        <divider> {{'dividerData2'}} </divider>
        <flexbox orient="vertical">
          <flexbox-item><div class="flex-demo">1</div></flexbox-item>
          <flexbox-item><div class="flex-demo">2</div></flexbox-item>
        </flexbox>
  </div>
</template>

<i18n>
Horizontal:
  zh-CN: 水平
</i18n>

<script>
  import { Flexbox ,FlexboxItem,Divider} from 'vux'

  export default{
    components:{
      Flexbox ,FlexboxItem,Divider
    },
    data(){
      return{
        dividerData:'水平布局',
        dividerData2:'垂直布局'
      }
    }
  }
</script>

<style>
  .flex-demo {
    text-align: center;
    color: #fff;
    background-color: #20b907;
    border-radius: 4px;
    background-clip: padding-box;
  }
</style>
