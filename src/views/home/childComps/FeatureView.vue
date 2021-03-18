<template>
	<div class="feature">
		<h2>{{ message }}</h2>
		<div class="goods-wrap">
			<div v-for="item in showList" :key="item">
				<div class="goods-item">
					<a :href="item.link">
						<img :src="item.show.img" alt="" />
						<p>{{ item.title }}</p>
						<span>{{ item.orgPrice }}</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FeatureView',
	data() {
		return {
			message: '本周流行',
		}
	},
	props: {
		showList: {
			type: Array,
			defaule() {
				return []
			},
		},
	},
}
</script>

<style scoped>
.goods-wrap {
	padding-left: 0.2rem;
	box-sizing: border-box;
	zoom: 1;
	width: 100%;
}

.goods-item {
	padding-right: 0.2rem;
	box-sizing: border-box;
	margin-bottom: 0.3rem;
	float: left;
	width: 50%;
}

.goods-item p {
	margin-top: 0.2rem;
	line-height: 1.5;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}

.goods-item img {
	border-radius: 0.2rem;
	width: 100%;
	height: 7rem;
}

.goods-item span {
	padding-top: 0.2rem;
	color: #fa2c19;
	font-size: 0.38rem;
}

.feature h2 {
	margin: 0.3rem 0;
	color: #333;
	font-size: 0.48rem;
	text-align: center;
}

.goods-wrap::after {
	content: '020';
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}
</style>