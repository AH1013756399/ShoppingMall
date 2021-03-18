<template>
	<div class="goods-wrap">
		<div class="goods-item">
			<img :src="goodsItem.show.img" alt="" />
			<div class="pric">
				<h4>{{ goodsItem.title }}</h4>
				<span>{{ goodsItem.orgPrice }}</span>
				<p>收藏:{{ goodsItem.cfav }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GoodsListItem',
	props: {
		goodsItem: {
			type: Object,
			default() {
				return {}
			},
		},
	},
}
</script>

<style scoped>
.goods-wrap {
	float: left;
	width: 50%;
	padding-right: 0.2rem;
	box-sizing: border-box;
}

.goods-item {
	margin-bottom: 0.4rem;
}

.goods-item img {
	border-radius: 0.2rem;
	width: 100%;
	height: 7rem;
}

.pric span {
	position: relative;
	top: 0.19rem;
	z-index: -1;
	color: #fa2c19;
	font-size: 0.38rem;
}

.pric h4 {
	margin-top: 0.2rem;
	line-height: 1.5;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}

.pric p {
	padding-top: 0.2rem;
	font-size: 0.32rem;
	color: #333;
	float: right;
}
</style>