<template>
	<div>
		<div class="home-liucheng">
				<div class="liucheng-box">
					<div class="off1"></div>
					<div class="off2 cur"></div>
					<div class="off3"></div>
				</div>
				<div class="liucheng-txt">
					<div class="txt1">完善资料</div>
					<div class="txt2 active">训练营公约</div>
					<div class="txt3">开始学习</div>
					<div class="clr"></div>
				</div>
		</div>
		<moshi></moshi>
		<guize></guize>
	</div>
</template>

<script>
	import moshi from '../components/xuexi-moshi'
	import guize from '../components/guize'
	export default{
		components:{
			moshi,
			guize
		}
	}
</script>

<style>
	
</style>
