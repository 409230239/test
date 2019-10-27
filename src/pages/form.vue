<template>
	<div>
		<div class="home-liucheng">
				<div class="liucheng-box">
					<div class="off1"></div>
					<div class="off2"></div>
					<div class="off3 cur"></div>
				</div>
				<div class="liucheng-txt">
					<div class="txt1">完善资料</div>
					<div class="txt2">训练营公约</div>
					<div class="txt3 active">开始学习</div>
					<div class="clr"></div>
				</div>
		</div>
		<div class="form">
			<div class="form-txt">
				亲爱的小伙伴，欢迎你来到小白训练营。为了让我更好的帮助你成长，班班想拜托你填写完下面为你准备的《入营问卷》，
				我们一起完成财商从0到1的升级吧~
			</div>
			<div class="form-content">
				<form @submit.prevent="submit">
				<ul>
					<li>
						<p class="title">1、学历不代表能力,所以过去的你是一个？</p>
						<div class="input-box">
							<input type="radio" name='xueli' v-model="xueli" value="大专生及以下" id='dz'> <label for='dz'>大专生及以下</label>
							<input type="radio" name='xueli' v-model="xueli" value="本科生" id='bk'> <label for='bk'>本科生</label>
							<input type="radio" name='xueli' v-model="xueli" value="研究生及以上" id='yjs'> <label for='yjs'>研究生及以上</label>
							
						</div>
					</li>
					<li>
						<p class="title">2、你的职业是什么？</p>
						<div class="input-box">
							<input type="radio" name='zhiye' v-model="zhiye" value="学生" id='xs'> <label for='xs'>学生</label>
							<input type="radio" name='zhiye' v-model="zhiye" value="保妈" id='bm'> <label for='bm'>保妈</label>
							<input type="radio" name='zhiye' v-model="zhiye" value="公务员" id='gwy'> <label for='gwy'>公务员</label>
							<input type="radio" name='zhiye' v-model="zhiye" value="老师" id='ls'> <label for='ls'>老师</label>
							<input type="radio" name='zhiye' v-model="zhiye" value="市场销售" id='scxs'> <label for='scxs'>市场销售</label>
							<input type="radio" name='zhiye' v-model="zhiye" value="技术人员" id='jsry'> <label for='jsry'>技术人员</label>
							<input type="radio" name='zhiye' v-model="zhiye" value="创业者" id='cyz'> <label for='cyz'>创业者</label>
							<input type="radio" name='zhiye' v-model="zhiye" value="其他" id='qt'> <label for='qt'>其他</label>
							
						</div>
					</li>
					<li>
						<p class="title">3、有没有找到生命的另一半,你现在是？</p>
						<div class="input-box">
							<input type="radio" name='shenfen' v-model="shenfen" value="单身贵族" id='dsgz'> <label for='dsgz'>单身贵族</label>
							<input type="radio" name='shenfen' v-model="shenfen" value="恋爱ing" id='la'> <label for='la'>恋爱ing</label>
							<input type="radio" name='shenfen' v-model="shenfen" value="婚后二人世界" id='hhersj'> <label for='hhersj'>婚后二人世界</label>
							<input type="radio" name='shenfen' v-model="shenfen" value="已为人父母" id='ywrfm'> <label for='ywrfm'>已为人父母</label>
							
						</div>
					</li>
					<li>
						<p class="title">4、在风云变化的投资界，你是一个？</p>
						<div class="input-box">
							<input type="radio" name='jibie' v-model="jibie" value="萌新小白，需要从0开始" id='xb'> <label for='xb'>萌新小白，需要从0开始</label>
							<input type="radio" name='jibie' v-model="jibie" value="初级弟子，买过股票和资金" id='cjdz'> <label for='cjdz'>初级弟子，买过股票和资金</label>
							<input type="radio" name='jibie' v-model="jibie" value="理财老司机，玩得溜溜的" id='lsj'> <label for='lsj'>理财老司机，玩得溜溜的</label>
							
						</div>
					</li>
					<li>
						<p class="title">5、请问你的钱包每月能不能长胖？</p>
						<div class="input-box">
							<input type="radio" name='qian' v-model="qian" value="能，每月都吃得饱饱的" id='baobao'> <label for='baobao'>能，每月都吃得饱饱的</label>
							<input type="radio" name='qian' v-model="qian" value="不能，他快饿死了" id='es'> <label for='es'>不能，他快饿死了</label>
							<input type="radio" name='qian' v-model="qian" value="不能，一到月底就会饿" id='ke'> <label for='ke'>不能，一到月底就会饿</label>
							
						</div>
					</li>
					<li>
						<p class="title">6、查理芒格说，我们要了解自己的能力圈，你对什么知识比较感兴趣？</p>
						<div class="input-box">
							<input type="checkbox" name='xingqu' v-model="xingqu" value="股票" id='gp'> <label for='gp'>股票</label>
							<input type="checkbox" name='xingqu' v-model="xingqu" value="基金" id='jj'> <label for='jj'>基金</label>
							<input type="checkbox" name='xingqu' v-model="xingqu" value="保险"  id='bx'> <label for='bx'>保险</label>
							
						</div>
					</li>
					<li>
						<p class="title">7、给自己定一个小目标，百万富翁不是梦，你的目标？</p>
						<div class="input-box">
							<input type="checkbox" name='mubiao' v-model="mubiao" value="目前财务状况不佳，渴望获得理财知识来改变现状" id='cwbj'> <label for='cwbj'>目前财务状况不佳，渴望获得理财知识来改变现状</label>
							<input type="checkbox" name='mubiao' v-model="mubiao" value="想通过理财知识提升未来个人社会竞争能力" id='tsnl'> <label for='tsnl'>想通过理财知识提升未来个人社会竞争能力</label>
							<input type="checkbox" name='mubiao' v-model="mubiao" value="目前不差钱，想学习理财，是业务兴趣" id='bcq'> <label for='bcq'>目前不差钱，想学习理财，是业务兴趣</label>
							<input type="checkbox" name='mubiao' v-model="mubiao" value="身为宝爸宝妈，想学好理财知识，培养孩子财商" id='pyhz'> <label for='pyhz'>身为宝爸宝妈，想学好理财知识，培养孩子财商</label>
							
						</div>
					</li>
				</ul>
				<button type="submit">提交</button>
				</form>
			</div>
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
				xueli:'',
				zhiye:'',
				shenfen:'',
				jibie:'',
				qian:'',
				xingqu:[] ,
				mubiao:[] 
		    }
		  },
		 methods:{
			 submit () {
			 
			         if (!this.xueli) {
			            this.error=true;
			 			this.msg='请选择你的学历'
			 			setTimeout(() =>{
			 				this.error=false;
			 			},1000)
			             return false
			         }
					 if (!this.zhiye) {
					    this.error=true;
					 		this.msg='请选择你的职业'
					 		setTimeout(() =>{
					 			this.error=false;
					 		},1000)
					     return false
					 }
					 if (!this.shenfen) {
					    this.error=true;
					 		this.msg='请选择你有无伴侣'
					 		setTimeout(() =>{
					 			this.error=false;
					 		},1000)
					     return false
					 }
					 if (!this.jibie) {
					    this.error=true;
					 		this.msg='请选择你在投资界什么级别'
					 		setTimeout(() =>{
					 			this.error=false;
					 		},1000)
					     return false
					 }
					 if (!this.qian) {
					    this.error=true;
					 		this.msg='请选择你月收入情况'
					 		setTimeout(() =>{
					 			this.error=false;
					 		},1000)
					     return false
					 }
					 if (this.xingqu.length <= 0) {
					    this.error=true;
					 		this.msg='请选择你的兴趣'
					 		setTimeout(() =>{
					 			this.error=false;
					 		},1000)
					     return false
					 }
					 if (this.mubiao.length <= 0) {
					    this.error=true;
					 		this.msg='请选择你的目标'
					 		setTimeout(() =>{
					 			this.error=false;
					 		},1000)
					     return false
					 }
						this.$router.push({path:'/success'})
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
	.form{margin:0.4rem}
	.form-txt{margin-top:0.4rem;line-height:0.4rem;font-size:13px;}
	.form-content{margin-top:0.4rem;background: #fff;box-shadow: 0 0 0.3rem #eee;padding:0.3rem 0.3rem 0.6rem 0.3rem;border-radius: 0.2rem;}
	.form-content li{padding:0.2rem 0;}
	.form-content .title{line-height:0.4rem;font-size:13px;}
	.form-content .input-box{margin-top:0.2rem;font-size:13px;}
	.form-content .input-box input[type=radio]{display: none;}
	.form-content .input-box input[type=radio]+label{height:0.6rem;width: 100%;display: inline-block;box-sizing: border-box;line-height:0.4rem;
	background: url(../assets/img/off.png)no-repeat top left;background-size: 0.5rem;padding-left:0.6rem;padding-top:0.05rem}
	.form-content .input-box input[type=radio]:checked+label {
	background: url(../assets/img/on.png)no-repeat top left;background-size: 0.5rem;	
	}
	.form-content .input-box input[type=checkbox]{display: none;}
	.form-content .input-box input[type=checkbox]+label{height:0.6rem;width: 100%;display: inline-block;box-sizing: border-box;line-height:0.4rem;
	background: url(../assets/img/check_off.png)no-repeat top left;background-size: 0.5rem;padding-left:0.6rem;padding-top:0.05rem}
	.form-content .input-box input[type=checkbox]:checked+label {
	background: url(../assets/img/check_on.png)no-repeat top left;background-size: 0.5rem;	
	}
	.form-content button{background: #f6c858;width:100%;border:none;outline: none;border-radius: 0.1rem;padding:0.2rem 0;
	margin-top:0.5rem}
</style>
