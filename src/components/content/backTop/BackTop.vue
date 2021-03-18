<template>
	<div class="back-top" >
		<img src="~assets/images/common/top.png" alt="" />
	</div>
</template>

<script>
export default {
	name: 'BackTop',
}
</script>

<style scoped>
.back-top {
	position: fixed;
	right: 16px;
	bottom: 80px;
	z-index: 99;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #fff;
}

.back-top img {
	position: relative;
	left: 4.5px;
	top: 5px;
}
</style>