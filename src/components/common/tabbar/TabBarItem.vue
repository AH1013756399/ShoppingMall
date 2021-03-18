<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>
		<div :style="activeStyle">
			<slot name="item-text"></slot>
		</div>
		<!-- <img src="../../assets/images/tabbar/home.png" alt="">
    <div>首页</div> -->
	</div>
</template>

<script>
export default {
	name: 'TabBarItem',
	props: {
		path: String,
		activeColor: {
			type: String,
			default: '#1296db',
		},
	},
	data() {
		return {
			// isActive: true
		}
	},
	computed: {
		isActive() {
			return this.$route.path.indexOf(this.path) !== -1
		},
		activeStyle() {
			return this.isActive ? { color: this.activeColor } : {}
		},
	},
	methods: {
		itemClick() {
			this.$router.replace(this.path)
		},
	},
}
</script>

<style>
.tab-bar-item {
	flex: 1;
	text-align: center;
	height: 1.31rem;
	font-size: 0.38rem;
}
.tab-bar-item img {
	margin-top: 0.08rem;
	width: 0.64rem;
	vertical-align: middle;
}
</style>