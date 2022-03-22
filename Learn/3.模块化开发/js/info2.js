let user = {
  name: '张三',
  age: 23,
  gender: '男',
  say:function(parm){
	  console.log(this.name+parm);
  }
}
export default user