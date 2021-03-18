<template>
	<div class="recommend">
		<div v-for="item in recommends" :key="item">
			<a :href="item.link">
				<img :src="item.image" alt="" />
				<p>{{ item.title }}</p>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommendView',
	props: {
		recommends: {
			type: Array,
			defaule() {
				return []
			},
		},
	},
}
</script>

<style scoped>
.recommend {
	height: 3.15rem;
	margin-top: 0.4rem;
	text-align: center;
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	border-bottom: 1px solid #eee;
}

.recommend img {
	width: 80%;
}

.recommend p {
	font-size: 0.38rem;
	color: #333;
	line-height: 2;
}
</style>