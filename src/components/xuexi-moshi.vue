<template>
	<div class="moshi-box">
		<h2>学习模式</h2>
		<div class="moshi-content">
			<div class="title">
				<div class="num">01</div>
				<div class="txt">8节语音+图文课程、作业讲评、案例分享及现场解答</div>
			</div>
			<div class="icon-box">
				<ul>
					<li>
						<p class="icon"><span class="iconfont icon-yuyin"></span></p>
						<p class="txt">语音图文</p>
					</li>
					<li>
						<p class="icon"><span class="iconfont icon-zuoyegaishanfenxi"></span></p>
						<p class="txt">作业讲评</p>
					</li>
					<li>
						<p class="icon"><span class="iconfont icon-fenxiang"></span></p>
						<p class="txt">案例分享</p>
					</li>
					<li>
						<p class="icon"><span class="iconfont icon-huida"></span></p>
						<p class="txt">现场答疑</p>
					</li>
				</ul>
				<div class="clr"></div>
			</div>
			<div class="title">
				<div class="num">02</div>
				<div class="txt">14天专属社群，班班、助教全程跟进，手把手带你学</div>
			</div>
		</div>
	</div>
</template>

<script>	
export default{
	name:'xuexi-moshi'
}
</script>

<style>
	.moshi-box{padding-top:0.8rem;}
	.moshi-box h2{text-align: center;font-size:18px;font-family:PingFang SC;font-weight: bold;}
	.moshi-content{margin:0.4rem;background: #fff;box-shadow: 0 0 0.3rem #eee;padding:0.3rem 0.3rem 0.6rem 0.3rem;border-radius: 0.2rem;}
	.moshi-content .title{display: flex;margin-top:0.4rem}
	.moshi-content .num{width:0.8rem;height:0.8rem;background: #F6C858;border-radius: 0.8rem;text-align: center;
	line-height: 0.8rem;font-size: 0.48rem;}
	.moshi-content .txt{flex: 1;margin-left:0.2rem;line-height: 0.4rem;color:#333;font-weight: bold;}
	.icon-box{margin-top:0.4rem;}
	.icon-box li{width:25%;text-align: center;float:left;}
	.icon-box .icon{color:#F6C858;font-size:28px;margin-bottom:0.2rem;}
	.icon-box .txt{font-size:12px;color:#666}
</style>
