<template>
	<div>
	<div class="home-liucheng">
			<div class="liucheng-box">
				<div class="off1 cur"></div>
				<div class="off2"></div>
				<div class="off3"></div>
			</div>
			<div class="liucheng-txt">
				<div class="txt1 active">完善资料</div>
				<div class="txt2">训练营公约</div>
				<div class="txt3">开始学习</div>
				<div class="clr"></div>
			</div>
	</div>
	<div class="form-box">
		<form @submit.prevent="submit">
		<ul>
			<li>
				<div class="txt-box">性别 <span class="red">*</span></div>
				<div class="input-box">
					 <input type="radio" name='sex' v-model="sex" value="小仙女" id='women' checked="checked"> <label for='women'>小仙女</label>
					 <input type="radio" name='sex' v-model="sex" value="男子汉" id='man'> <label for='man'>男子汉</label>
				</div>
			</li>
			<li>
				<div class="txt-box">生日 <span class="red">*</span></div>
				<div class="input-box">
					<input type="text" @click = "setDate" v-bind:value="date" placeholder="请选择日期"/>
				</div>
			</li>
			<li>
				<div class="txt-box">手机号码 <span class="red">*</span></div>
				<div class="input-box">
					<input type="text" placeholder="手机号码可以保存购货信息哦" v-model="mobile">
				</div>
			</li>
		</ul>
		<button type="submit">提交信息</button>
		</form>
	</div>
	 <div v-show='error' class="wrap">{{msg}}</div>
	</div>
</template>

<script>
	export default{
	data() {
	    return {
			msg:'',
			error:false,
			mobile: '',
			date:'',
	        sex:''
	    }
	  },
	  mounted:function(){
	        this.nowTimes();
	      },
	  methods: {

		setDate(){
				 this.$picker.show({
				 type:'datePicker',
				 date:this.date, //初始化时间
				 endTime:'2020-01-01',  //截至时间
		        startTime:'1919-01-01',  //开始时间
				 onOk: (date) =>{
				 		this.date = date;
				 		     }
				 		   });
				 		},
				 		timeFormate(timeStamp) {
				 		      let year = new Date(timeStamp).getFullYear();
				 		      let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
				 		      let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
				 		      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
				 		      let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
				 		      // let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
				 		      // return year + "年" + month + "月" + date +"日"+" "+hh+":"+mm ;
				 		      //this.date = year + "年" + month + "月" + date +"日"+" "+hh+":"+mm ;
				 		      this.date = year + "-" + month + "-" + date ;
				 		      // console.log(this.nowTime);
				 		},
				 		// 定时器函数
				 		nowTimes(){
				 		 this.timeFormate(new Date());
				 		 setInterval(this.nowTimes,30*1000);
				 },
				 submit () {
						if (!this.sex) {
						    this.error=true;
									this.msg='请选择你的性别'
									 setTimeout(() =>{
										 this.error=false;
									},1000)
						    return false
						}
				         if (!this.mobile) {
				             this.error=true;
							 this.msg='手机号码不能为空'
							  setTimeout(() =>{
								  this.error=false;
							  },1000)
				             return false
				         }
				 
				         if (this.mobile.length!=11) {
							 this.error=true;
							 this.msg='手机号格式不正确'
							  setTimeout(() =>{
							 	this.error=false;
							  },1000)
							 return false
				         }
				 
				        this.$router.push({path:'/gongyue'})
				         },

	  }
	  
	}
</script>

<style>
	.wrap{
	    position: fixed;
	    left: 50%;
	    top:50%;
	    background: rgba(0,0,0,.35);
	    padding: 10px;
	    border-radius: 5px;
	    transform: translate(-50%,-50%);
	    color:#fff;
	  }
	.form-box{border-radius: 0.2rem;background: #fff;box-shadow: 0 0 0.3rem #ddd;margin:1rem 0.4rem 0.4rem 0.4rem;
	padding:0.4rem;}
	.form-box li{padding:0.3rem 0;border-bottom: 1px solid #eee;display: flex;}
	.form-box .txt-box{width:30%;}
	.form-box .input-box{width:70%;}
	.form-box .input-box input[type=text]{font-size:12px;width: 100%;}
	.form-box button{background: #f6c858;width:100%;border:none;outline: none;border-radius: 0.1rem;padding:0.2rem 0;
	margin-top:0.5rem}
	.form-box .input-box input[type=radio]{display: none;}
	.form-box .input-box input[type=radio]+label{height:0.6rem;width: 45%;display: inline-block;box-sizing: border-box;line-height:0.4rem;
	background: url(../assets/img/off.png)no-repeat top left;background-size: 0.5rem;padding-left:0.6rem;padding-top:0.05rem}
	.form-box .input-box input[type=radio]:checked+label {
	background: url(../assets/img/on.png)no-repeat top left;background-size: 0.5rem;	
	}
	.red{color:red}

</style>
