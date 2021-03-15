<template>
	<div id="home">
		<nav-bar>
			<template v-slot:left>
				<img @click="goCategory" src="~assets/images/home/fenlei.png" alt="" />
			</template>
			<template v-slot:center>
				<div>购物街</div>
			</template>
			<template v-slot:right>
				<div>登录</div>
			</template>
		</nav-bar>
	</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
	components: { NavBar },
	name: 'Home',
	methods: {
		goCategory() {
			//点击跳转至上次浏览页面
			// this.$router.go(-1)

			//指定跳转地址
			this.$router.replace('/category')
		},
	},
}
</script>

<style>
@import '~assets/css/reset.css';

.nav-bar {
	font-size: 18px;
	color: #fff;
	background-color: #e93b3d;
	box-shadow: 0 1px 1px rgba(100, 100, 100, .2);
}

.right {
	padding-top: 1px;
	font-size: 16px;
	text-align: left;
}

.left img {
	margin-top: -6px;
}
</style>