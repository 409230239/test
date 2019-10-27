<template>
	<div class="success-box">
		<div class="ewm-box">
			<p>恭喜您，提交成功!</p>
			<img src="../assets/img/ewm.jpg">
			<p>识别上方二维码加入学习</p>
			<div class="back-btn"><router-link to='/home'>返回</router-link></div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.success-box{text-align: center;padding-top:1.5rem}
	.ewm-box{margin:0.4rem;}
	.ewm-box img{width:50%;margin-bottom: 0.3rem;margin-top:0.3rem}
	.back-btn{background: #f6c858;width:100%;border-radius: 0.1rem;padding:0.2rem 0;
	margin-top:0.5rem}
	
</style>
